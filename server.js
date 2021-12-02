const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({optionsSuccessStatus: 200}));

app.get('/api/whoami', (req, res) => {
    let data = { ipaddress: req.ip, language: req.get('Accept-Language'), software: req.get('User-Agent')};
    res.json(data);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
