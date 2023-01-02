FROM nginx:1.19

LABEL maintainer="Tommy Huang <tommy8852024@gmail.com>" \
  org.label-schema.name="web" \
  org.label-schema.vendor="Tommy Huang" \
  org.label-schema.schema-version="1.0"

EXPOSE 3000

COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]