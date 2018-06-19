Rails.application.routes.draw do
  root to: 'root#index'

  namespace :api do
    patch 'themes/:id' => 'themes#update'
    resources :themes, param: :name

    patch 'panels/:id' => 'panels#update'
    resources :panels, param: :name

    patch 'pages/:id' => 'pages#update'
    resources :pages, param: :url

    resources :images

    resources :content, param: :identifier
    
    get 'posts/:post_type' => 'posts#index'
    get 'posts/:post_type/:url' => 'posts#show'
    post 'posts' => 'posts#create'
    patch 'posts/:id' => 'posts#update'
    delete 'posts/:post_type/:url' => 'posts#destroy'

    post 'mail/send_to_contacts' => 'mail#send_to_contacts'
  end

  get '*path', to: 'root#index', :constraints => lambda{|req| req.path !~ /\.(min.css|min.js)$/ }
end
