#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --Include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data "{}"
echo
