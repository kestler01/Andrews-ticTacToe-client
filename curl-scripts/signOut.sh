#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --Include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
echo
