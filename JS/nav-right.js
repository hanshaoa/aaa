// 控制a标签的hover
$('.nav-list').each(function() {
    $(this).hover(function() {
        $(this).find('.mp_tooltip').css('visibility', 'visible');
        $(this).find('.mp_tooltip').stop().animate({
            left: -92,
        }, 300, 'linear')
    }, function() {
        $(this).find('.mp_tooltip').css('visibility', 'hidden');
        $(this).find('.mp_tooltip').stop().animate({
            left: -121,
        }, 300, 'linear')
    })
})

// 控制购物车内容的伸缩
$('.buycar').click(function() {
    if ($('.nav-right').css('right') == '0px') {
        $('.nav-right').animate({
            right: -280
        }, 500, 'linear');
        $(this).find('a').css('background', '')
        $(this).find('.zero').css('background', '')
        $(this).find('.zero').css('color', '')
    } else {
        $('.nav-right').animate({
            right: 0
        }, 500, 'linear');
        $(this).find('a').css('background', '#f00')
        $(this).find('.zero').css('background', '#fff')
        $(this).find('.zero').css('color', '#f00')
    }
});
$('.closebtn').click(function() {
    $('.nav-right').animate({
        right: -280
    }, 500, 'linear');
    $('.buycar').find('a').css('background', '')
    $('.buycar').find('.zero').css('background', '')
    $('.buycar').find('.zero').css('color', '')
})