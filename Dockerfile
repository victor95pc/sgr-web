# === 1 ===
# Use phusion/passenger-full as base image. To make your builds reproducible, make
# sure you lock down to a specific version, not to `latest`!
# See https://github.com/phusion/passenger-docker/blob/master/Changelog.md for
# a list of version numbers.
FROM phusion/passenger-ruby22:0.9.15

# Set environment variables.
ENV HOME /home/app/sgr
ENV RAILS_ENV docker

# Update Repo
RUN apt-get update

# Add the required Postgres libraries
RUN apt-get install -y libpq-dev

# === 2 ===
# Start Nginx / Passenger
RUN rm -f /etc/service/nginx/down


# === 3 ====
# Remove the default site
RUN rm /etc/nginx/sites-enabled/default

# Add the nginx info
ADD nginx /etc/nginx/sites-enabled/sgr.conf
ADD postgres-env /etc/nginx/main.d/rails-env.conf


# === 4 ===
# Prepare folders
RUN mkdir /home/app/sgr
ADD . /home/app/sgr

# === 5 ===
# Run Bundle in a cache efficient way
WORKDIR /tmp/
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/
RUN bundle install --without development test

# === 6 ===
# Prepare assert pipeline
RUN rake assets:precompile -q

WORKDIR /home/app/sgr

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ONBUILD RUN rake db:create RAILS_ENV=production
ONBUILD RUN rake db:setup RAILS_ENV=production


# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]