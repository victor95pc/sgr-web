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
    menus = ''
    menu_superior.each do |nome_menus, link_menus|
      if link_menus.start_with? '/'+controller_name or link_menus.start_with? controller_name
        menus << link_to(nome_menus, link_menus, class: 'ativo')
      else
        menus << link_to(nome_menus, link_menus)
      end
    end

    menus.html_safe
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
                'Cadastros' => cadastros_funcionarios_path,
                'Operadores' => operadores_funcionarios_path
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
    menus = ''
    menu_lateral[controller_name].each do |nome_menus, link_menus|
      if request.path == link_menus
        menus << link_to(nome_menus, link_menus, class: 'ativo')
      else
        menus << link_to(nome_menus, link_menus)
      end
    end

    menus.html_safe
  end

  def devise_error_messages
    return "" if resource.errors.empty?

    messages = resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join

    html = <<-HTML
    <div id="error_explanation">
      <ul>#{messages}</ul>
    </div>
    HTML

    html.html_safe
  end

end
