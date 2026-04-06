const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname)));

app.get("/api/projects", (req, res) => {
    const rawData = fs.readFileSync(path.join('projects.json'));
    const projects = JSON.parse(rawData);
    res.json(projects);
});

app.listen(3000, () => {
    console.log("Server is running on at http://localhost:3000");
});