/**
 * Good morning!
 * 
 * I'm gonna do the same as yesterday.
 * Why?
 * 
 * Because I want to be faster. 
 * And not forget anything
 * 
 * DAY 3!!!!
 * 
 * 
 * 
 *                                                             Schema --> Resolvers --> [Logic] --> Models --> Connectors
                                                                                ||
UI --> Redux Store --> Apollo Client --> GraphQL Query in GET            --> Apollo Server      --->                  DB
 |            ^                                                                                                        |
 |            |                                                                                                        |
 V            |                                                                                                        |
Actions --> Reducer                                                                                                    |
                                                                                                                       V
   Component Will Mount <-- {loading,data} in Redux Store  <------  Apollo Client <---- Query response JSON   <----- Resolved
            |
            |
            V
    Render Component
            |
            |
            V
    Component did mount, listen....





C) APOLLO
Setup GraphQL Apollo Server locally
- integration testing by doing CRUD in a massive integration test for posts

- create query findPost(id)

posts {
  expect []
  createPost(text:"you are the best",user:"wijnand",channel:"tarifa") {
    expect id, text, user, channel
    findPost(id){
      expect id, text, user, channel
      updatePost(id, newtext){
        expect 1
        findPost(id){
          expect id, newtext, user, channel          
        }
      }
    }
  }
}
createPost(text:"you are the coolest",user:"wijnand",channel:"tarifa")

createPost(text:"you are the genius",user:"arnoud",channel:"groningen")


posts {
  expect [p1, p2, p3]
  updateUser(user:"wijnand", newUser:"nando"){
    expect 2;
    posts {
      expect [p1,p2,p3];
    }
  }
} 

deletePost(p1.id){
  expect 1
  posts {
    expect [p2, p3]
  }
}




 */

// --- absolute
import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
// --- relative
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

//a logger and those other options can be smart for debugging.
const logger = { log: e => console.log("graphql logger err:" + e) };
const allowUndefinedInResolve = false;

const PORT = 3000;
var app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger,
  allowUndefinedInResolve
});

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT);
console.log("We listen on 3k brah");
