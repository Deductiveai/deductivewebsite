#!/bin/bash
echo "Building for local development..."
hugo build --cleanDestinationDir --environment development
echo "✅ Local build complete! View at: http://localhost:1313/"