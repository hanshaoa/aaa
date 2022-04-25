//入口函数
$(function() {
    //console.log(Data.beautyData.hotgoods);

    //清空数据
    function init(obj) {
        $(obj).empty();
    }

    //热门推荐渲染数据
    function hot(start, end) {
        for (var i = start; i < end; i++) {
            $('.hotsale-right ul').append(`<li>
            <div class="item">
                <div class="p-img">
                    <a href="#"><img src="${Data.beautyData.hotgoods[i].goodurls.nowurl}"></a>
                </div>
                <div class="p-content">
                    <div class="p-name">
                        <a href="#">${Data.beautyData.hotgoods[i].goodtitle}</a>
                    </div>
                    <div class="p-price">
                        ${'￥'+Data.beautyData.hotgoods[i].goodprice}
                    </div>
                    <div class="p-btn">
                        <a href="#">立即购买</a>
                    </div>
                </div>
            </div>
        </li>`)
        }
    }

    //大图模式渲染数据
    function bigModeSwitch(target) {
        for (var i = 0; i < target.length; i++) {
            $('.big-picture').append(`<li class="impact">
            <div class="p-img">
                <img src="${target[i].goodurls.nowurl}">
            </div>
            <div class="sider">
                <ul>
                    <li>
                        <div class="profit"><img src="${target[i].goodurls.picsurl[0]}" width="26" height="26"></div>
                    </li>
                </ul>
            </div>
            <div class="p-lie">
                ￥<div class="p-price">${+target[i].goodzprice}</div>
                <div class="p-num">已售<em>${target[i].sales}</em>件</div>
            </div>
            <div class="p-name">
                <a href="#">${target[i].goodtitle}</a>
            </div>
            <div class="p-store">
                <a href="#" class="store">美宝莲</a>
                <a href="#" class="p-kefu"><i class="iconfont icon-kefu"></i></a>
            </div>
            <div class="p-function">
                <span><input type="checkbox">&nbsp; &nbsp;对比</span>
                <span class="collection"><i class="iconfont icon-shoucang-kongxin"></i>&nbsp; &nbsp;收藏</span>
                <span class="join-shop-car focus"><i class="iconfont icon-gouwuche"></i>&nbsp;加入购物车</span>
            </div>
        </li>`)
        }
    }

    //小图模式渲染数据
    function smallModeSwitch(target) {
        for (var i = 0; i < target.length; i++) {
            $('.small-picture').append(`<li class="lists">
            <div class="wrap">
                <div class="col-1">
                    <div class="pp-img">
                        <a href="#"><img src="${target[i].goodurls.nowurl}"></a>
                    </div>
                    <div class="pp-introduce">
                        <div class="pp-title">
                            <a href="#">${target[i].goodtitle}</a>
                        </div>
                        <div class="pp-num">
                            <div class="pp-xiaoliang">销量：<span>${target[i].sales}</span></div>
                            <div class="pp-pingjia">评论：<span>1</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="pp-logo">
                        美宝莲<i class="iconfont icon-kefu"></i>
                    </div>
                </div>
                <div class="col-3">
                    <div class="pp-price">
                    ${target[i].goodzprice}
                        <span>${target[i].goodprice}</span>
                    </div>
                </div>
                <div class="col-4">
                    <div class="p-function">
                        <span><input type="checkbox">&nbsp; &nbsp;对比</span>
                        <span class="collection"><i class="iconfont icon-shoucang-kongxin"></i>&nbsp; &nbsp;收藏</span>
                        <span class="join-shop-car focus"><i class="iconfont icon-gouwuche"></i>&nbsp;加入购物车</span>
                    </div>
                </div>
            </div>
        </li>`)
        }
    }

    //初始化数据
    hot(0, 4);
    bigModeSwitch(Data.beautyData.mianpic);
    smallModeSwitch(Data.beautyData.mianpic);

    //一级联动 —— 二级联动渲染
    $('.crumbs-nav-item ul li').one('click', function() {
        if ($(this).text() === '面部护肤') {
            $('.crumbs-nav').append(`
        <div class="crumbs-nav-item1">面部护肤<span class="iconfont icon-xiajiantou"></span>
        <div class="yjt iconfont icon-xiangyoujiantou"></div>
            <div class="trigger">
                <ul>
                    <li class="left l"><a href="#">清洁</a></li>
                    <li class="middle"><a href="#">洗面奶</a></li>
                    <li class="right"><a href="#">卸妆水</a></li>
                </ul>
            </div>
        </div>`);
            init('.hotsale-right ul');
            hot(4, 7);
            linkageRender('.crumbs-nav-item1', '.trigger');
            var arr = [];
            Data.beautyData.mianpic.forEach(item => {
                if (item.goodtitle.includes('面')) {
                    arr.push(item);
                }
            })
            init('.big-picture');
            bigModeSwitch(arr);
            init('.small-picture');
            smallModeSwitch(arr);
        };
        //一级联动 —— 二级联动 —— 三级联动渲染
        $('.trigger .l').one('click', function() {
            $('.crumbs-nav').append(`
             <div class="crumbs-nav-item2">清洁<span class="iconfont icon-xiajiantou"></span>
                 <div class="yjt iconfont icon-xiangyoujiantou"></div>
             </div>`);
            var arr = [];
            Data.beautyData.mianpic.forEach(item => {
                if (item.goodtitle.includes('清洁')) {
                    arr.push(item);
                }
            })
            init('.hotsale-right ul');
            hot(8, 9);
            linkageRender('.crumbs-nav-item2');
            init('.big-picture');
            bigModeSwitch(arr);
            init('.small-picture');
            smallModeSwitch(arr);
        });
    });

    //三级联动移入
    function linkageRender(target, child) {
        $(target).hover(function() {
            $(target).find(child).show();
            $(this).addClass('active');
        }, function() {
            $(target).find(child).hide();
            $(this).removeClass('active');
        });
    }
    linkageRender('.crumbs-nav-item', '.trigger');

    //下箭头点击事件
    var flag = 0;
    $('.xjt').click(function() {
        if ($('.multi-select').find('i').text() == '多选') {
            if (flag == 0) {
                $(this).css('transform', 'rotate(180deg)');
                $('.logopp').height(140);
                flag = 1;
            } else if (flag == 1) {
                $(this).css('transform', '');
                $('.logopp').height(90);
                flag = 0;
            }
        } else if ($('.multi-select').find('i').text() == '收起') {
            alert('请收起全部多选框');
        }
    });

    //多选点击事件
    $('.multi-select').click(function() {
        if (flag == 1) {
            alert('请收起全部单选框');
        } else if (flag == 0) {
            if ($(this).find('i').text() == '多选') {
                $('.logopp').height(140);
                $(this).find('i').text('收起');
                $('.icon-jiahao_o').replaceWith($('<span class="iconfont icon-jianhao_o"></span>'));
                $('.logopp-middle').hide();
                $('.logo-introduce').show();
            } else if ($(this).find('i').text() == '收起') {
                $('.logopp').height(90);
                $(this).find('i').text('多选');
                $('.icon-jianhao_o').replaceWith($('<span class="iconfont icon-jiahao_o"></span>'));
                $('.logopp-middle').show();
                $('.logo-introduce').hide();
                $('.logo-introduce-center ul li input').prop('checked', false);
                $('.confirm').hide();
                $('.sdr').addClass('on').siblings().removeClass('on');
            }
        }
    });

    //品牌介绍字母事件
    $('.logo-introduce-top .words ul li').hover(function() {
        $(this).addClass('on').siblings().removeClass('on');;
    });

    //品牌勾选框选中事件
    $('.logo-introduce-center ul li input').click(function() {
        if ($('.logo-introduce-center').find('input[type="checkbox"]').is(':checked')) {
            $('.confirm').show();
            console.log($('.closee').offset(), $('.confirm').offset());
            $('.closee').offset({ left: 962 });
            $('.confirm').offset({ left: 892 });
        } else {
            $('.confirm').hide();
            $('.closee').offset({ left: 942 });
            $('.confirm').offset({ left: 892 });
        }
    });

    //关闭按钮点击事件
    $('.closee').click(function() {
        $('.multi-select').find('i').text('多选');
        $('.icon-jianhao_o').replaceWith($('<span class="iconfont icon-jiahao_o"></span>'));
        $('.logopp-middle').show();
        $('.logo-introduce').hide();
        $('.logopp').height(90);
        $('.confirm').hide();
        $('.logo-introduce-center ul li input').prop('checked', false);
        $('.sdr').addClass('on').siblings().removeClass('on');
    });

    //模糊搜索点击事件
    //(click事件和blur事件冲突，把click事件拆成鼠标按下和鼠标弹起两个事件)
    $('.expand .l').mousedown(function() {
        $('.price-min').val('');
        $('.price-max').val('');
        $('.expand').hide();
    });
    $('.expand .l').mouseup(function() {});

    //模糊搜索框焦点事件
    $('.box input').focus(function() {
        $('.expand').show();
    });
    $('.box input').blur(function() {
        $('.expand').hide();
    });

    //大图小图点击切换样式
    $('.items .item').click(function() {
        if ($(this).find('.s-big').text() == '大图') {
            $('.big-picture').show();
            $('.small-picture').hide();
            $(this).addClass('current').siblings().removeClass('current');
        } else if ($(this).find('.s-small').text() == '小图') {
            $('.big-picture').hide();
            $('.small-picture').show();
            $(this).css('color', 'red');
            $(this).addClass('current').siblings().removeClass('current');
        }
    });

    //推广商品数据渲染
    function promote() {
        Data.beautyData.goodtui.forEach(value => {
            $('.promote ul').append(
                `<li>
            <div class="p-img">
                <img src=${value.goodurls.nowurl}>
            </div>
            <div class="p-price">
                ${'￥'+value.goodzprice}
            </div>
            <div class="p-title">
                ${value.goodtitle}
            </div>
            <div class="p-num">
                已售<span>${value.sales}</span>件
            </div>
        </li>`
            )
        });
    }
    promote();

    //猜你喜欢数据渲染
    function like(target) {
        target.forEach(value => {
            $('.guess-like ul').append(
                `<li>
            <div class="p-img">
                <img src=${value.goodurls.nowurl}>
            </div>
            <div class="p-price">
                ${'￥'+value.goodprice}
            </div>
            <div class="p-title">
                ${value.goodtitle}
            </div>
            <div class="p-num">
                已售<span>${value.sales}</span>件
            </div>
        </li>`
            )
        });
    }
    like(Data.beautyData.guesspic);

    //价格和销量排序
    $('.numb-left a').click(function() {
        $(this).addClass('focus').siblings().removeClass('focus');
        if ($(this).text() === '价格') {
            rank(Data.beautyData.mianpic);
            init('.big-picture');
            bigModeSwitch(Data.beautyData.mianpic);
            init('.small-picture');
            smallModeSwitch(Data.beautyData.mianpic);
        } else if ($(this).text() === '销量') {
            Data.beautyData.mianpic.sort(function(lowSale, highSale) {
                return lowSale.sales - highSale.sales;
            })
            init('.big-picture');
            bigModeSwitch(Data.beautyData.mianpic);
            init('.small-picture');
            smallModeSwitch(Data.beautyData.mianpic);
        }
        $('.p-function span').find('input[type="checkbox"]').click(function() {
            if ($(this).is(':checked')) {
                $('.mask').show();
                $('.contrast').show();
            }
        });
    });

    //对比栏
    var arr6 = [];
    $('.p-function span').find('input[type="checkbox"]').click(function() {
        if ($(this).is(':checked')) {
            if ($('.compare-bar .center .shop li').length >= 4) {
                alert('选中对比商品超过最大限制');
            } else {
                $('.compare-bar').show();
                var spe = $(this).parents('.impact');
                Data.beautyData.mianpic.forEach(function(item) {
                    if (Number(spe.find('.p-name').find('a').text() == '测试')) {
                        $('.mask').show();
                        $('.contrast').show();
                    } else if (Number(item.goodzprice) == Number(spe.find('.p-price').text())) {
                        arr6.push(item);
                    }
                });
                compare(arr6);
            }
        }
        //删除对比栏商品
        $('.p-del').click(function() {
            $('.compare-bar .center .shop').empty();
            $('.p-function span').find('input[type="checkbox"]').prop('checked', false);
            arr6.length = 0;
        })
    });

    //提示框点击取消
    $('.contrast .top span').click(function() {
        $('.mask').hide();
        $('.contrast').hide();
        $('.p-function span').find('input[type="checkbox"]').prop('checked', false);
    });

    //模糊搜索
    var arr4 = [];
    $('.expand .r').mousedown(function() {
        //console.log($('input[name="price_min"]').val(), $('input[name="price_max"]').val());
        if ($('input[name="price_min"]').val() == '' || $('input[name="price_max"]').val() == '') {
            alert('请输入完整搜索价格');
            $('input[name="price_min"]').val('')
            $('input[name="price_max"]').val('')
        } else if ($('input[name="price_min"]').val() > $('input[name="price_max"]').val()) {
            alert('请输入正确搜索价格');
            $('input[name="price_min"]').val('')
            $('input[name="price_max"]').val('')
        } else {
            Data.beautyData.mianpic.forEach(function(item) {
                var a = Number($('input[name="price_min"]').val());
                var b = Number($('input[name="price_max"]').val());
                if (Number(item.goodzprice) >= a && Number(item.goodzprice) <= b) {
                    arr4.push(item);
                }
            });
            init('.big-picture');
            bigModeSwitch(rank(arr4));
            init('.small-picture');
            smallModeSwitch(rank(arr4));
        }
    });
    //价格排序函数
    function rank(obj) {
        obj.sort(function(low, high) {
            return low.goodzprice - high.goodzprice;
        });
        return obj;
    }

    //对比渲染
    function compare(target) {
        init('.compare-bar .center .shop');
        for (var i = 0; i < target.length; i++) {
            $('.compare-bar .center .shop').append(`<li>
            <div class="p-img">
                <img src=${target[i].goodurls.nowurl}>
            </div>
            <div class="p-right">
                <div class="p-title">${target[i].goodtitle}</div>
                <div class="total">
                    <div class="p-price">￥<span>${target[i].goodzprice}</span></div>
                    <div class="p-del">删除</div>
                </div>
            </div>
        </li>`)
        }
    }

    //隐藏对比栏
    $('.compare-bar .right .top').click(function() {
        $('.compare-bar').hide();
        $('.compare-bar .center .shop').empty();
        $('.p-function span').find('input[type="checkbox"]').prop('checked', false);
        arr6.length = 0;
    });

    //清空对比栏
    $('.compare-bar .right .empty').click(function() {
        $('.compare-bar .center .shop').empty();
        arr6.length = 0;
        $('.compare-bar').hide();
        $('.p-function span').find('input[type="checkbox"]').prop('checked', false);
    });

})