$('[data-parent-ticket-type-ids]')
    .attr('data-parent-ticket-type-ids', '')
    .removeClass('hide')
    .css({'background': 'lightblue'})
    .before('<span style="position:absolute; top:-10px; left:-12px; z-index:3;"><img src="http://swagress.com/assets/img/troll-face-left-small.png" width="35"></span>')
    .parent()
    .css({'position': 'relative'});