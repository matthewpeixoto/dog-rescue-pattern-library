var $sectitle = $('.sectitle');

$sectitle.waypoint(function () {
  $sectitle.addClass('js-sectitle-animate');
}, { offset: '50%'});
