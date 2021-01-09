#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
pipenv install
pipenv shell
./docsearch run config.json
