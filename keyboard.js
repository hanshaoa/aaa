var proT = document.querySelector('.pro-t');
var mask = document.querySelector('#mask');
var maxImg = document.querySelector('#maximg');
var maxbox = document.querySelector('.maxbox');
var product = document.querySelector('.product');
var pic = document.querySelectorAll('.pic');
var prob = document.querySelector('.pro-b');
var span1 = prob.querySelectorAll('span');
var pit = document.querySelectorAll('.pit');
var pit1 = document.querySelectorAll('.pit1');


for (var i = 0; i < pic.length; i++) {
    span1[i].index = i;
    span1[i].onmouseover = function() {
        for (var j = 0; j < pic.length; j++) {
            pic[j].className = 'pic';
            span1[j].className = '';
            pit[j].className = 'pit';
            pit[j].id = '';
        }
        pic[this.index].className = 'pic pic1';
        span1[this.index].className = 'bor';
        pit[this.index].className = 'pit pit1';
        pit[this.index].id = 'maximg';
    }
}
// 鼠标进入
proT.onmouseover = function() {
    mask.style.display = 'block';
    maxbox.style.display = 'block';
}
proT.onmousemove = function(e) {

    // 求鼠标当前在小盒子内的坐标
    var minX = e.pageX - product.offsetLeft;
    var minY = e.pageY - product.offsetTop;
    // console.log(minX,minY);
    // 光标在蒙版的中间
    minX = minX - mask.offsetWidth / 2;
    minY = minY - mask.offsetHeight / 2;
    // 求出蒙版移动的最大距离
    var maskMaxX = proT.offsetWidth - mask.offsetWidth;
    var maskMaxY = proT.offsetHeight - mask.offsetHeight;
    // console.log(maskMaxX,maskMaxY)
    // 判断蒙版移动的最大距离
    if (minX > maskMaxX) {
        minX = maskMaxX;
    } else if (minX < 0) {
        minX = 0;
    }
    if (minY > maskMaxY) {
        minY = maskMaxY;
    } else if (minY < 0) {
        minY = 0;
    }
    // 设定蒙版的位置
    mask.style.left = minX + 'px';
    mask.style.top = minY + 'px';

    // 3、蒙版移动，大盒子里面的图也移动
    // 求出来比例关系
    var ratioX = minX / maskMaxX;
    var ratioY = minY / maskMaxY;
    // 求出大图片可移动最大距离
    var maxImgMaxX = maxbox.offsetWidth - maxImg.offsetWidth;
    var maxImgMaxY = maxbox.offsetHeight - maxImg.offsetHeight;
    // 大图片需要移动的距离
    var maxX = ratioX * maxImgMaxX;
    var maxY = ratioY * maxImgMaxY;
    // 设定图片的位置
    for (var i = 0; i < pit.length; i++) {
        pit[i].style.left = maxX + 'px';
        pit[i].style.top = maxY + 'px';
    }
}

// 鼠标移出
proT.onmouseout = function() {
    mask.style.display = 'none';
    maxbox.style.display = 'none';
}

// 倒计时
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var time2 = new Date('2022-4-25 18:00:00'); //获取目标时间
count();
setInterval(count, 1000); //先调用，防止刷新时出现空白

function count() {
    var time1 = +new Date(); //获得当前毫秒值
    var time3 = time2.getTime(); //将目标时间转化为毫秒值

    var time4 = (time3 - time1) / 1000;

    // h
    var h = parseInt(time4 / 60 / 60 % 24);
    h = h > 10 ? h : '0' + h;
    // m
    var m = parseInt(time4 / 60 % 60);
    m = m > 10 ? m : '0' + m;
    // s
    var s = parseInt(time4 % 60);
    s = s > 10 ? s : '0' + s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
}

// 发货地
var cit = document.querySelectorAll('.cit');
var cit1 = document.querySelector('.cit1');
var z1 = document.querySelector('.z1');
var z2 = document.querySelector('.z2');
var z3 = document.querySelector('.z3');
var z4 = document.querySelector('.z4');
var lists = document.querySelectorAll('.lists');
var prolist = document.querySelector('#province-list');
var citylist = document.querySelector('#city-list');
var qulist = document.querySelector('#qu-list');
var jielist = document.querySelector('#jie-list');
var oli1 = prolist.querySelectorAll('li');
var oli2 = citylist.querySelectorAll('li');
var oli3 = qulist.querySelectorAll('li');
var oli4 = jielist.querySelectorAll('li');

