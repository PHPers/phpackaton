var calculateContentDivHeight = function() {
    var contentHeight = ($(window).height() - $('.container_12').height()) + 40 + 'px !important';
    $('.content').css('min-height', contentHeight);
};

$(document).ready(function() {
    calculateContentDivHeight();
});

$(document).on('resize', function() {
    calculateContentDivHeight();
});