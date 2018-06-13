Rails.application.routes.draw do
  devise_for :users, skip: [ :sessions, :registrations, :passwords ]

  root to: 'root#index'

  devise_scope :user do
    post '/api/users/sign_in'  => 'api/users/sessions#create', as: :new_user_session
    delete '/api/users/sign_out' => 'api/users/sessions#destroy', as: :destroy_user_session

    post '/api/users' => 'api/users/registrations#create'
    patch '/api/users' => 'api/users/registrations#update'

    post '/api/users/password' => 'api/users/passwords#create'
    patch '/api/users/password' => 'api/users/passwords#update', as: :user_password
    get '/reset_password' => 'root#index', as: :edit_user_password
  end

  namespace :api do
    get 'current_user' => 'users/users#get_current_user'
    get 'staff' => 'users/users#index'
    get 'staff/:id' => 'users/users#show'
    post 'staff' => 'users/users#create'
    post 'staff/create_invite' => 'users/users#create_invite'
    patch 'staff/:id' => 'users/users#update'
    delete 'staff/:id' => 'users/users#destroy'

    patch 'themes/:id' => 'themes#update'
    resources :themes, param: :name

    patch 'panels/:id' => 'panels#update'
    resources :panels, param: :name

    patch 'pages/:id' => 'pages#update'
    resources :pages, param: :url

    delete 'contacts/unsubscribe' => 'contacts#unsubscribe'
    resources :contacts

    resources :images

    get 'volunteers/number_of_pages' => 'volunteers#get_number_of_pages'
    resources :volunteers

    resources :messages
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
