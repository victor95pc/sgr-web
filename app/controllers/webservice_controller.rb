#encoding: utf-8
class WebserviceController < ApplicationController
  def mudar_preco
    valor = params[:valor_kg]
    if verificar_paramentros valor
      if Configuracao.mudar_preco_kg(valor)
        render text: 'Preço Alterado com Suceso', status: 200
      else
        render text: 'Erro ao Alterar o Preço', status: 417
      end
    else
      render text: '::ERRO', status: 417
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
      render text: '::ERRO', status: 417
    end
  end

  def vincular_cliente
    nome = params[:nome]
    telefone = params[:telefone]
    cep = params[:cep]
    numero_cartao = params[:cartao]

    if verificar_paramentros nome, numero_cartao
      cartao = Cartao.where(numero_cartao: numero_cartao).first
      cliente = Cliente.new nome: nome, cep: cep, telefone: telefone, cartao: cartao
      salvar_modelo(cliente, 'Sucesso', '::ERRO')
    else
      render text: '::ERRO', status: 417
    end
  end

  def desvincular_cliente
    numero_cartao = params[:cartao]
    if verificar_paramentros numero_cartao
      Cliente.remover_vinculo numero_cartao
      render text: 'Sucesso', status: 200
    else
      render text: '::ERRO', status: 417
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
            render text: '::ERRO', status: 417
        end
        comandas.each { |comanda| salvar_modelo(comanda, 'Alterado', '::ERRO') }
      else
        render text: '::ERRO', status: 417
      end
    else
      render text: '::ERRO', status: 417
    end
  end

  def listar_comandas
    numero_cartao = params[:cartao]
    if verificar_paramentros numero_cartao
      comandas = Comanda.comanda_a_pagar numero_cartao

      if comandas.present?
        render json: comandas, status: 200
      else
        render text: '::ERRO', status: 417
      end
    else
      render text: '::ERRO', status: 417
    end
  end

  def listar_promocoes_especiais
    id_cliente = params[:id_cliente]
    if verificar_paramentros id_cliente
      promocoes_especiais = Promocao.promocoes_especias id_cliente

      if promocoes_especiais.present?
        render json: promocoes_especiais, status: 200
      else
        render text: '::ERRO', status: 417
      end
    else
      render text: '::ERRO', status: 417
    end
  end

  def listar_promocoes_padrao
    promocoes_padrao = Promocao.promocoes_padrao

    if promocoes_padrao.present?
      render json: promocoes_padrao, status: 200
    else
      render text: '::ERRO', status: 417
    end
  end

  def listar_produtos_pagos
    id_comanda = params[:id_comanda]
    if verificar_paramentros id_comanda
      produtos_pagos = ProdutoPago.where(comanda_id: id_comanda)
      if produtos_pagos.present?
        render json: produtos_pagos, status: 200
      else
        render text: '::ERRO', status: 417
      end
    else
      render text: '::ERRO', status: 417
    end
  end

  def pesquisar_cliente
    numero_cartao = params[:numero_cartao]
    if verificar_paramentros numero_cartao
      cartao = Cartao.find_by_numero_cartao numero_cartao
      if cartao.present?
        cliente = Cliente.pesquisar cartao
        if cliente.present?
          render json: cliente, status: 200
        else
          render nothing: true, status: 200
        end
      else
        render nothing: true, status: 404
      end
    else
      render nothing: true, status: 500
    end
  end

  def trocar_cartao
    cartao_antigo = params[:cartao_antigo]
    cartao_novo = params[:cartao_novo]
    if verificar_paramentros cartao_antigo, cartao_novo
      case Cliente.trocar_cartao(cartao_antigo, cartao_novo)
        when 'cliente cadastrado'
          render nothing: true, status: 200
        when 'cartao em uso'
          render nothing: true, status: 304
        when 'cartao novo nao encotrado'
          render nothing: true, status: 404
        else
          render nothing: true, status: 500
      end
    else
      render nothing: true, status: 500
    end
  end

  def verificar_codigo
    codigo_produto = params[:codigo]

    if verificar_paramentros codigo_produto
      produto = Produto.procurar_produto codigo_produto
      if produto.present?
        render text: '::EXISTE', status: 200
      else
        render text: '::NAO', status: 417
      end
    else
      render text: '::NAO', status: 417
    end
  end

  def logar_operador
    usuario = params[:usuario]
    senha = params[:senha]

    if verificar_paramentros usuario, senha
      operador = Operador.find_by usuario: usuario, senha: senha
      if operador.present?
        render nothing: true, status: 200
      else
        render text: 'Usuário ou senha estão incorretos', status: 417
      end
    else
      render text: 'Campos usuário ou senha não podem ficar vazios', status: 417
    end
  end

  private
  def verificar_paramentros(*campos)
    existe = true
    campos.each do |campo|
      if campo.blank?
        existe = false
      end
    end
    existe
  end

  def salvar_modelo(model, mensagem_ok, mensagem_error)
    if model.save!
      render text: mensagem_ok, status: 200
    else
      render text: mensagem_error, status: 417
    end
  end
end