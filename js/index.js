$( document ).ready(function() {

  $('.main-intro').children().addClass('fadeInUp');
  $('body').fadeIn('slow')

  var waypoint = new Waypoint({
  element: document.getElementById('transition-one'),
  handler: function(direction) {
    if (direction === 'down')
    $(document.body).css('background-color', '#1a1a1a');
    else
     $(document.body).css('background-color', 'white');
  }
})

  var waypoint2 = new Waypoint({
  element: document.getElementById('transition-two'),
  handler: function(direction) {
    if (direction === 'down')
    $(document.body).css('background-color', 'white');
    else
     $(document.body).css('background-color', '#1a1a1a');
  }
})

  var waypoint3 = new Waypoint({
  element: document.getElementById('transition-three'),
  handler: function(direction) {
    if (direction === 'down')
    $(document.body).css('background-color', '#2D75CC');
    else
     $(document.body).css('background-color', 'white');
  }
})

  var waypoint4 = new Waypoint({
  element: document.getElementById('transition-four'),
  handler: function(direction) {
    console.log('point four triggering')
    if (direction === 'down')
    $(document.body).css('background-color', 'white');
    else
     $(document.body).css('background-color', '#2D75CC');
  }
})
  
});