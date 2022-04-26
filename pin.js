console.log(Data.brandData.main);

function showPage(data) {
    console.log(data.length);
    var pageDatas = ``;
    for (var i = 0; i < data.length; i++) {

        pageDatas += `<li>
            <a href="" class="img" target="_blank">
                 <img data-lazy-src="${data[i].goods_thumb}" alt="">
                
                     <div class="brand_desc brand_desc_notic">
                        <div class="tit">品牌描述</div>
                            <div class="info">
                                 <p>暂无描述</p>
                            </div>
                        </div>
                         <div class="mask"></div>
            </a>
            <div class="b-logo">
                <a href="" class="follow" data-bid="214" ectype="coll_brand">
                    <i class="iconfont icon-zan-alt"></i>
                    <span ectype="follow_span">关注</span>
                </a>
                <img data-lazy-src="${data[i].goods_logo}" alt="比特">
            </div>
            <div class="slogan">${data[i].good_name}</div>
        </li>`
            // console.log(data[i].goods_thumb);
    }
    $('.ula').html(pageDatas)

    $('.ula li').hover(function() {
            $(this).css('border', '6px solid #ccc');
            $(this).find('img:last-child').css('display', 'none');
            $(this).find('.follow').css('display', 'block');
            $(this).find('.mask').stop().slideDown(500, function() {
                console.log('展开');
            });
            $(this).find('.brand_desc').css('height', '218');

            // console.log($(this).find('.brand_desc'));


        }, function() {
            $(this).css('border', '6px solid #E4E4E4');
            $(this).find('img:last-child').css('display', 'block');
            $(this).find('.follow').css('display', 'none');
            // $(this).children('a').children('.mask').stop().slideToggle();
            // console.log($(this).children('a').children('.mask'));
            $(this).find('.mask').stop().slideUp(500, function() {
                console.log('收起');

            });
            $(this).find('.brand_desc').css('height', '0');

        })
        // 返回顶部显示
    var tartgetEleTop = $('.brand-list').offset().top;
    $(window).scroll(function() {
        // $(window).scrollTop():窗口内容被卷进去的距离
        if ($(window).scrollTop() >= tartgetEleTop) {
            $('.jump').fadeIn(1000);
        } else {
            $('.jump').fadeOut(1000);
        }
    });

    // 回到顶部
    $('.jump').click(function() {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
}

showPage(Data.brandData.main[0]);
//内容切换
$('.bottom-cent').children('a').click(function() {
    var index = $(this).index()
    console.log(index);

    showPage(Data.brandData.main[$(this).index()])

})

//隐藏导航栏的二级导航
$(".categorys-type").hover(function() {
    $(".second-nav").css("display", "block");

}, function() {
    // $(" .second-nav .second-navul").css("display", "none");
})
$(" .second-nav").hover(function() {}, function() {
    $(" .second-nav").css("display", "none");

})