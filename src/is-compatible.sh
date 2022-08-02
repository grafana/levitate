#!/bin/sh -l

npx @grafana/levitate compare --prev @grafana/ui@8.2.5 --current @grafana/ui@latest
time=$(date)
echo "::set-output name=time::$time"
