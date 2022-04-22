var enroll_name = document.getElementById("user_tel");
var enroll_name1 = document.getElementById("user_tel1");
var enroll_pass = document.getElementById("yanzheng");
var enroll_pass1 = document.getElementById("yanzheng1");
var enroll_tel_yanzheng = document.getElementById('tel_yanzheng');
var enroll_tel_yanzheng1 = document.getElementById('tel_yanzheng1');
var enroll_set_pas = document.getElementById('set_pas');
var enroll_set_pas1 = document.getElementById('set_pas1');
var enroll_again_pas = document.getElementById('again_pas');
var enroll_again_pas1 = document.getElementById('again_pas1');
function enroll() {
    var tel = enroll_name.value;
    console.log(tel); //获取电话
    var pas = enroll_pass.value;
    console.log(pas); //获取密码
    var tel_yanzheng = enroll_tel_yanzheng.value;
    console.log(tel_yanzheng); // 获取手机验证码
    var set_pas = enroll_set_pas.value;
    console.log(set_pas); // 设置密码
    var again_pas = enroll_again_pas.value;
    console.log(again_pas); // 确认密码
    if (localStorage.length == 0) {
        console.log('请注册');
        //没有数据直接存储
        var dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
        console.log(dataLength);
        // 创建一个对象用于存储用户输入的数据
        var data = {}; //创建一个对象
        data.tel = tel; //添加用户名
        data.pas = pas; //添加密码
        data.tel_yanzheng = tel_yanzheng;
        data.set_pas = set_pas;
        data.again_pas = again_pas;
        data.id = dataLength; //添加凭证id
        var info = JSON.stringify(data); //将对象转化为字符串,因为本地只能存储字符串
        console.log(info);
        // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
        localStorage.setItem("key" + dataLength, info);
        // 获取本地存储所有数据 查看是否存到本地
        console.log(localStorage);


    } else if (tel == '' || pas == '' || tel_yanzheng == '' || set_pas == '' || again_pas == '') {
        alert('请核对输入的信息');
    } else {
    console.log(Number(localStorage.length)-1);

        //判断用户名是否重复
        console.log('正确');
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var keydate = localStorage.getItem(key); //得到当前key对应的对象
            var keyinfo = JSON.parse(keydate); //转化字符转

            if (keyinfo.tel == tel) { //判断你输入的用户名和已存储的是否重复
                alert("用户名已经存在");
                break;
            } else {
                console.log(999);
                var dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
                // 创建一个对象用于存储用户输入的数据
                var data = {};
                data.tel = tel; //添加用户名
                data.pas = pas; //添加密码
                data.tel_yanzheng = tel_yanzheng;
                data.set_pas = set_pas;
                data.again_pas = again_pas;
                data.id = dataLength; //添加凭证id
                var info = JSON.stringify(data); //将对象转化为字符串,因为本地只能存储字符串
                console.log(info);
                // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
                localStorage.setItem("key" + dataLength, info);
                // 获取本地存储所有数据 查看是否存到本地
                console.log(localStorage.valueOf());
                alert("注册成功");
                setTimeout(function () {
                    // location.href('user.html');
                    window.open('user.html');
                }, 500); //定时器注册成功后,直接进入主页
                // break;
            }
        }
    }
}
var yh = /^\w{5,20}$/
// 密码
var mima = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,15}$/;
var nameRegExp2 = /([^u4E00-u9FA5])/g;
var ans = /^[u4E00-u9FA5A-Za-z0-9]+$/
// 身份证
var num = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
// 邮箱
var youxiang = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$/;
// 手机号
// var tels = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])d{8}$/;
var tels = /^1[3|4|5|7|8]\d{9}$/;
// 验证码
var test_ = /^[A-Za-z0-9._%-]{4}$/;
// 手机验证码
var tel_test_ = /^[0-9]{4}$/;
// var get_mima = 'a';
function Exp(left, right, zhengze) {
    left.onblur = function() {
        if (zhengze.test(this.value)) {
            right.style.color = "green";
            right.innerText = "输入正确！";

        } else {
            right.style.color = "red";
            right.innerText = "输入格式错误！";

        }
    }
}
// 判断确认密码
enroll_set_pas.onblur = function() {
        if (enroll_again_pas.value == this.value) {
            enroll_set_pas1.style.color = "green";
            enroll_set_pas1.innerText = "输入正确！";
        } else {
            enroll_set_pas1.innerText = "输入格式错误！";
        }
}
// 手机号码
Exp(enroll_name, enroll_name1, tels);
// 验证码
Exp(enroll_pass, enroll_pass1, test_);
// 手机验证码
Exp(enroll_tel_yanzheng, enroll_tel_yanzheng1, tel_test_);
// 密码
Exp(enroll_set_pas, enroll_set_pas1, mima);
// 确认密码
Exp(enroll_again_pas, enroll_again_pas1, mima);


