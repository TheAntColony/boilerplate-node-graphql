const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const models = require('./db/models');
const schema = require('./graphql-schema');

const routes = require('./routes/api');

const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    context: {
        db: models
    },
    graphiql: true,
}));

app.use('/api', routes);
app.listen(4000, null, () => {
    console.log('listening on port: 4000');
})