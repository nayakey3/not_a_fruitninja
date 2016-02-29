$(function() {
  var bombCounter = 0;

  $('#board img').click(function() {
    var item = $(this);
    var score = $('#score').text();

    //  Write an IF / ELSE IF conditional statement:

    //  IF the item clicked is a fruit, 
    //    increase the socre by 5
    //  ELSE IF the item clicked is a bomb, 
    //    decrease the score by 10 and increase
    //    and increase the bombCounter by 1
    
    // HINT: use the .hasClass() jQuery method to check what the item clicked is

    if (item.hasClass("fruit")) {
      score = parseInt(score) + 5;
    } else if (item.hasClass("bomb")) {
      score = parseInt(score) - 10;
      bombCounter++;
    }


    
    $("#score").text(score);

    var fruitPath = item.attr("src");
    var splatPath = fruitPath.replace(".png", "-splat.png");
    if (item.hasClass("fruit")) {
      item.attr("src", splatPath)
        .delay(1400)
        .fadeOut(200);
    } else if (item.hasClass("bomb")) {
      item.attr("src", "assets/images/boom.png")
        .delay(1400)
        .fadeOut(200);
    }


    // Write an IF conditional statement:
    
    // IF 3 bombs have been clicked,
    //   then call the .fadeOut() method on the board
    //   and change the title text to say "Game Over!" 

    if (bombCounter > 2) {
      $("#board").fadeOut();
      $("#title").text("Game Over!");
    }

  });
});