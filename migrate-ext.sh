rm -rf dist/chrome/*
mkdir -p dist/chrome
cp chrome/* dist/chrome/ -r
cp react/build/* dist/chrome/ -r
node lib/inline-migrate.js
exit
