#!/usr/bin/env sh
set -eu

if test -f /etc/nginx/conf.d/default.conf.template  ; then
    envsubst '${API_HOST}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf 
    rm /etc/nginx/conf.d/default.conf.template 
fi

LICENSE_COOKIE_SECRET="${LICENSE_COOKIE_SECRET:-}"
if [ "${#LICENSE_COOKIE_SECRET}" -lt 32 ]; then
    echo "WARNING: LICENSE_COOKIE_SECRET is unset or shorter than 32 characters; generating a random one." >&2
    echo "WARNING: Licence cookies will not survive a restart or be accepted by other instances." >&2
    LICENSE_COOKIE_SECRET="$(head -c 48 /dev/urandom | base64 | tr -d '\n')"
fi
export LICENSE_COOKIE_SECRET

exec "$@" 
