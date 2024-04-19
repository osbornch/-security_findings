# Node version is 18.18.0
## Install nvm
nvm list
nvm install 18.18.0
nvm use 18.18.0

# Run backend
cd ${root}/backend
npm install
node app.ts
make sure the endpoint is running in http://localhost:3000, otherwise, replace the endpoint in frontend\security_findings\DataFetcher.js

# Run frontend
cd ${root}/frontend
npm install
npm start

The screenshots are in the ./screenshot folder
