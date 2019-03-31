---
title:  "Docker cheatsheet"
topic: "virtualization"
tags: virtualization
---
# Images
* Show images: `docker images ls --all`
* Pull image: `docker pull [OPTIONS] NAME[:TAG|@DIGEST]`

# Containers
* List containers: `docker ps`
* List containers: `docker container ls --all`
* Run in background with container port 80 mapped to host 4000: `docker run -d -p 4000:80 friendlyhello`
* Stop container: `docker container stop $CONTAINER_ID`

# Resources and references
* [Storage locations](https://forums.docker.com/t/can-i-store-docker-containers-on-two-different-mount-points-of-the-same-machine/21758)
* [Security advices](https://snyk.io/blog/10-docker-image-security-best-practices/)
