$(function () {
    // 点击input框不会改变边框样式
    $('input').focus(function () {
        $(this).css('outline', '0')
    });
    var user_sub = document.getElementById('user_sub');
console.log(user_sub);
//登录函数
user_sub.onclick = function() {
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("user_pass").value;
    // var user_yanzheng = document.getElementById("user_yanzheng").value;
    if (localStorage.length == 0) { //判断当前本地存储是否为空值
        alert("你还没有注册");
    } else {
        //定义三个数组,实现本地的存储值临时存放,与输入的值进行比对作用
        var teldata = [];
        var passdata = [];
        // var yanzhengdata = [];
        var iddata = [];
        //循环判断本地用户名
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var keydate = localStorage.getItem(key); //拿到当前key对应的value.
            var keyinfo = JSON.parse(keydate); //转换字符串
            console.log(keyinfo); //拿到了当前对象的三个值,
            teldata[i] = keyinfo.tel; //将对象的值,分别放入数组中,进行比较
            passdata[i] = keyinfo.pas;
            iddata[i] = keyinfo.id;
            console.log(teldata);
            console.log(passdata);
            console.log(iddata);
        }
        if (teldata.indexOf(username) < 0) { //当前数组中如果没有该用户名,返回-1,
            alert("该账号,尚未注册,请先注册");
        } else {
            var index = teldata.indexOf(username); //将当前得到的用户名在数组的中下标,拿出来,
            if (passdata[index] != password) { //将拿到的下标,赋给,密码数组的下标,因为此时,两个数组的下标是匹配的,所以可以通过下标进行密码的正确判断.
                alert("密码错误!");
            } else {
                location.href = 'public.html';
            }
        }
    }
}
})
