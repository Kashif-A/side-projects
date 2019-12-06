var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')
const fetch = require('node-fetch')

var schema = buildSchema(`
  type Query {
    hello: String,
    getUsers: String
  }
`)

var root = { 
   hello: () => 'Hello world!',
   getUsers: () => fetch('https://memconnect_cloudauthconnector/api/User/GetAllUsers').then(a => a.json()).then(b => b).then(c => c)
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
