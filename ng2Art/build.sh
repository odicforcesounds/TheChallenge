#!/bin/sh
node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build --configuration production --aot --build-optimizer --base-href "https://wiki.odicforcesounds.com/v/"
