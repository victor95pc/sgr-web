class ConfiguracoesController < ApplicationController
  before_action :get_configuracao, only: [:mudar_preco, :preco]
  before_filter :authenticate_user!

  def preco
  end

  def sobre
  end

  def mudar_preco
    if @configuracao.update(configuracao_params)
      flash[:notice] = 'Alterado com sucesso!'
    else
      flash[:notice] = 'Formato invalido.'
    end
    render 'preco'
  end

  private
  def get_configuracao
    @configuracao = Configuracao.first
  end

  def configuracao_params
    params.require(:configuracao).permit(:valor_kg)
  end
end