for (var i = 0; i < cit.length; i++) {
    cit[i].index1 = i;
    cit[i].onclick = function() {
        for (var j = 0; j < cit.length; j++) {
            cit[j].className = 'cit';
            lists[j].className = 'lists'
        }
        cit[this.index1].className = 'cit cit1';
        lists[this.index1].className = 'lists lists1'
    }
}

for (var i = 0; i < oli1.length; i++) {
    oli1[i].index2 = i;
    oli1[i].onclick = function() {
        z1.innerText = oli1[this.index2].innerText;
    }
}

for (var i = 0; i < oli2.length; i++) {
    oli2[i].index2 = i;
    oli2[i].onclick = function() {
        z2.innerText = oli2[this.index2].innerText;
    }
}

for (var i = 0; i < oli3.length; i++) {
    oli3[i].index2 = i;
    oli3[i].onclick = function() {
        z3.innerText = oli3[this.index2].innerText;
    }
}

for (var i = 0; i < oli4.length; i++) {
    oli4[i].index2 = i;
    oli4[i].onclick = function() {
        z4.innerText = oli4[this.index2].innerText;
    }
}


var input = document.querySelector('#input');
var iconup = document.querySelector('.icon-up');
var icondown = document.querySelectorAll('.icon-down')[3];
var warn = document.querySelector('.warn');
var error = document.querySelector('#error');



iconup.onclick = function() {
    input.value = Number(input.value) + 1;
}
icondown.onclick = function() {
    if (input.value > 1) {
        input.value = Number(input.value) - 1;
    } else if (input.value == 1) {
        warn.style.display = 'block';
    }
}
error.onclick = function() {
    warn.style.display = 'none';
}



var abl = document.querySelector('.abl');
var abr = document.querySelector('.abr');
var rlb = document.querySelector('.r-lb');


var flag1 = 0;
abr.onclick = function() {
    if (flag1 == 2) {
        flag1 = 2;
    } else {
        flag1++;
    }
    var target = flag1 * (-180);
    moveAnimation1(rlb, target);
}
abl.onclick = function() {
        if (flag1 == 0) {
            flag1 = 0;
        } else {
            flag1--;
        }
        var target = flag1 * (-180);
        moveAnimation1(rlb, target);
    }
    // 匀速动画封装
function moveAnimation1(ele, target) {
    clearInterval(ele.interId);
    ele.interId = setInterval(function() {
        if (ele.offsetTop == target) {
            clearInterval(ele.interId);
        } else if (ele.offsetTop < target) {
            // 给最后一个步长做判断、
            var dis = (ele.offsetTop + 10) > target ? target : (ele.offsetTop + 10);
            ele.style.top = dis + 'px';
        } else if (ele.offsetTop > target) {
            var dis = (ele.offsetTop - 10) < target ? target : (ele.offsetTop - 10);
            ele.style.top = dis + 'px';
        }
    }, 15)
}

// 评论区
var grt = document.querySelector('.gr-t');
var span2 = grt.querySelectorAll('span');
var grb1 = document.querySelector('.gr-b-1');
var grb2 = document.querySelector('.gr-b-2');
var gr3 = document.querySelector('.gr3-t');
var span3 = gr3.querySelectorAll('span')

for (var i = 0; i < span2.length; i++) {
    span2[i].index3 = i;
    span2[i].onclick = function() {
        for (var j = 0; j < span2.length; j++) {
            span2[j].className = '';
        }
        span2[this.index3].className = 'on';
        if (this.index3 == 1) {
            grb1.style.display = 'none';
            grb2.style.display = 'block';
        } else if (this.index3 == 2) {
            grb1.style.display = 'none';
            grb2.style.display = 'none';
        } else {
            grb1.style.display = 'block';
            grb2.style.display = 'none';
        }
    }
}
for (var i = 0; i < span3.length; i++) {
    span3[i].index4 = i;
    span3[i].onclick = function() {
        for (var j = 0; j < span3.length; j++) {
            span3[j].className = '';
        }
        span3[this.index4].className = 'one'
    }
}