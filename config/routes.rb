SGR::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  #root 'clientes#cadastros'

  get 'clientes' => redirect('clientes/cadastros')
  get 'clientes/ajax_cadastros_grid' => 'clientes#ajax_cadastros_grid'
  post 'clientes/ajax_cadastros_grid' => 'clientes#ajax_cadastros_grid'
  get 'clientes/cadastros' => 'clientes#cadastros'
  get 'clientes/frequencia' => 'clientes#frequencia'
  get 'clientes/ajax_grafico_frequencia' => 'clientes#ajax_grafico_frequencia'

  get 'funcionarios' => redirect('funcionarios/cadastros')
  get 'funcionarios/cadastros' => 'funcionarios#cadastros'
  post 'funcionarios/ajax_cadastros_grid' => 'funcionarios#ajax_cadastros_grid'
  get 'funcionarios/ajax_cadastros_grid' => 'funcionarios#ajax_cadastros_grid'

  get 'financas' => redirect('financas/pagamentos_clientes')
  get 'financas/pagamentos_clientes' => 'financas#pagamentos_clientes'
  get 'financas/ajax_pagamentos_clientes_grid' => 'financas#ajax_pagamentos_clientes_grid'
  post 'financas/ajax_pagamentos_clientes_grid' => 'financas#ajax_pagamentos_clientes_grid'

  get 'promocoes' => redirect('promocoes/promocoes_especiais')
  get 'promocoes/promocoes_especiais' => 'promocoes#promocoes_especiais'
  get 'promocoes/promocoes_padrao' => 'promocoes#promocoes_padrao'
  get 'promocoes/ajax_promocoes_especiais_grid' => 'promocoes#ajax_promocoes_especiais_grid'
  get 'promocoes/ajax_promocoes_padrao_grid' => 'promocoes#ajax_promocoes_padrao_grid'
  post 'promocoes/ajax_promocoes_especiais_grid' => 'promocoes#ajax_promocoes_especiais_grid'
  post 'promocoes/ajax_promocoes_padrao_grid' => 'promocoes#ajax_promocoes_padrao_grid'

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
