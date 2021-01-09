#!/usr/bin/env bash
echo "API_KEY=${ALGOLIA_API_KEY}" >> .env
python3 cli/src/index.py run config.json
