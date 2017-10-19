export const typeDefs = `
type Post {
  id: Int!
  text: String
  user: String
  channel: String
}
# the schema allows the following query:
type Query {
  posts: [Post]
}

type Updated {
    affected: Int
}

type Mutation {
    createPost(text: String!, user: String!, channel: String!): Post
    updatePost(id: ID!, text: String!): Updated #a post can be updated by giving an id to update and giving a text to which you want to change it to.
    updateUser(user: String!, newUser: String!): Updated #a username chan be filled in and changed. In that case all messages that user posted should change username.
    deletePost(id: ID!): Updated #you can fill in a post you want to delete by giving the id. you have to be the creator of it
}
# that's all, folks.. :) 
#after schema, resolvers should be created.
#we just created resolvers and it's connected to the moddel that's defined with an ORM in connectors. 
#so it should have all those functions like destroy and update. 
#if I understood it well and made no mistakes, then It should work now!
#let's try some in GraphiQL
`;
