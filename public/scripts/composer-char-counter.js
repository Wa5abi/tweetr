$(".new-tweet").on("input", function() {
  var spanCounter = $(this).find(".counter");
  var howManyChar = $(this).find(".new-tweet-input").val().length;
  var counter = 140 - howManyChar;

  spanCounter.text(counter);

  if (counter < 0) {
    spanCounter.addClass("outOfRange");
  } else {
    spanCounter.removeClass("outOfRange");
  }
})