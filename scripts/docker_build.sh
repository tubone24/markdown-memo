#!/usr/bin/env bash

# Algolia Docsearch

docker login
docker build -t tubone24/algolia-docsearch-base docker/algolia_docsearch
docker push tubone24/algolia-docsearch-base
