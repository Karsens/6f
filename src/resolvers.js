import { find, filter } from "lodash";

/*
const posts = [
  { id: 1, text: "akdsjflkjsdklsfdj", user: "Boi", channel: "hoi" },
  { id: 2, text: "kasjdkfjsd", user: "Zoi", channel: "hoi" },
  { id: 3, text: "wohiewqo", user: "Coi", channel: "hoi" },
  { id: 4, text: "vzcjbzxnmbczxn", user: "Loi", channel: "ak" }
];*/

import { Post } from "./connectors";

export const resolvers = {
  Query: {
    posts: () => Post.findAll()
  },
  Mutation: {
    createPost: (_, { text, user, channel }) => {
      return Post.create({ text, user, channel });
    },

    updatePost: (_, { id, text }) => {
      return Post.update({ text }, { where: { id } }).then(res => res[0]);
    },

    updateUser: (_, { user, newUser }) => {
      return Post.update({ user: newUser }, { where: { user } }).then(
        res => res[0]
      );
    },

    deletePost: (_, { id }) => {
      return Post.destroy({
        where: {
          id
        }
      });
    }
  },
  Updated: {
    affected: affected => affected
  }
  /*
  
  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },*/
  /* that's not good
  Post: {
    user: post => filter(posts, { user: post.user })
  }*/
};
