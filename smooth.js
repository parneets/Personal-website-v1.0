var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 120
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});