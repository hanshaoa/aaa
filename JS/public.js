$(function () {
    $('.nav-main ul li').click(function () {
        $(this).children('a').css('color', '#e23435').parent('li').siblings().children('a').css('color','#555');
    })
})