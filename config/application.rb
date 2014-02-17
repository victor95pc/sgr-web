require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module SGR
  class Application < Rails::Application
    config.assets.precompile << '*.css.scss'
    config.assets.precompile << '*.js'

    config.to_prepare do
      Devise::SessionsController.layout "login.html"
      Devise::RegistrationsController.layout proc { |controller| user_signed_in? ? "application.html" : "login.html" }
      Devise::ConfirmationsController.layout "login.html"
      Devise::UnlocksController.layout "login.html"
      Devise::PasswordsController.layout "login.html"
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    config.time_zone = 'Brasilia'

    config.i18n.enforce_available_locales = true
    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.i18n.default_locale = :'pt-BR'

  end
end
