#!/usr/bin/env bash

#fs
#├── example1
#│   ├── file
#│   └── subexample
#│       ├── file
#│       └── folder
#|           └── another_file
#└── example2
#    └── another_file

mkdir -p fs/example1/subexample/folder fs/example2
touch fs/example1/file fs/example1/subexample/file fs/example1/subexample/folder/another_file fs/example2/another_file