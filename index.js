const express = require('express');
const app = express();
const apiRoutes = require('./routes/whoami');

app.use('/api/whoami', apiRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}.`);
});