const express = require('express');
const bp = require('body-parser');
const port = 8000;
const app = express();

app.use(bp.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
require('./backend/routes')(app)
