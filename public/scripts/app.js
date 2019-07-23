
$(document).ready(function() {

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

    const $iconOne = $('<i>').addClass('glyphicon glyphicon-flag hoverToggle floatRight');
    const $iconTWo = $('<i>').addClass('glyphicon glyphicon-comment hoverToggle floatRight');
    const $iconThree = $('<i>').addClass('glyphicon glyphicon-thumbs-up hoverToggle floatRight');
    const $createdAt = $('<span>').text(`${moment(new Date(data.created_at)).fromNow()}`);

    $myHeader.append($headerContentP, $avatarIcon, $idSpan);
    $myFooter.append($createdAt, $iconOne, $iconTWo, $iconThree);

    $article.append($myHeader, $tweetText, $myFooter);

    return $article;
  }

  const renderTweets = function(userData) {
    $('.tweets-container').empty();
    for (const t of userData) {
      $('.tweets-container').prepend(createTweetElement(t));

    }
  }

  const validateForm = (form) => {
    return form.length > 145 ? false : true;
  }

  $('#apply-form input').blur(function() {
    if (!$(this).val()) {
      $(this).parents('p').addClass('warning');
    }
  });


  $('.tweet-form').submit((events) => {
    const $formData = $('.tweet-form').serialize();
    events.preventDefault();
    let isFormValid = true;
    $('.tweet-form').each(function() {
      if ($.trim($(this).val()).length == 0) {
        $('.counter').text('140');
        $('.tweet-form').trigger("reset")
        loadTweets();
        console.log('invalid');
        isFormValid = false;
      }
    });

    if ($formData && validateForm($formData) && isFormValid) {
      $.post('/tweets', $('.tweet-form').serialize(), (newPost) => {
        $('.counter').text('140');
        $('.tweet-form').trigger("reset")
        loadTweets();
      });
    } else {
      alert('Invalid Input')
    }
  })

  //function new-tweet
  const toogleTweetBox = function() {
    $(".stickyTweet").toggle("slow", function() {
    });
  }

  $('.toggleTweetBox').click(toogleTweetBox)

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
