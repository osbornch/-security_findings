const express = require('express');
var cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000; // Choose any port you prefer

const db = new sqlite3.Database('../db/findings.db');
app.use(cors())

app.get('/api/v1/grouped_findings', (req, res) => {
    db.all("SELECT * FROM grouped_findings", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.get('/api/v1/raw_findings', (req, res) => {
   db.all("SELECT * FROM raw_findings", (err, rows) => {
       if (err) {
           console.error(err.message);
           res.status(500).send('Internal Server Error');
       } else {
           res.json(rows);
       }
   });
});

app.get('/api/v1/groupfindings_by_severity', (req, res) => {
    db.all("SELECT severity, COUNT(id) as count FROM grouped_findings GROUP BY severity", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
 });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});