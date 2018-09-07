#!/bin/bash
if [ "$NODE_ENV" = "production" ]
then
  yarn start:server
else
  yarn dev:server
fi

while true; do echo a >> /dev/null ; sleep 1; done
