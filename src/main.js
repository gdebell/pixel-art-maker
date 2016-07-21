
(function(){
  'use strict';

  var brush;

  //create canvas

  function newCanvas() {
    var pallet;
    var canvas = $('#canvas');

    for(var i =0; i < 800; i ++) {
      canvas.append($('<div class="pixel"></div>'));
    }

    var color = 'blue';

    $('.pixel').on('click', function (e) {
      $(this).css('background-color', color);

    });

    $('.paint-color').on('click', function() {
      color = $(this).css('background-color');
    });

  }
newCanvas();

})()
