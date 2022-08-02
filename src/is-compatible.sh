#!/bin/sh -l

echo "The path $1"
echo "npm --version"
echo "node --version"
echo "npx -v"
echo "ls -la"
time=$(date)
echo "::set-output name=time::$time"
