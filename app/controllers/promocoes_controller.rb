class PromocoesController < ApplicationController

  def promocoes_especiais

  end

  def promocoes_padrao

  end

  def ajax_promocoes_especiais_grid
    palom_grid Promocao, {where: 'cliente_id IS NOT NULL'}, :nome, :valor, :descricao do |oper, custons, promocao|
      case oper
        when 'add', 'edit'
          promocao.cliente = Cliente.find_by("nome LIKE '%#{params[:nome]}%'")
        when 'show'
          custons[:cliente] = promocao.cliente.nome
      end
    end
  end

  def ajax_promocoes_padrao_grid
    palom_grid Promocao, {where: 'cliente_id IS NULL'}, :nome, :valor, :descricao
  end

end
