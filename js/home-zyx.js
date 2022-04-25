//实现首页轮播图
var active = document.querySelectorAll(".active");
var slideshow = document.querySelector(".slideshow");
var wicket = document.querySelector(".wicket");
var counter_tp = 0;
var counter_xyd = 0;
wicket.onmouseover = function() {
    clearInterval(wicket.automove);
}
wicket.onmouseout = function() {
    automove();
}
for (var i = 0; i < active.length; i++) {
    active[i].index = i;
    active[i].onclick = function() {
        counter_tp = this.index;
        counter_xyd = this.index;
        for (var i = 0; i < active.length; i++) {
            active[i].setAttribute("class", "active");
        }
        active[counter_xyd].setAttribute("class", "active pitch");
        var targer = this.index * (-758);
        moveAnimation2(slideshow, targer);
    }
}
//自动轮播函数
var lunbo = function() {
    counter_tp++;
    counter_xyd++;
    if (counter_tp == slideshow.children.length) {
        slideshow.style.left = 0;
        counter_tp = 1;
    }
    if (counter_xyd == active.length) {
        counter_xyd = 0;
    }
    for (var i = 0; i < active.length; i++) {
        active[i].setAttribute("class", "active");
    }
    active[counter_xyd].setAttribute("class", "active pitch");
    var targer = counter_tp * -758;
    moveAnimation2(slideshow, targer);
}

function automove() {
    wicket.automove = setInterval(function() {
        lunbo();
    }, 3000)

}
automove();


$(".tab_head_item").on('mouseover', function() {
    $(this).addClass("on").siblings().removeClass("on");
});



//隐藏导航栏的二级导航
$(".container .topmain .spfl").hover(function() {
    $(".container .topmain .second-nav").css("display", "block");

}, function() {})
$(".container .topmain .second-nav").hover(function() {}, function() {
    $(".container .topmain .second-nav").css("display", "none");

})



//第二块数据渲染（商品列表部分）
$(function() {


    function showPage1(data) {
        var pageDatas1 = `
        <li class="opacity_img">
            <a href="#">
                <div class="p-img"><img src="${data[0].goodurls}"></div>
                <div class="p-name">${data[0].goodtitle}</div>
                <div class="p-price">
                    <div class="shop-price">
                        ${data[0].goodzprice}
                    </div>
                    <div class="original-price"> ${data[0].goodprice}</div>
                </div>
            </a>
        </li>`
        for (var i = 1; i < data.length; i++) {
            pageDatas1 += `
             <li class="opacity_img">
                <a href="#">
                    <div class="p-img"><img src="${data[i].goodurls}"></div>
                    <div class="p-name">${data[i].goodtitle}</div>
                    <div class="p-price">
                        <div class="shop-price">
                            ${data[i].goodzprice}
                        </div>
                        <div class="original-price"> 
                        ${data[i].goodprice}
                        </div>
                    </div>
                </a>
             </li>
            `
        }

        $('.content .content9 ul').html(pageDatas1)
    }
    showPage1(Data.indexData.mainpic);
    // console.log(Data.indexData.mainpic);



    function showPage2(data) {
        var pageDatas2 = `
         <li class="opacity_img">
            <div class="p-img">
                <a href="#"><img src="${data[0].goodurl}"></a>
            </div>
            <div class="p-name"><a href="#">${data[0].goodtitle}</a></div>
            <div class="p-price">
                <span class="shop-price"> ${data[0].goodzprice}</span>
                <span class="original-price"> ${data[0].goodprice}</span>
            </div>
        </li>
        `
        for (var i = 1; i < data.length; i++) {
            pageDatas2 += `
            <li class="opacity_img">
            <div class="p-img">
                <a href="#"><img src="${data[i].goodurl}"></a>
            </div>
            <div class="p-name"><a href="#">${data[i].goodtitle}</a></div>
            <div class="p-price">
                <span class="shop-price"> ${data[i].goodzprice}</span>
                <span class="original-price"> ${data[i].goodprice}</span>
            </div>
        </li>
            `
            $('.seckill-lastviw ul').html(pageDatas2)
        }

    }
    showPage2(Data.indexData.mainLbtdata);


    //商品列表的红线和蒙版
    $(".content .content9 ul li").hover(function() {
        $(this).css("border", "1px solid red")
    }, function() {
        $(this).css("border", "")
    })
    $(".content .content9 ul li img").hover(function() {
        $(this).css('opacity', '0.4')
    }, function() {
        $(this).css('opacity', '1')
    })

    //顶部导航栏  显示    左侧楼层导航
    var homeOffsetTop = $('.homeindex').offset().top;
    var con2OffsetTop = $('.content2').offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= homeOffsetTop) {
            $(".container").css("margin-top", "0px")

        } else {
            $(".container").css("margin-top", "-70px")

        }
        if ($(window).scrollTop() >= con2OffsetTop) {
            $(".side-nav").fadeIn(600);

        } else {
            $('.side-nav').fadeOut(600);
        };

        $(".zcon").each(function(index, value) {
                if ($(window).scrollTop() >= value.offsetTop) {
                    $(".lift-item").eq(index).addClass('lift-item-current').siblings().removeClass('lift-item-current');
                    $(".lift-item").eq(index).on("click", function() {
                        $(".lift-item").eq(index).children().css("display", "block")
                    })
                }
            })
            //返回顶部
        $(".lift-item-top").on("click", function() {
            $("html").animate({
                scrollTop: 0
            }, 500)
        })


    });


    //第二块轮播
    var seckilllastviw = document.querySelector(".seckill-lastviw");
    var lastul = document.querySelector(".seckill-lastviw ul");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var counter_tp = 0;
    console.log(prev);
    console.log(next);
    seckilllastviw.onmouseover = function() {
        prev.style.display = "block";
        next.style.display = "block";
    }
    seckilllastviw.onmouseout = function() {
        prev.style.display = "none";
        next.style.display = "none";
    }
    prev.onclick = function() {
        lastul.style.left = lastul.offsetLeft - 238 + "px";
        if (lastul.offsetLeft < -2856) {
            lastul.style.left = '0'
        }
    }
    next.onclick = function() {
            lastul.style.left = lastul.offsetLeft + 238 + "px";
            if (lastul.offsetLeft < 2856) {
                lastul.style.left = '0'
            }
        }
        //头部图片点击事件
    $(".icon-cha").on("click", function() {
        $(".nav-top").css("display", "none")
    })

})