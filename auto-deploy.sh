#!/bin/bash
#ssh todo
git pull origin master
cd front-end && npm run build && rm -rf ../back-end/client && cp -R ./build ../back-end/client
(cd ../back-end && pm2 start npm -- start) & (pm2 start npm -- start)