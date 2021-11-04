#!/bin/bash

echo "Building frontend..."
cd frontend
git pull
npm run build

echo "Running the backend (in the background)..."
cd ../backend
git pull
nohup node . &>./log &

echo "Running webhook (in the background)..."
cd ..
git pull
nohup node ./webhook &>./log &