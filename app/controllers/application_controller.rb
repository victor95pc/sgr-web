class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def to_boolean(string)
    true if string == 'true'
    false
  end

  def palom_grid(model, config_params, *columns)
    config_params[:save] ||= true
    config_params[:destroy] ||= true
    config_params[:id] ||= :id
    config_params[:created_at] ||= false
    config_params[:updated_at] ||= false

    oper = params[:oper]
    id = params[:id]
    model_obj = nil

    case oper
      when 'edit'
        if model.present?
          model_obj = model.find id
          columns.each do |column|
            model_obj[column] = params[column]
          end
        end

        yield oper, nil, model_obj if block_given?

        if model.present?
          if model_obj.valid?
            model_obj.save if config_params[:save]
            render json: model_obj, status: :ok
          else
            render json: model_obj.errors.full_messages, status: :internal_server_error
          end
        end

      when 'add'
        if model.present?
          model_obj = model.new
          columns.each do |column|
            model_obj[column] = params[column]
          end
          model_obj[config_params[:id]] = id
        end

        yield oper, nil, model_obj if block_given?

        if model.present?
          if model_obj.valid?
            model_obj.save if config_params[:save]
            render json: model_obj, status: :ok
          else
            render json: model_obj.errors.full_messages, status: :internal_server_error
          end
        end

      when 'del'
        if model.present?
          model_obj = model.where(config_params[:id] => id).first
        end

        yield oper, nil, model_obj if block_given?
        if model.present?
          if model_obj.present?
            binding.pry
            model_obj.destroy if config_params[:destroy]
            render nothing: true, status: :ok
          else
            render nothing: true, status: :internal_server_error
          end
        end

      when 'show'

        page = params[:page].to_i
        limit = params[:rows].to_i
        sidx = params[:sidx]
        sord = params[:sord]
        search = to_boolean(params[:_search])
        search_field = params[:searchField]
        search_string = params[:searchString]
        total_pages = 0
        count = model.count
        total_pages = (count / limit.to_f).ceil if count > 0

        page = total_pages if page > total_pages

        start = limit * page - limit

        resposta = Hash.new
        resposta[:page] = page
        resposta[:total] = total_pages
        resposta[:records] = count

        if model.present?
          if (search)
            model_results = model.find_by("#{search_field} LIKE '%#{search_string}%'").order("#{sidx} #{sord}").limit(limit).offset(start)
          else
            model_results = model.all
          end
        else
          yield oper, model_results, nil
        end

        resposta[:rows] = Array.new

        model_results.each_with_index do |model_obj, id|
          resposta[:rows][id] = Hash.new
          resposta[:rows][id][:id] = model_obj.id
          resposta[:rows][id][:cell] = Hash.new

          columns.each do |column|
            resposta[:rows][id][:cell][column] = model_obj[column]
          end
          resposta[:rows][id][:cell][:created_at] = model_obj[:created_at] if config_params[:created_at]
          resposta[:rows][id][:cell][:updated_at] = model_obj[:updated_at] if config_params[:updated_at]

          yield oper, resposta[:rows][id][:cell], model_obj if block_given? and model.present?
        end

        binding.pry
        render json: resposta, status: :ok
    end
  end
end

