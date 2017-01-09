Bundler.require

register React::Sinatra

configure do
  React::Sinatra.configure do |config|
    config.use_bundled_react = true
    config.env = :development
    config.runtime      = :execjs
    config.asset_path   = %w(client/dist/server.js)
    config.pool_size    = 5
    config.pool_timeout = 10
  end
end

set :views, File.join(__dir__, 'views')
set :public_folder, 'public'

get ?/ do
  'this is an example for react-siantra'
end

get '/react-component' do
  haml :'react-component', layout: true
end

get '/react-component-with-server' do
  haml :'react-component-with-server', layout: true
end
