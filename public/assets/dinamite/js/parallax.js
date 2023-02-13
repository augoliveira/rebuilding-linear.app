var $bolinhas   = $('#bolinhas'),
    $tracos     = $('#tracos'),
    $x          = $('#x'),
    $txt1       = $('#txt1'),
    $txt2       = $('#txt2'),
    $container  = $('#banner'),
    container_w = $container.width(),
    container_h = $container.height();


$(window).on('mousemove.parallax', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;
  
  TweenMax.to(
    $tracos, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 55 + 'px) translateY(' + top / 55 + 'px)'
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $txt2, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 38 + 'px) translateY(' + top / 38 + 'px)'
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $txt1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 45 + 'px) translateY(' + top / 45 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $x, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 25 + 'px) translateY(' + top / 25 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $bolinhas,
    10,
    {
      css: {
         transform: 'translateX(' + left / 35 + 'px) translateY(' + top / 35 + 'px)'
      },
      ease: Expo.easeOut,
      overwrite: 'none'
    }
  )
});