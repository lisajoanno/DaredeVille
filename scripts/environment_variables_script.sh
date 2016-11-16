#!/usr/bin/env bash

cd ../configurations/env
while read line;
do export "$line";
done < database.env

while read line;
do export "$line";
done < mailer.env
cd ../../

