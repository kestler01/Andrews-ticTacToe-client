#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --Include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
