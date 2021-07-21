#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --Include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
   }'
echo
