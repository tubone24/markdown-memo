#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
pipenv install
pipenv install -r requirements.txt
pipenv run python docsearch run config.json
