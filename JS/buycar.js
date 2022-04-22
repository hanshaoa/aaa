// 猜你喜欢
function like() {
    Data.beautyData.guesspic.forEach(value => {
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
like();


// 购物车部分联动
// 1.所有的复选框选中或者取消
// 2.全选选中-全选取消------合计
// 3.该店铺商品全选选中-全选取消 ------合计
// 4.该店铺商品全部选中,全选按钮选中-任何一个不选,全选取消
// 5.商品全部选中,全选按钮选中-任何一个不选,全选取消 ------合计
// 6.加事件 ------合计
// 7.减事件 ------合计
// 8.输入产品计算商品价格小计 ------合计
// 9.删除事件 ------合计
// 10.模态框的取消和确定

function sum() {
    var sumNum = 0;
    var sumPrice = 0;
    $('.son-check').next().each(function() {
        if ($(this).hasClass('yes')) {
            sumNum += Number($(this).parents('.item-list').find('.buy-num').val());
            sumPrice += Number($(this).parents('.item-list').find('.goods_subtotal').find('span').text());
        }
    })
    $('.cart_check_num').text(sumNum);
    $('.sumPrice').text('￥' + sumPrice);
}


$('label').click(function() {
    $(this).toggleClass('yes')
    sum();
});

// 全选
$('.checkboxshopAll').next('label').click(function() {
    if ($(this).hasClass('yes')) {
        $('label').not($(this)).addClass('yes');
    } else {
        $('label').removeClass('yes');
    }
    sum();
})

// 3.该店铺商品全选选中-全选取消 ------合计
$('.shop-check').next('label').click(function() {
    if ($(this).hasClass('yes')) {
        $(this).parents('.cart-item').find('.son-check').next().addClass('yes');
        $(this).next().addClass('yes');
    } else {
        $(this).parents('.cart-item').find('.son-check').next().removeClass('yes');
    }
    sum();
})

// 4.该店铺商品全部选中,全选按钮选中-任何一个不选,全选取消
$('.son-check').next().click(function() {
    console.log($(this));
    $(this).parents('.cart-item').find('.shop-check').next().addClass('yes');
    $(this).parents('.cart-table').find('.checkboxshopAll').next().addClass('yes');
    $('.son-check').next().each(function() {
        if ($(this).hasClass('yes') == false) {
            $(this).parents('.cart-item').find('.shop-check').next().removeClass('yes');
            $(this).parents('.cart-table').find('.checkboxshopAll').next().removeClass('yes');
        }
    })
})

// 5.商品全部选中,全选按钮选中-任何一个不选,全选取消 ------合计
$('.shop-check').next().click(function() {
    $(this).parents('.cart-table').find('.checkboxshopAll').next().addClass('yes');
    $('.shop-check').next().each(function() {
        if ($(this).hasClass('yes') == false) {
            $(this).parents('.cart-table').find('.checkboxshopAll').next().removeClass('yes');
        }
    })
    sum();
})

// 6.加事件 ------合计
$('.buy-num').next().find('.btn-add').click(function() {
    var i = Number($(this).parent().prev().val());
    var j = parseFloat($(this).parents('.s-quantity').prev().find('span').text());
    i++;
    $(this).parent().prev().val(i);
    $(this).next().removeClass('btn-disabled');
    $(this).parents('.s-quantity').next().find('span').text(i * j);
    sum();
})

// 7.减事件 ------合计
$('.buy-num').next().find('.btn-reduce').click(function() {
    var i = Number($(this).parent().prev().val());
    var j = parseFloat($(this).parents('.s-quantity').prev().find('span').text());
    if (i <= 2) {
        i = 1;
        $(this).addClass('btn-disabled');

    } else {
        i--;
    }
    $(this).parent().prev().val(i);
    $(this).next().removeClass('.btn-disabled');
    $(this).parents('.s-quantity').next().find('span').text(i * j);
    sum();
})


// 9.删除事件 ------合计

$('.cart-remove').click(function() {
    var thisBox = $(this).parents('.item-list');
    var fatherBox = $(this).parents('.cart-item');
    $('.modal-bg').css('display', 'block');
    $('.modal-box').css('display', 'block');

    // 10.模态框的取消和确定
    $('.close').off().click(function() {
        $('.modal-bg').css('display', 'none');
        $('.modal-box').css('display', 'none');
        sum();
    });
    $('.ok').off().click(function() {
        thisBox.remove();
        if (fatherBox.find('.item-list').length == 0) {
            fatherBox.remove();
        };

        // 当删除后,店铺的商品的数量继续监听,影响店铺的选择框
        // 店铺被选中的商品的数量
        var num = fatherBox.find('.son-check:checked').length;
        var count = fatherBox.find('.son-check').length;
        if (num == count) {
            fatherBox.find('.shop-check').prop('checked', true);
            fatherBox.find('.shop-check').next().addClass('yes');
        } else {
            fatherBox.find('.shop-check').prop('checked', false);
            fatherBox.find('.shop-check').next().removeClass('yes');
        }


        // 全选监听
        var numShop = $('.shop-check:checked').length;
        var countShop = $('.shop-check').length;
        if (numShop == countShop) {
            $('checkboxshopAll').prop('checked', true);
            $('checkboxshopAll').next().addClass('yes');
        } else {
            $('checkboxshopAll').prop('checked', false);
            $('checkboxshopAll').next().removeClass('yes');
        }


        $('.modal-bg').css('display', 'none');
        $('.modal-box').css('display', 'none');

        sum();
    })
})



// 从本地拿数据进行渲染