#!/usr/bin/env sh
set -eu

envsubst '${API_HOST}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf 

rm /etc/nginx/conf.d/default.conf.template 

exec "$@" 