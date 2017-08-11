// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    $tweet = createTweetElement(tweet);
    $("#tweets-container").append($tweet);
  });
}

function createTweetElement (data) {
  const name = data.user.name;
  const avatarSmall = data.user.avatars.small;
  const handle = data.user.handle;
  const tweetText = data.content.text;
  const createdAt = data.created_at;
  const timeAgo = moment(createdAt).fromNow();
  return `
    <article class="tweet module">
      <header class="module-header">
        <img class="tweet-avatar" src="${avatarSmall}">
        <span class="tweet-name module-title">${name}</span>
        <span class="tweet-handle">${handle}</span>
      </header>
      <main class="module-body">
        <div class="tweet-text">${tweetText}</div>
      </main>
      <footer class="module-footer tweet-meta">
        <span class="tweet-timestamp">${timeAgo}</span>
        <span class="tweet-actions">
          <a href="#" class="tweet-action">Like</a>
          <a href="#" class="tweet-action">Report</a>
          <a href="#" class="tweet-action">Retweet</a>
        </span>
      </footer>
    </article>
  `;
}

renderTweets(data);