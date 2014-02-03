#encoding: utf-8
class FinancasController < ApplicationController
  def pagamentos_clientes

  end

  def ajax_pagamentos_clientes_grid
    palom_grid Comanda, {updated_at: true}, :valor, :peso, :status do |oper, custons, comanda|
      case oper
        when 'add', 'edit'
          comanda.valor = Configuracao.calcular_peso params[:peso]
          comanda.cartao = Cartao.find_by_numero_cartao params[:numero_cartao]
        when 'show'
          cliente = Cliente.find comanda.cartao
          custons[:cliente] = cliente.present? ? cliente.nome : 'CLIENTE NÃO CADASTRADO'

          case comanda.status
            when 1
              custons[:status] = 'Pagar'
            when 2
              custons[:status] = 'Pago'
            when 3
              custons[:status] = 'Cancelado'
          end
      end
    end
  end
end
