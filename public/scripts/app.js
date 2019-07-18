
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
      "created_at": 1563518677227
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
    const $article = $('<article>').addClass('tweet');

    const $myHeader = $('<header>').addClass("tweet-header");
    const $headerContentP = $('<span>').text(`${data.user.name}`);
    const $avatarIcon = $('<img>')
      .attr('src', `${data.user.avatars}`)
      .attr('alt', 'Avatar')
      .attr('height', '42')
      .attr('width', '42');

    const $idSpan = $('<span>').addClass('floatRight hoverToggle').text(`${data.user.handle}`);
    const $tweetText = $('<p>').addClass('tweet-text').text(`${data.content.text}`);
    const $myFooter = $('<footer>').addClass('tweet-footer');

    const $iconOne = $('<i>').addClass('glyphicon glyphicon-flag floatRight');
    const $iconTWo = $('<i>').addClass('glyphicon glyphicon-comment floatRight');
    const $iconThree = $('<i>').addClass('glyphicon glyphicon-thumbs-up floatRight');
    const $createdAt = $('<span>').text(`${moment(new Date(data.created_at)).fromNow()}`);

    $myHeader.append($headerContentP, $avatarIcon, $idSpan);
    $myFooter.append($createdAt, $iconOne, $iconTWo, $iconThree);

    $article.append($myHeader, $tweetText, $myFooter);

    return $article;
  }

  const renderTweets = function(userData) {
    $('.tweets-container').empty();
    for (const t of userData) {
      $('.tweets-container').append(createTweetElement(t));

    }
  }

  const validateForm = (form) => {
    return form || form.length < 10 ? false : true;
  }

  $('.tweet-form').submit((events) => {
    events.preventDefault();
    if (validateForm($('.tweet-form').serialize())) {
      $.post('/tweets', $('.tweet-form').serialize(), (newPost) => {
        loadTweets();
      });
    } else {
      alert('bad input')
    }
  })

  const loadTweets = function() {
    $.getJSON('/tweets')
      .done((arrayOfPosts) => {
        renderTweets(arrayOfPosts);
      })
      .fail((error) => {
        console.log(error);
      });
  }

  loadTweets();

});



/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

