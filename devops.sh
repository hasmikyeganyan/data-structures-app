echo "Enter base image version: "
read base_image_version

echo "Enter port to expose: "
read port

echo "Enter docker image name: "
read image_name

echo "Enter container name: "
read container_name

echo "FROM $image_name:$base_image_version" > Dockerfile
echo "RUN apt update && apt install -y nginx" >> Dockerfile
echo "COPY ui/ /var/www/html" >> Dockerfile
echo "EXPOSE $port" >> Dockerfile
echo 'CMD ["/usr/sbin/nginx", "-g", "daemon off;"]' >> Dockerfile
echo 'LABEL maintainer = "Hasmik Yeganyan"' >> Dockerfile

docker build -t $image_name .
docker run -d --name $container_name -p $port:80 $image_name

docker ps

