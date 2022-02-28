#!/usr/bin/env bash

echo "Creating .env file"
cat > ./.env <<EOL
API_URL=${API_URL}
GOOGLE_WEB_CLIENT_ID=${GOOGLE_WEB_CLIENT_ID}
GOOGLE_IOS_CLIENT_ID=${GOOGLE_IOS_CLIENT_ID}
EOL
