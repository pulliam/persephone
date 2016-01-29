Rails.application.routes.draw do

  root to: "welcome#index"

  resources :articles, :categories, :users, :welcome
  get '/aboutus' => "welcome#about_us"
  get '/article_by_order/:order' => "articles#by_order"
  get '/login' => "users#login"
  get '/register' => "users#register"

  resources :articles do
    resources :records
  end

  resources :categories do
    resources :articles
  end

  resources :users do
    resources :articles
  end

end
