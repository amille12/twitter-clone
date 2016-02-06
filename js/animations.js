$( document ).ready(function() {
  $( "#new-tweet-textarea" ).click(function() {
    $( this ).css( "height", "5em" );
    $( "#tweet-controls" ).css( "display" , "block");

  });
//Text Area
  $( "#new-tweet-textarea").keyup(function () {
    var tweetLength = $(this).val().length;

    $('#char-count').text(140 - tweetLength);
    if(tweetLength >= 130) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '#999');
    }
    // if(tweetLength > 140) {
    //   $('#tweet-submit').attr('disabled', 'disabled');
    // } else {
    //   $('#tweet-submit').removeAttr('disabled', 'disabled');
    // }

  });

  $('tweet-submit').click(function(event) {
    var tweet = $('new-tweet-textarea').val();
    if(!tweet.length) return;

    var userName = "Austin Miller";

    var tweetHTML = '<div class="tweet">'
                  + '<div class="content">'
                  + '<div class="avatar" src="img/alagoon.jpg" />'
                  + '<strong class="fullname">' + userName + '</strong>'
                  + '<p class="tweet-text">' + tweet + '</p>'
    							+ '<div class="tweet-actions">'
    							+	'<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>'
    						  + '</div></div></div>';

    $('#stream').prepend(tweetHTML);

    $('#new-tweet-textarea').val('');
    $('#char-count').text(140);
  });

  $('.tweet').hover(function() {
    $(this).find('.tweet-actions').css("visibility", "visible");
  }, function() {
    $(this).find('.tweet-actions').css('visibility', 'hidden');
  });

  $('.tweet').click(function (){
    $(this).find('.stats, .reply').slideDown('slow');
  });








});
