// function moveAnimation1(ele, index) {
//     clearInterval(ele.time);
//     // 对定时器设置id 可以通过dom元素保存定时器
//     ele.time = setInterval(function() {
//         // ele.style.left = 当前位置 + 10 + “px”
//         if (ele.offsetLeft > index) {

//             if (ele.offsetLeft <= index) {
//                 clearInterval(ele.time);
//             } else {
//                 // 判断最后一步 是否还足够走一步 如果不够直接等于最后的位置
//                 var bis = ele.offsetLeft - 13 < index ? index : ele.offsetLeft - 13;
//                 ele.style.left = bis + "px"
//             }
//         } else if (ele.offsetLeft < index) {
//             if (ele.offsetLeft >= index) {
//                 clearInterval(ele.time);
//             } else {
//                 // 判断最后一步 是否还足够走一步 如果不够直接等于最后的位置
//                 var bis = ele.offsetLeft + 13 > index ? index : ele.offsetLeft + 13;
//                 ele.style.left = bis + "px"
//             }
//         }
//     }, 100)
// }



// 左右轮播动画
function moveAnimation1(ele, index) {
    clearInterval(ele.time);
    ele.time = setInterval(function() {
        if (ele.offsetLeft >= index) {
            if (ele.offsetLeft <= index) {
                clearInterval(ele.time);
            } else {
                if (ele.offsetLeft - index <= 13) {
                    ele.style.left = index + "px";
                } else {
                    ele.style.left = ele.offsetLeft - 13 + "px";

                }
            }
        } else if (ele.offsetLeft <= index) {
            if (ele.offsetLeft >= index) {
                clearInterval(ele.time);
            } else {

                if (index - ele.offsetLeft <= 13) {
                    ele.style.left = index + "px";
                } else {
                    ele.style.left = ele.offsetLeft + 13 + "px";
                }
            }
        }
    }, 100)
}

// 向上移动动画
function topmove(ele,index){
    ele.time = setInterval(function() {

    if(ele.offsetTop+index <=0) {

            ele.style.top = 0;
            
        }else{
            
        ele.style.top = ele.offsetTop -1 +"px"
                
        }
    },50)
}

// 缓慢动画


function moveAnimation2(ele, index) {
    clearInterval(ele.time);
    ele.time = setInterval(function() {

        if (ele.offsetLeft == index) {
            clearInterval(ele.time);
        } else {
            var targer = (index - ele.offsetLeft) / 10;

            if (targer > 0) {
                targer = Math.ceil(targer)
            } else if (targer < 0) {
                targer = Math.floor(targer)
            }

            ele.style.left = ele.offsetLeft + targer + "px";
        }

    }, 20)
}

