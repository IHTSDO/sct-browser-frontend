FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
VOLUME /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf