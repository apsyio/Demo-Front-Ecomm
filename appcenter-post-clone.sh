#!/usr/bin/env bash

echo "Creating .env file"
cat > ./.env <<EOL
API_URL=${API_URL}
EOL
