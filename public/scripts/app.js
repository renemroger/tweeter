$(document).ready(function() {

  const userData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]



  const createTweetElement = (data) => {
    const newArticle = `
  <article class="tweet">
  <header class='tweet-header'>
<p><img src="${data.user.avatars}" alt="Avatar" height="42" width="42">
${data.user.name}<span class='floatRight hoverToggle'>${data.user.handle}</span></p>
  </header>
  <p class="tweet-text">${data.content.text}</p>
  <footer class='tweet-footer'>
    <span>${new Date(data.created_at)}</span>
    <i class="glyphicon glyphicon-flag floatRight"></i>
    <i class="glyphicon glyphicon-comment floatRight"></i>
    <i class="glyphicon glyphicon-thumbs-up floatRight"></i>
  </footer>
</article>
  `
    return newArticle;
  }

  const renderTweets = function(userData) {
    for (const t of userData) {
      $('.tweets-container').append(createTweetElement(t));

    }
  }
  renderTweets(userData);
});



/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

