#!/bin/sh
set -e

if [ -z "$1" ]; then
  exec sh /daizu-online-judge-client/run.sh
fi

exec "$@"
