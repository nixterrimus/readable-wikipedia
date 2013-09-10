snapper = new Snap({
  element: document.getElementById('content')
});

$('body').prepend('<div class="snap-drawer snap-drawer-left">CONTENT</div>');

$('#mw-head').append('\
 <div id="logo">\
      <img src="http://upload.wikimedia.org/wikipedia/commons/8/84/W_logo_for_Mobile_Frontend.gif" class="desktop">\
      <img src="http://upload.wikimedia.org/wikipedia/commons/8/84/W_logo_for_Mobile_Frontend.gif" class="mobile">\
  </div>\
');

$('#mw-head #logo').bind('click', function(){
  if( snapper.state().state=="left" ){
    snapper.close();
  } else {
    snapper.open('left');
  }
});

$('#footer').prepend('<p id="enhancement_credit">The readability of this page is enhanced by <a href="http://dcxn.com">Nick Rowe</a></li>');

if(window.location.href.match(/File/))
{
   $('#shared-image-desc').hide();

  $('.firstHeading').hide();

  $(document).bind('keydown.i', function() {
    $('#shared-image-desc').toggle();
  });
}

$(document).bind('keydown.a', function() { 
  $('a').toggleClass('visible-link'); 
});

var extraRemovables = [$('.infobox'), $('.vertical-navbox'), $('.navbox'), $('.succession-box'), $('.toccolours'), $('.wikitable'), $('#content .thumb')];

var hidden = false;


$(document).bind('keydown.i', function() {
  if (hidden) {
    $.each(extraRemovables, function(index, elements){
      elements.css('display', 'block');
    });
  } else {
    $.each(extraRemovables, function(index, elements){
      elements.css('display', 'none');
    });
  }
  hidden = !hidden;
});

$(document).bind('keydown.j', function() {
  window.scrollBy(0,30);
});

$(document).bind('keydown.k', function() {
  window.scrollBy(0,-30);
});
