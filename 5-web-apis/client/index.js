const tweetForm = document.querySelector(".tweet-form");
const tweetList = document.querySelector(".tweets-list");

const refreshAllTweets = () => {
  fetch("http://localhost:8000/tweets")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      const html = data.tweets
        .map(
          (tweet) =>
            `<li class="tweet">
              <p>${tweet.text}</p> 
              <span>Created by: ${tweet.username}</span>
            </li>`
        )
        .join("");

      tweetList.innerHTML = html;
    });
};

const insertSingleTweet = (newTweet) => {
  const htmlElement = `<li class="tweet">
      <p>${newTweet.text}</p> 
      <span>Created by: ${newTweet.username}</span>
    </li>`;
  tweetList.insertAdjacentHTML("afterbegin", htmlElement);
};

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTweet = {
    text: e.currentTarget.tweet.value,
    username: e.currentTarget.username.value,
  };

  fetch("http://localhost:8000/tweets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTweet),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      e.target.reset();
      insertSingleTweet(newTweet);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

refreshAllTweets();
