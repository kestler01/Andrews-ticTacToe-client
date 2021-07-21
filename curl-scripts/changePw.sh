#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --Include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords":{
      "old": "'"${PASSWORD}"'",
      "new": "'"${NEWPASSWORD}"'"
    }
   }'
echo
