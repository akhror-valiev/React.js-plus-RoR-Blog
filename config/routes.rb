Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
