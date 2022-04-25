$(function() {
        $('.nav-main ul li').click(function() {
            $(this).children('a').css('color', '#e23435').parent('li').siblings().children('a').css('color', '#555');
        })
    })
    // .categorys-type a

var city = document.querySelector('.city');
var city1 = document.querySelector('.city-choie');
var city2 = document.querySelector('.city-2');
var fcity = document.querySelectorAll('.search-first-letter a');
var gcity = document.querySelectorAll('.list li');
var gcity1 = document.querySelectorAll('.list');
var gdt1 = document.querySelector('#city_bar');
var gdt = document.querySelector('.scrollBody');
var num = 1;
var count = 0;
city1.onmouseover = function() {
    city.className = 'city hover';
}
city1.onmouseleave = function() {
    city.className = 'city';
    gcity1[0].style.marginTop = 0;
    gdt1.style.top = '1px';
}
city2.onmouseover = function() {
    city.className = 'city hover';
}
city2.onmouseleave = function() {
    city.className = 'city';
    gcity1[0].style.marginTop = 0;
    gdt1.style.top = '1px';
}
for (var i = 0; i < fcity.length; i++) {
    fcity[i].index = i;
    fcity[i].onmouseover = function() {
        if (this.index == 0) {
            gcity1[0].style.marginTop = 0;
            gdt1.style.top = '1px';
            count = 0;
            num = 1;
        } else if (this.index == fcity.length - 1) {
            // gcity1[0].style.bottom = 0 + 'px';!important   clientHeight
            gcity1[0].style.marginTop = '-1700px';
            gdt1.style.top = '120px';
            count = 10;
            num = 120;
        } else {
            // gcity1[0].style.marginTop = -(gcity[this.index].offsetTop-gcity[this.index].offsetHeight)+'px';
            gcity1[0].style.marginTop = -gcity[this.index].offsetTop + 'px';
            gdt1.style.top = 120 / 22 * this.index + 'px';
            count = Math.round(10 / 22 * this.index);
            num = Math.round(120 / 22 * this.index);
        }
    }
}
gdt.onmousewheel = function(e) {
    console.log(e.wheelDelta)
    if (e.wheelDelta < 0) {
        // gdt1.style.top = 0;
        count++;
        if (count >= 10) {
            gdt1.style.top = '120px';
            num = 120;
            count = 10;
            gcity1[0].style.marginTop = '-1700px';
        } else {
            num += 12;
            gdt1.style.top = num + 'px';
            gcity1[0].style.marginTop = -1700 / 10 * count + 'px';
        }
        console.log(count, num)
    } else {
        count--;
        if (count <= 0) {
            gdt1.style.top = '1px';
            gcity1[0].style.marginTop = 0;
            num = 1;
            count = 0;
        } else {
            num -= 12;
            gdt1.style.top = num + 'px';
            gcity1[0].style.marginTop = -1700 / 10 * count + 'px';
        }
        console.log(count, num)
    }
}