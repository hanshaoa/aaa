// 侧边栏购物车
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
$('.buycar').children('p').mouseover(function () {
    $(this).css('color', '#fff');
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

// 滚动显示返回顶部
$(window).scroll(function() {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 200) {
        $('.nav-right-backtop').css('display', 'block');
    } else {
        $('.nav-right-backtop').css('display', 'none');
    }
});
$('.nav-right-backtop').click(function() {
    $('html').animate({
        scrollTop: 0
    }, 400, 'linear')
})


// 数值变化

function navSum() {
    var goodsNum = 0;
    var onePrice = 0;
    var goodsPrice = 0;
    $('.num').each(function() {
        goodsNum += Number($(this).text());
        onePrice = parseFloat($(this).parents('.cart_item_desc').find('.cart_price').text())
        goodsPrice += goodsNum * onePrice;
    })
    $('.zero').text(goodsNum);
    $('.buycar-goodsnum').text(goodsNum);

    // 总价逻辑不对，没算清
    $('.buycar-price').text('￥' + goodsPrice)
}
navSum()
$('.count-remove').click(function() {
    var num = Number($(this).next().text());
    if ($(this).next().text() == 1) {
        num = 1;
    } else {
        num--;
        $(this).next().text(num)
    }
    navSum();
})
$('.count-add').click(function() {
    var num = Number($(this).prev().text());
    num++;
    $(this).prev().text(num);
    navSum();
})