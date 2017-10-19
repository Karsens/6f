import { _ } from "lodash";
import faker from "faker";
import Sequelize from "sequelize";

// initialize our database
const db = new Sequelize("3c", null, null, {
  dialect: "sqlite",
  storage: "./3c.sqlite",
  logging: true // mark this true if you want to see logs
});

// define posts
const PostModel = db.define("post", {
  text: { type: Sequelize.STRING },
  user: { type: Sequelize.STRING },
  channel: { type: Sequelize.STRING }
});

// create fake starter data
const POSTS = 100;
faker.seed(123);
db.sync({ force: true }).then(() =>
  _.times(POSTS, () =>
    PostModel.create({
      text: faker.lorem.words(5),
      user: faker.lorem.words(1),
      channel: faker.lorem.words(1)
    })
  )
);

const Post = db.models.post;
export { Post };
