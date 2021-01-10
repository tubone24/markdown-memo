#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
echo "APPLICATION_ID=${ALGOLIA_APPLICATION_ID}" >> .env
#pipenv install
#pipenv install -r requirements.txt
./docsearch run /root/docsearch-scraper/config.json
