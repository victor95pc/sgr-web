#encoding: utf-8
module ApplicationHelper

  def listar_menu_superior
    menu_superior = {
        'Clientes' => clientes_cadastros_path,
        'Funcionários' => funcionarios_cadastros_path,
        'Finanças' => financas_pagamentos_clientes_path,
        'Promoções' => promocoes_promocoes_especiais_path
    }

    menu_superior.each do |nome_menus, link_menus|
      if link_menus.start_with? '/'+controller_name
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
                'Cadastros' => clientes_cadastros_path,
                'Frequência' => clientes_frequencia_path
            },

        'funcionarios' =>
            {
                'Cadastros' => funcionarios_cadastros_path
            },
        'financas' =>
            {
                'Pagamentos Clientes' => financas_pagamentos_clientes_path
            },
        'promocoes' =>
            {
                'Promoções Especiais' => promocoes_promocoes_especiais_path,
                'Promoções Padrão' => promocoes_promocoes_padrao_path
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
