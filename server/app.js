const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

CONNECTION_URL = 'mongodb+srv://admin:adm123@cluster0.zpefa.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL);
mongoose.connection.once('open', () => {
    console.log('Connection to database has been established successfully');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(5000, () => {
    console.log('Server is up and running on port 5000');
});