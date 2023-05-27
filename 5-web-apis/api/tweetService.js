import { generateId } from "./generateId.js";

// We are going to save in memory for now, in our next class we will save to a relational database
const db = {
  tweets: [],
};

export const getAllTweets = () => {
  return { tweets: db.tweets };
};

export const findTweetById = (tweetId) => {
  return db.tweets.find((t) => t.id.toString() === tweetId);
};

export const createTweet = (text, username) => {
  const newTweet = {
    id: generateId(),
    text: text,
    username: username,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  db.tweets.push(newTweet);

  return newTweet;
};

export const updateTweet = (tweetId, text) => {
  let indexToUpdate = -1;

  const currentTweet = db.tweets.find((t, i) => {
    indexToUpdate = i;
    return t.id.toString() === tweetId;
  });

  if (currentTweet) {
    db.tweets.splice(indexToUpdate, 1, {
      ...currentTweet,
      text: text,
      updatedAt: Date.now(),
    });

    return true;
  } else {
    return false;
  }
};
