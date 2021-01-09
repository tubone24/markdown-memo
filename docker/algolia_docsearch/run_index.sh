#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
./docsearch run config.json
