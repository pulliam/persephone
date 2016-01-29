# This is a test

![:image](http://i.kinja-img.com/gawker-media/image/upload/s--AW1Mur6m--/972362987667599938.jpg)

## What is Capybara?

Capybara is an acceptance test framework that simulates user behavior in the browser.  It can be mixed in with Rspec to write specs that tests the functionality of an app through its web interface.

## Setup

Configuring a Rails app to run Capybara tests requires the following setup:

> The included CappyApp already includes these modifications!

Add `rspec-rails`, `capybara`, and 'selenium-webdriver' to your Gemfile's
development and test groups

```rb
# Gemfile
group :development, :test do
  gem 'rspec-rails'
  gem 'capybara'
  gem 'selenium-webdriver'
end
```

Then run bundle install and run the Rspec generator.

```sh
$ rails g rspec:install
```

Add `require 'capybara/rails'` to `spec/rails_helper.rb`

```rb
ENV['RAILS_ENV'] ||= 'test'
require 'spec_helper'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'
require 'capybara/rails'    # Add this line!
```

## Usage

Once configured, the tests are run from the command line with the `rspec` command.
