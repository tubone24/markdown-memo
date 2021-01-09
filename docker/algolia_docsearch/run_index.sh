#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
pipenv shell
./docsearch run config.json
