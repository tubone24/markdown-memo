#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
echo "Sleep 60 sec" && sleep 60
python3 docsearch run config.json
