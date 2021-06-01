const express = require('express');
const routes = require('./logic/userRoutes');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use('/users', routes);

app.use((error, req, res, next) => {
    throw new Error(`Error!!!!!!! ${error.code || 600}: ${error.message || `An known error`}`);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});