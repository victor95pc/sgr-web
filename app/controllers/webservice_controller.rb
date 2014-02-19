#encoding: utf-8
class WebserviceController < ApplicationController
  def mudar_preco
    valor = params[:valor_kg]
    if verificar_paramentros valor
      if Configuracao.mudar_preco_kg(valor)
        render text: 'Preço Alterado com Suceso', status: 200
      else
        render text: 'Erro ao Alterar o Preço', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def adicionar_comanda
    numero_cartao = params[:cartao].hex
    codigos_produtos = params[:codigos]
    quantidades = params[:quantidades]
    peso = params[:peso].to_i

    if verificar_paramentros numero_cartao, peso
      valor = 0
      codigos_produtos.each_with_index do |codigo, index|
        valor += Produto.procurar_produto(codigo).valor * quantidades[index].to_i
      end
      valor += Configuracao.preco_kg * peso

      cartao = Cartao.where(numero_cartao: numero_cartao).first

      comanda_nova = Comanda.new peso: peso, valor: valor, cartao: cartao, status: 1
      salvar_modelo(comanda_nova, '::OK', '::ERRO')
    else
      render text: '::ERRO', status: 500
    end
  end

  def vincular_cliente
    nome = params[:nome]
    telefone = params[:nome]
    cep = params[:nome]
    numero_cartao = params[:cartao]

    if verificar_paramentros nome, numero_cartao
      cartao = Cartao.where(numero_cartao: numero_cartao).first
      cliente = Cliente.new nome: nome, cep: cep, telefone: telefone, cartao: cartao
      salvar_modelo(cliente, 'Sucesso', '::ERRO')
    else
      render text: '::ERRO', status: 500
    end
  end

  def desvincular_cliente
    numero_cartao = params[:cartao]
    if verificar_paramentros numero_cartao
      Cliente.remover_vinculo numero_cartao
      render text: 'Sucesso', status: 200
    else
      render text: '::ERRO', status: 500
    end
  end

  def mudar_status
    numero_cartao = params[:cartao]
    comando = params[:comando]

    if verificar_paramentros numero_cartao, comando
      comandas = Comanda.comanda_a_pagar numero_cartao
      if comandas.present?
        case comando
          when 'pagar'
            comandas.each { |comanda| comanda.status = 2 }
          when 'cancelar'
            comandas.each { |comanda| comanda.status = 3 }
          else
            render text: '::ERRO', status: 500
        end
        comandas.each { |comanda| salvar_modelo(comanda, 'Alterado', '::ERRO') }
      else
        render text: '::ERRO', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def listar_comandas
    numero_cartao = params[:cartao]
    if verificar_paramentros numero_cartao
      comandas = Comanda.comanda_a_pagar numero_cartao

      if comandas.present?
        render json: comandas, status: 200
      else
        render text: '::ERRO', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def listar_promocoes_especiais
    id_cliente = params[:id_cliente]
    if verificar_paramentros id_cliente
      promocoes_especiais = Promocao.promocoes_especias id_cliente

      if promocoes_especiais.present?
        render json: promocoes_especiais, status: 200
      else
        render text: '::ERRO', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def listar_promocoes_padrao
    promocoes_padrao = Promocao.promocoes_padrao

    if promocoes_padrao.present?
      render json: promocoes_padrao, status: 200
    else
      render text: '::ERRO', status: 500
    end
  end

  def listar_produtos_pagos
    id_comanda = params[:id_comanda]
    if verificar_paramentros id_comanda
      produtos_pagos = ProdutoPago.where(comanda_id: id_comanda)
      if produtos_pagos.present?
        render json: produtos_pagos, status: 200
      else
        render text: '::ERRO', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def pesquisar_cliente
    nome = params[:nome]
    if verificar_paramentros nome
      cliente = Cliente.pesquisar nome
      if cliente.present?
        render json: cliente, status: 200
      else
        render text: '::ERRO', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def trocar_cartao
    nome = params[:nome]
    numero_cartao = params[:cartao]

    if verificar_paramentros nome, numero_cartao
      if Cliente.trocar_cartao(nome, numero_cartao)
        render text: '::OK', status: 200
      else
        render text: '::ERRO', status: 500
      end
    else
      render text: '::ERRO', status: 500
    end
  end

  def verificar_codigo
    codigo_produto = params[:codigo]

    if verificar_paramentros codigo_produto
      produto = Produto.procurar_produto codigo_produto
      if produto.present?
        render text: '::EXISTE', status: 200
      else
        render text: '::NAO', status: 500
      end
    else
      render text: '::NAO', status: 500
    end
  end

  private
  def verificar_paramentros(*campos)
    campos.each { |campo| false if campo.blank? }
    true
  end

  def salvar_modelo(model, mensagem_ok, mensagem_error)
    if model.save!
      render text: mensagem_ok, status: 200
    else
      render text: mensagem_error, status: 500
    end
  end
end