#!/bin/bash

echo "Building frontend..."
cd frontend
npm run build

echo "Running the backend (in the background)..."
cd ../backend
nohup node . &>./log &

echo "Running webhook (in the background)..."
cd ..
nohup node ./webhook &>./log &