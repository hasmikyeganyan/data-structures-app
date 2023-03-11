FROM ubuntu:latest
RUN apt update && apt install -y nginx
COPY ui/ /var/www/html
EXPOSE 3300
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
LABEL maintainer = "Hasmik Yeganyan"
