#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --Include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
   }'
echo
