#encoding: utf-8
class ClientesController < ApplicationController
  before_filter :authenticate_user!

  def cadastros

  end

  def ajax_cadastros_grid
    palom_grid(Cliente, {created_at: true}, :nome, :telefone, :cep) do |oper, custons, cliente|
      case oper
        when 'add'
          cliente.cartao = Cartao.find_by_numero_cartao params[:numero_cartao]
        when 'edit'
          cliente.cartao.numero_cartao = params[:numero_cartao]

        when 'show'
          custons[:numero_cartao] = cliente.cartao.numero_cartao
      end
    end
  end

  def frequencia

  end

  def ajax_grafico_frequencia
    comandas = Comanda.where(status: 2).group(:created_at).sum(1)
    datas = Array.new
    comandas.each do |data, vezes|
      datas << [data.to_formatted_s(:db), vezes]
    end
    render json: datas
  end

end
