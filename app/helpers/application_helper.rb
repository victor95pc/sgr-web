#encoding: utf-8
module ApplicationHelper

  def listar_menu_superior
    menu_superior = {
        'Clientes' => clientes_path,
        'Funcionários' => funcionarios_path
    }

    menu_superior.each do |nome_menus, link_menus|
      if request.path.start_with? link_menus
        ativo = 'ativo'
      else
        ativo = nil
      end
      yield nome_menus, link_menus, ativo
    end
  end

end
