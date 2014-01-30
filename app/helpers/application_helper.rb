#encoding: utf-8
module ApplicationHelper

  def listar_menu_superior
    menu_superior = {
        'Clientes' => clientes_cadastros_path,
        'Funcionários' => funcionarios_cadastros_path
    }

    menu_superior.each do |nome_menus, link_menus|
      if request.path == link_menus
        ativo = 'ativo'
      else
        ativo = nil
      end
      yield nome_menus, link_menus, ativo
    end
  end

end
