FROM php:7.1-apache

ADD apache2.conf /etc/apache2/sites-enabled/000-default.conf
RUN a2enmod rewrite
RUN /etc/init.d/apache2 restart

RUN apt-get update \
    && apt-get install -y git \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

WORKDIR /var/www/html
# COPY . .
