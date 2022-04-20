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
                    <a href="#"><img src="${Data.beautyData.hotgoods[i].goodurls}"></a>
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
    //初始化数据
    hot(0, 4);
    //三级联动
    $('.trigger ul li').click(function() {
        $('.crumbs-nav .yjt').show();
        if ($(this).index() === 0) {
            $('.crumbs-nav').append(`
        <div class="crumbs-nav-item1">面部护肤<span class="iconfont icon-xiajiantou"></span>
            <div class="trigger">
                <ul>
                    <li class="left"><a href="#">清洁</a></li>
                    <li class="middle"><a href="#">洗面奶</a></li>
                    <li class="right"><a href="#">卸妆水</a></li>
                </ul>
            </div>
        </div>`);
            init('.hotsale-right ul');
            hot(4, 7);
            linkageRender('.crumbs-nav-item1', '.trigger');
        };
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
                $('.logo').height(140);
                flag = 1;
            } else if (flag == 1) {
                $(this).css('transform', '');
                $('.logo').height(90);
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
                $('.logo').height(140);
                $(this).find('i').text('收起');
                $('.icon-jiahao_o').replaceWith($('<span class="iconfont icon-jianhao_o"></span>'));
                $('.logo-middle').hide();
                $('.logo-introduce').show();
            } else if ($(this).find('i').text() == '收起') {
                $('.logo').height(90);
                $(this).find('i').text('多选');
                $('.icon-jianhao_o').replaceWith($('<span class="iconfont icon-jiahao_o"></span>'));
                $('.logo-middle').show();
                $('.logo-introduce').hide();
            }
        }
    });
    //品牌介绍字母事件
    $('.logo-introduce-top .words ul li').hover(function() {
        $(this).addClass('on').siblings().removeClass('on');;
    });
    //关闭按钮点击事件
    $('.close').click(function() {
        $('.multi-select').find('i').text('多选');
        $('.icon-jianhao_o').replaceWith($('<span class="iconfont icon-jiahao_o"></span>'));
        $('.logo-middle').show();
        $('.logo-introduce').hide();
        $('.logo').height(90);
    });
    //模糊搜索框焦点事件
    $('.box input').focus(function() {
        $('.expand').show();
    });
    $('.box input').blur(function() {
        $('.expand').hide();
    });
})