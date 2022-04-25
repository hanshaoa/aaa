// 匀速动画封装
function moveAnimation1(ele, index, stp) {
    // ele移动窗口，index偏移量,stp步长
    clearInterval(ele.time);
    // 对定时器设置id 可以通过dom元素保存定时器
    ele.time = setInterval(function() {
        // ele.style.left = 当前位置 + 10 + “px”
        if (ele.offsetLeft > index) {

            if (ele.offsetLeft <= index) {
                clearInterval(ele.time);
            } else {
                // 判断最后一步 是否还足够走一步 如果不够直接等于最后的位置
                var bis = ele.offsetLeft - stp < index ? index : ele.offsetLeft - stp;
                ele.style.left = bis + "px"
            }
        } else if (ele.offsetLeft < index) {
            if (ele.offsetLeft >= index) {
                clearInterval(ele.time);
            } else {
                // 判断最后一步 是否还足够走一步 如果不够直接等于最后的位置
                var bis = ele.offsetLeft + stp > index ? index : ele.offsetLeft + stp;
                ele.style.left = bis + "px"
            }
        }
    }, 100)
}


// 缓动动画封装
function moveAnimation2(ele, index) {
    clearInterval(ele.time);
    ele.time = setInterval(function() {

        if (ele.offsetLeft == index) {
            clearInterval(ele.time);
        } else {
            var targer = (index - ele.offsetLeft) / 10;

            // if (targer > 0) {
            //     targer = Math.ceil(targer)
            // } else if (targer < 0) {
            //     targer = Math.floor(targer)
            // }
            var bis = targer > 0 ? Math.ceil(targer) : Math.floor(targer)

            ele.style.left = ele.offsetLeft + targer + "px";
        }

    }, 20)
}


function animationY(ele, max, step) {
    // 如果最终位置小于盒子现有位置，那么盒子将会向上移动
    clearInterval(ele.move);
    if (ele.offsetTop > max) {
        ele.move = setInterval(() => {
            if (ele.offsetTop <= max) {
                clearInterval(ele.move);
            } else {
                var dis = ele.offsetTop - step <= max ? max : ele.offsetTop - step;
                ele.style.top = dis + 'px';
            }
        }, 100);

    }


    // 如果最终位置大于盒子现有位置，那么盒子将会向下移动
    else if (ele.offsetTop < max) {
        ele.move = setInterval(() => {
            if (ele.offsetTop >= max) {
                clearInterval(ele.move);
            } else {
                var dis = ele.offsetTop + step >= max ? max : ele.offsetTop + step;
                ele.style.top = dis + 'px';
            }
        }, 100);
    }
}