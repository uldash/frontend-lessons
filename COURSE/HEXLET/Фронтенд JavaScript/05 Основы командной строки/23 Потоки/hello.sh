#!/usr/bin/env bash

echo "Hello, World!"
echo "How are you?"
read response
if [[ $response = "good" ]]
then
    echo "Great!"
else
    echo "Bad"
fi