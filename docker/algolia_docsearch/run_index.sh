#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
which pipenv
pipenv shell
./docsearch run config.json
