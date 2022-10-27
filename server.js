const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');


app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`API connected to port: ${PORT}. Hello!`)
})