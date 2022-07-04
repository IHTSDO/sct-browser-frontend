#!/usr/bin/env sh
set -eu

if test -f /etc/nginx/conf.d/default.conf.template  ; then
    envsubst '${API_HOST}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf 
    rm /etc/nginx/conf.d/default.conf.template 
fi

exec "$@" 