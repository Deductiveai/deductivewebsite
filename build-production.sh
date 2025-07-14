#!/bin/bash
echo "Building for GitHub Pages production..."
hugo build --cleanDestinationDir --environment production --minify
echo "✅ Production build complete! Deploy to: https://deductiveai.github.io/deductivewebsite/"