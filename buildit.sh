#!/usr/bin/env bash

mdbook build -d docs

# Add Fortran syntax highlighting
# Note this breaks the rust # hidding avaiable in mdbooks
cp highlight.min.js docs/highlight.js
