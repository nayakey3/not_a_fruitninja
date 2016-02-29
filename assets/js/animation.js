$.fn.bounce = function(options) {
    
  var settings = $.extend({
    speed: 6
  }, options);

  return $(this).each(function() {
      
    var item = $(this),
        board = $("#board"),
        top = Math.floor(Math.random() * 380),
        left = Math.floor(Math.random() * 520),
        vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
        vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

    // place initialy in a random location
    item.css({
      'top': top,
      'left': left
    }).data('vector', {
      'x': vectorX,
      'y': vectorY
    });

    var move = function(element) {
        
      var offset = element.offset(),
        width = element.width(),
        height = element.height(),
        vector = element.data('vector'),
        board = element.parent();

      if (offset.left <= 0 && vector.x < 0) {
        vector.x = -1 * vector.x;
      }
      if ((offset.left + width) >= board.width()) {
        vector.x = -1 * vector.x;
      }
      if (offset.top <= 0 && vector.y < 0) {
        vector.y = -1 * vector.y;
      }
      if ((offset.top + height) >= board.height()) {
        vector.y = -1 * vector.y;
      }

      element.css({
        'top': offset.top + vector.y + 'px',
        'left': offset.left + vector.x + 'px'
      }).data('vector', {
        'x': vector.x,
        'y': vector.y
      });
      
      setTimeout(function() {
        move(element);
      }, 50);
        
    };
    
    move(item);
  });
};

$(function() {
  $('#board img').bounce();
});