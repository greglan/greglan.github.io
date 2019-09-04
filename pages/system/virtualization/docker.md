---
layout: page
title:  "Docker cheatsheet"
permalink: "docker.html"
tags: [system, virtualization]
summary: "Various information about Docker"
---
## Images
* Show images: `docker images ls --all`
* Pull image: `docker pull [OPTIONS] NAME[:TAG|@DIGEST]`
* Export image: `docker save -o image.tar image_name`
* Import image: `docker load -i image.tar`

## Containers
### Start and stop
* Run container as the current user: `docker run --name some-name --user $(id -u):$(id -g) container_name:tag`
* Run in background with container port 80 mapped to host 4000: `docker run -d -p 4000:80 friendlyhello`
* Stop container: `docker container stop $CONTAINER_ID`
* Start container (previously exited): `docker start container_id`
* Run command in container: `docker exec -it <container name> <command>`

### Information
* List containers: `docker ps`
* List containers: `docker container ls --all`
* List all existed containers: `docker ps -f "status=exited"`
* Access container logs: `docker logs container_id`

## Resources and references
* [Storage locations](https://forums.docker.com/t/can-i-store-docker-containers-on-two-different-mount-points-of-the-same-machine/21758)
* [Security advices](https://snyk.io/blog/10-docker-image-security-best-practices/)
* [MongoDB on Docker](https://docs.docker.com/samples/library/mongo/)
* [Difference between save and export commands](https://stackoverflow.com/questions/22655867/what-is-the-difference-between-save-and-export-in-docker/22656763#22656763)
