#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
which pipenv
pipenv run ./docsearch run config.json
