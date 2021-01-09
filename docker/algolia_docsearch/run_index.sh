#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
cd cli/src/
python3 index.py run config.json
