### Install node
nvm list
nvm install 18.18.0
nvm use 18.18.0

### Run backend
cd ${root}/backend
npm install
node app.ts
make sure the endpoint is running in http://localhost:3000, otherwise, replace the endpoint in frontend/security_findings/DataFetcher.js

### Run frontend
cd ${root}/frontend/security_findings
npm install
npm start

### Screenshots
Pie Chart
<img title="a title" alt="Alt text" src="/screenshot/1.png">

Table for group findings
<img title="a title" alt="Alt text" src="/screenshot/2.png">

Click each row can show the raw findings per group findings
<img title="a title" alt="Alt text" src="/screenshot/3.png">
