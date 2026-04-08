FROM node:20-alpine AS builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install --force && ./node_modules/grunt-cli/bin/grunt


FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/index.html /usr/share/nginx/html/
COPY --from=builder /usr/src/app/sign-in.html /usr/share/nginx/html/
COPY --from=builder /usr/src/app/multi-extension-search.html /usr/share/nginx/html/
COPY --from=builder /usr/src/app/robots.txt /usr/share/nginx/html/
COPY --from=builder /usr/src/app/humans.txt /usr/share/nginx/html/
COPY --from=builder /usr/src/app/config.json /usr/share/nginx/html/
COPY --from=builder /usr/src/app/favicon.png /usr/share/nginx/html/
COPY --from=builder /usr/src/app/dev-favicon.png /usr/share/nginx/html/
COPY --from=builder /usr/src/app/loc-favicon.png /usr/share/nginx/html/
COPY --from=builder /usr/src/app/prd-favicon.png /usr/share/nginx/html/
COPY --from=builder /usr/src/app/uat-favicon.png /usr/share/nginx/html/
COPY --from=builder /usr/src/app/trn-favicon.png /usr/share/nginx/html/
COPY --from=builder /usr/src/app/css/ /usr/share/nginx/html/css/
COPY --from=builder /usr/src/app/external-libs/ /usr/share/nginx/html/external-libs/
COPY --from=builder /usr/src/app/internal-libs/ /usr/share/nginx/html/internal-libs/
COPY --from=builder /usr/src/app/js/ /usr/share/nginx/html/js/
COPY --from=builder /usr/src/app/img/ /usr/share/nginx/html/img/
COPY --from=builder /usr/src/app/i18n/ /usr/share/nginx/html/i18n/
COPY --from=builder /usr/src/app/snomed-interaction-components/fonts/ /usr/share/nginx/html/snomed-interaction-components/fonts/
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf.template
COPY docker/docker-entrypoint.sh /
RUN ["chmod", "+x", "/docker-entrypoint.sh"]
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]