#!/bin/bash

echo "Killing currently running processes..."
killall node

echo "Pulling latest code..."
git pull

echo "Building frontend..."
cd frontend
npm run build

echo "Running the backend (in the background)..."
cd ../backend
nohup node . &>./log &

echo "Running webhook (in the background)..."
cd ..
nohup node ./webhook &>./log &