#encoding: utf-8
class FinancasController < ApplicationController
  before_filter :authenticate_user!

  def pagamentos_clientes

  end

  def ajax_pagamentos_clientes_grid
    palom_grid Comanda, {updated_at: true}, :valor, :peso, :status do |oper, custons, comanda|
      case oper
        when 'add', 'edit'
          comanda.valor = Configuracao.calcular_peso params[:peso]
          comanda.cartao = Cartao.find_by_numero_cartao params[:numero_cartao]
        when 'show'
          cliente = Cliente.where(cartao: comanda.cartao).first
          custons[:cliente] = cliente.present? ? cliente.nome : 'CLIENTE NÃO CADASTRADO'
          custons[:numero_cartao] = comanda.cartao.numero_cartao
      end
    end
  end
end
