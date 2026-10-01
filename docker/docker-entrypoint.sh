#!/usr/bin/env sh
set -eu

export PORT="${PORT:-8080}"
export API_HOST="${API_HOST:-http://localhost:8080}"

if test -f /etc/nginx/conf.d/default.conf.template  ; then
    envsubst '${API_HOST} ${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf 
    rm /etc/nginx/conf.d/default.conf.template 
fi

exec "$@"