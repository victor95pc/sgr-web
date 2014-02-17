SGR::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  get '/' => redirect('clientes/cadastros')

  devise_for :users, :path => :cliente, :path_names => {sign_in: 'logar', sign_out: 'deslogar', sign_up: 'registar'} do
    get 'cliente/esqueceu-senha' => 'devise/passwords#new', as: 'new_user_password'
  end

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
      get :ajax_cadastros_grid
      post :ajax_cadastros_grid
      get :cadastros
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

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
