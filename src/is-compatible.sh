#!/bin/sh -l

echo "The path $1"
npm --version
node --version
npx -v
ls -la
time=$(date)
echo "::set-output name=time::$time"
