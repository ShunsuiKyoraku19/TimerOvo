const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'TimerOvo.html'));
});

http.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
