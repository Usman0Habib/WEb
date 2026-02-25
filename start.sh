#!/bin/sh
echo "Syncing database schema..."
npm run db:push
echo "Starting server..."
NODE_ENV=production node dist/index.cjs
