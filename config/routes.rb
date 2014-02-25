SGR::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  get '/' => redirect('clientes/cadastros')

  devise_scope :user do
    get 'cliente/esqueceu-senha' => 'devise/passwords#new', as: 'new_user_password'
    get 'cliente/reenviar-email' => 'devise/confirmations#new', as: 'new_user_confirmation'
  end
  devise_for :users, :path => :cliente, :path_names => {sign_in: 'logar', sign_out: 'deslogar', sign_up: 'registar'}

  resources :clientes, only: [] do
    collection do
      root to: :cadastros
      get :ajax_cadastros_grid
      get :ajax_grafico_frequencia
      post :ajax_cadastros_grid
      get :cadastros
      get :frequencia
    end
  end

  resources :funcionarios, only: [] do
    collection do
      root to: :cadastros
      get :operadores
      get :cadastros
      get :ajax_cadastros_grid
      get :ajax_operadores_grid
      post :ajax_cadastros_grid
      post :ajax_operadores_grid
    end
  end

  resources :financas, only: [] do
    collection do
      root to: :pagamentos_clientes
      get :pagamentos_clientes
      post :ajax_pagamentos_clientes_grid
      get :ajax_pagamentos_clientes_grid
    end
  end

  resources :promocoes, only: [] do
    collection do
      root to: :promocoes_especiais
      get :promocoes_especiais
      get :promocoes_padrao
      get :promocoes_especiais
      get :ajax_promocoes_especiais_grid
      get :ajax_promocoes_padrao_grid
      post :ajax_promocoes_especiais_grid
      post :ajax_promocoes_padrao_grid
    end
  end

  resources :configuracoes, only: [] do
    collection do
      root to: :preco
      get :preco
      get :sobre
      post :mudar_preco
    end
  end

  resources :webservice, only: [] do
    collection do
      get :mudar_preco
      get :adicionar_comanda
      get :vincular_cliente
      get :desvincular_cliente
      get :mudar_status
      get :listar_comandas
      get :listar_promocoes_especiais
      get :listar_promocoes_padrao
      get :listar_produtos_pagos
      get :pesquisar_cliente
      get :trocar_cartao
      get :verificar_codigo
      get :logar_operador
    end
  end
end
