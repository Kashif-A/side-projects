var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')
const fetch = require('node-fetch')

var schema = buildSchema(`
  type Query {
    hello: String,
    getUsers: Data
  },
  type Data {
    Id: String,
    UserName: String,
    Email: String
  }
`)

var root = { 
   hello: () => 'Hello world!',
   getUsers: () => fetch('http://memconnect_samanageconnector/api/Service')
      .then(r => {
            console.log('there'),
            r.json()
         })
      .then(d => {
            console.log('here'),
            console.log(d) 
         } 
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
