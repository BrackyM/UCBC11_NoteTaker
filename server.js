const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiPathway = require('./pathways/api_pathway');
const htmlPathway = require('./pathways/html_pathway');


app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', htmlPathway);
app.use('/', apiPathway);

app.listen(PORT, () => {
    console.log(`API connected to port: ${PORT}. Hello!`)
})