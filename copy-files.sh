#!/bin/bash

# Copy directories from Downloads to root
SOURCE="/vercel/share/v0-project/Downloads/Giga Fiber - Next-Gen Speed, Next-Level Service"
TARGET="/vercel/share/v0-project"

# Copy src directory completely
cp -r "$SOURCE/src"/* "$TARGET/src/" 2>/dev/null || true

# Copy public directory completely  
cp -r "$SOURCE/public" "$TARGET/" 2>/dev/null || true

# Copy remaining config files
cp "$SOURCE/package-lock.json" "$TARGET/" 2>/dev/null || true
cp "$SOURCE/.gitignore" "$TARGET/" 2>/dev/null || true

echo "Files copied successfully!"
