#encoding: utf-8
module ApplicationHelper

  def listar_menu_superior
    menu_superior = {
        'Clientes' => cadastros_clientes_path,
        'Funcionários' => cadastros_funcionarios_path,
        'Finanças' => pagamentos_clientes_financas_path,
        'Promoções' => promocoes_especiais_promocoes_path,
        'Configuração' => preco_configuracoes_path
    }

    menu_superior.each do |nome_menus, link_menus|
      if link_menus.start_with? '/'+controller_name or link_menus.start_with? controller_name
        ativo = 'ativo'
      else
        ativo = nil
      end
      yield nome_menus, link_menus, ativo
    end
  end

  def listar_menu_lateral
    menu_lateral = {
        'clientes' =>
            {
                'Cadastros' => cadastros_clientes_path,
                'Frequência' => frequencia_clientes_path
            },

        'funcionarios' =>
            {
                'Cadastros' => cadastros_funcionarios_path
            },
        'financas' =>
            {
                'Pagamentos Clientes' => pagamentos_clientes_financas_path
            },
        'promocoes' =>
            {
                'Promoções Especiais' => promocoes_especiais_promocoes_path,
                'Promoções Padrão' => promocoes_padrao_promocoes_path
            },
        'configuracoes' =>
            {
                'Preço' => preco_configuracoes_path,
                'Sobre' => sobre_configuracoes_path,
            }
    }

    menu_lateral[controller_name].each do |nome_menus, link_menus|
      if request.path == link_menus
        ativo = 'ativo'
      else
        ativo = nil
      end
      yield nome_menus, link_menus, ativo
    end
  end

end
