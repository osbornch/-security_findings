const express = require('express');
var cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000; // Choose any port you prefer

const db = new sqlite3.Database('../db/findings.db');
app.use(cors())

app.get('/api/v1/groupedFindings', (req, res) => {
    db.all("SELECT * FROM grouped_findings", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});


app.get('/api/v1/rawFindings', (req, res) => {
    db.all("SELECT * FROM raw_findings", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.get('/api/v1/rawFindings', (req, res) => {
    db.all("SELECT * FROM raw_findings", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.get('/api/v1/groupFindingsBySeverity', (req, res) => {
    db.all("SELECT severity, COUNT(id) as count FROM grouped_findings GROUP BY severity", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.get('/api/v1/groupFindingsWithRawFindings', (req, res) => {
    db.all("SELECT grouped_findings.*, JSON_GROUP_ARRAY(JSON_OBJECT('raw_id', raw_findings.id, 'source_security_tool_name', raw_findings.source_security_tool_name, 'source_collaboration_tool_name', raw_findings.source_collaboration_tool_name, 'source_collaboration_tool_id', raw_findings.source_collaboration_tool_id, 'severity', raw_findings.severity, 'finding_created', raw_findings.finding_created,'ticket_created', raw_findings.ticket_created,'description', raw_findings.description,'asset', raw_findings.asset,'status', raw_findings.status,'remediation_url', raw_findings.remediation_url,'remediation_text', raw_findings.remediation_text,'grouped_finding_id', raw_findings.grouped_finding_id)) AS raw_findings FROM grouped_findings LEFT JOIN raw_findings ON grouped_findings.id = raw_findings.grouped_finding_id GROUP BY grouped_findings.id", (err, rows) => {
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