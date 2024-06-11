#!/bin/bash

docker run music-app-db
docker run file_upload_nginx
echo "Containers have been started:"
docker ps
