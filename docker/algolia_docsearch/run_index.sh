#!/usr/bin/env bash
pipenv install
pipenv  install -r requirements.txt
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
./docsearch run config.json
