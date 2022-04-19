/*参考
data = {
    goodid: "",//商品id
    goodurls: "",//商品地址
    goodtitle: "",//商品标题
    goodprice: "",//商品价格
    goodzprice: "",//商品折扣价格
}
*/

// 所有页面数据
Data = {

    //首页面数据
    indexData: {
        // 好货大汇聚数据       注意此处goodsis
        mainLbtdata:[{
            goodsis:"0",
            goodurl:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097011644.jpg",
            goodtitle:"海飞丝Razer/雷蛇 北海巨妖专业版V2 Kraken Pro 电竞游戏耳麦 耳机",
            goodprice:"236.00",
            goodzprice:"360.00" 
        },{
            goodsis:"1",
            goodurl:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg",
            goodtitle:"合生元Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
            goodprice:"419.00",
            goodzprice:"600.00" 
        },{
            goodsis:"2",
            goodurl:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
            goodtitle:"匡威实木衣柜",
            goodprice:"6590.00",
            goodzprice:"9360.00" 
        },{
            goodsis:"3",
            goodurl:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
            goodtitle:"一品玉丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
            goodprice:"1689.00",
            goodzprice:"2400.00" 
        },{
            goodsis:"4",
            goodurl:"https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536605332768.jpg",
            goodtitle:"艾伦 Y700平板电脑12寸超薄智能wifi二合一10新款高清三星屏吃鸡游戏",
            goodprice:"10.00",
            goodzprice:"960.00" 
        },{
            goodsis:"5",
            goodurl:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489096810833.jpg",
            goodtitle:"磨铁图书Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
            goodprice:"7100.00",
            goodzprice:"9360.00" 
        }],

        // 商品数据
        mainpic: [{
            goodid: "0",
            goodurls: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
            goodtitle: "摩飞（Morphyrichards）榨汁机 便携式充电迷你无线果汁机料理机随行杯MR9800 蓝色",
            goodprice: "399.00",
            goodzprice: "219.00",
        }, {
            goodid: "1",
            goodurls:  "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg",
            goodtitle: "合生元Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
            goodprice: "7700.00",
            goodzprice: "600.00",
        }, {
            goodid: "2",
            goodurls:  "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
            goodtitle: "喜瑞新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
            goodprice: "233.00",
            goodzprice: "279.00",
        }, {
            goodid: "3",
            goodurls:  "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102753231.jpg",
            goodtitle: "华帝新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮",
            goodprice: "300.00",
            goodzprice: "360.00", 
        }, {
            goodid: "4",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102950633.jpg",
            goodtitle: "鸿星尔克韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服",
            goodprice: "450.00",
            goodzprice: "540.00", 
        }, {
            goodid: "5",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108311901.jpg",
            goodtitle: "工银瑞信Samsung/三星 Galaxy C9 Pro SM-C9000 6+64G全金属超薄手机 12期免息 送蓝牙音箱等多种套餐好礼",
            goodprice: "3500.00",
            goodzprice: "4200.00", 
        }, {
            goodid: "6",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108908792.jpg",
            goodtitle: "迪士尼伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包",
            goodprice: "888.00",
            goodzprice: "1056.00",
        }, {
            goodid: "7",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489109633806.jpg",
            goodtitle: "汤臣倍健春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮",
            goodprice: "1000",
            goodzprice: "1200",
        }, {
            goodid: "8",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodprice: "3126.00",
            goodzprice: "4288.00",
        }, {
            goodid: "9",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
            goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
            goodprice: "1000",
            goodzprice: "226",
        }, {
            goodid: "10",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
            goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
            goodprice: "158",
            goodzprice: "89",
        }, {
            goodid: "11",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodprice: "45.60",
            goodzprice: "38.00",
        }, {
            goodid: "12",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490160001609.jpg",
            goodtitle: "磨铁图书DIY台式电脑整机I7四核六核独显固态组装游戏电脑主机24寸显示器 送百元礼品 内存免费升级 送显示器",
            goodprice: "1388.00",
            goodzprice: "1665.00",
        }, {
            goodid: "13",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
            goodtitle: "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
            goodprice: "219.60",
            goodzprice: "262.00",
        }, {
            goodid: "14",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174303715.jpg",
            goodtitle: "YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购",
            goodprice: "159.60",
            goodzprice: "160.00",
        }, {
            goodid: "15",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174414186.jpg",
            goodtitle: "康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生",
            goodprice: "79.60",
            goodzprice: "194.00",
        }, {
            goodid: "16",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodprice: "1000",
            goodzprice: "226",
        }, {
            goodid: "17",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
            goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
            goodprice: "1000",
            goodzprice: "226",
        }, {
            goodid: "18",
            goodurls: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536532312220.jpg",
            goodtitle: "猫人Xiaomi/小米 小米电视4A 55英寸 4k超高清智能网络电视机 50 60",
            goodprice: "2399",
            goodzprice: "2800",
        }, {
            goodid: "19",
            goodurls: "https://x.dscmall.cn/storage/images/201909/thumb_img/925_thumb_G_1569533172825.jpg",
            goodtitle: "欧亚马山水 F7 5.1家庭影院音响套装电视客厅家用3d环绕组合音箱 电视k歌音响套装 家用 组合 重低音蓝牙",
            goodprice: "1999",
            goodzprice: "2167",
        }, {
            goodid: "20",
            goodurls: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540539657.jpg",
            goodtitle: "小米空气净化器2S家用办公智能氧吧除甲醛雾霾粉尘 新品",
            goodprice: "800",
            goodzprice: "890",
        }, ]
    },




    // 个护美妆
    beautyData: {
        // 热门推荐        
            /* goodtype:商品类型   1：面部护肤     2：洗发护发     3：香水彩妆
            gooduse:商品用处（更细一级划分）    一、1：清洁     2：洗面奶       3：卸妆水       4：爽肤水
                                                二、1：洗发     2：染发     3：造型
                                                三、1：底妆     2：腮红     3：眼部     4：彩妆套装     5：双眼皮贴     6：气垫BB
            goodbrand:商品品牌                  1：Justyle      2：宝姿     3：皮克朋   4：NINE WEST    5：飞利浦       6：小米     7：华为
            */
        hotgoods:[{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224435682.jpg",
            goodtitle: "宝姿美宝莲 顺滑恒久眉笔流畅线条 利落型眉 可长久持妆 新品上市 流畅线条 利落型眉 长效持妆",
            goodprice: "100",
            goodtype: "3",
            gooduse: "3",
            goodbrand: "1"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224263857.jpg",
            goodtitle: "宝姿美宝莲 宝蓓爱炫彩护唇膏 润唇膏 波普风 保湿滋润 显色丰润 一扫唇色暗沉 卖萌必备",
            goodprice: "100",
            goodtype: "3",
            gooduse: "1",
            goodbrand: "2"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224291051.jpg",
            goodtitle: "宝姿美宝莲宝蓓护唇膏 宝贝护唇膏 润唇膏 唇彩口红保湿 滋润",
            goodprice: "100",
            goodtype: "3",
            gooduse: "5",
            goodbrand: "3"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224320245.jpg",
            goodtitle: "宝姿Maybelline/美宝莲净澈多效卸妆水清爽型 舒缓 深层清洁 舒缓 补水 深层清洁 卸妆",
            goodprice: "100",
            goodtype: "2",
            gooduse: "1",
            goodbrand: "4"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224493829.jpg",
            goodtitle: "小米宝莲 透净瞬洁净妆乳 120ml 卸妆乳 卸妆液卸妆无残留专柜正品 安全温和 彻底清洁 水润清爽",
            goodprice: "100",
            goodtype: "1",
            gooduse: "3",
            goodbrand: "5"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489104977765.jpg",
            goodtitle: "皮克朋一叶子去角质去死皮膏啫喱面部温和祛黑头全身温和补水凝胶磨砂膏 新鲜护肤 植物护肤 去除角质 光...",
            goodprice: "108",
            goodtype: "1",
            gooduse: "2",
            goodbrand: "6"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105021484.jpg",
            goodtitle: "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
            goodprice: "60",
            goodtype: "1",
            gooduse: "1",
            goodbrand: "7"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105021484.jpg",
            goodtitle: "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
            goodprice: "60",
            goodtype: "1",
            gooduse: "2",
            goodbrand: "6"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224351677.jpg",
            goodtitle: "宝姿美宝莲 色秀指甲油 糖果色 专业彩妆美甲 专柜正品 绚丽色彩 多色可选",
            goodprice: "100",
            goodtype: "3",
            gooduse: "2",
            goodbrand: "5"
        },{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489104168209.jpg",
            goodtitle: "justyle美宝莲绝色持久唇膏 粉红警报 魅惑炫亮润泽 唇彩口红",
            goodprice: "520",
            goodtype: "3",
            gooduse: "1",
            goodbrand: "4"
        }],

        // 主体商品
        mianpic: [{
            goodid: "21",
            goodurls: {
                // 展示的图
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489105083028.jpg",
                // 下方小图
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489105083028.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105091463.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105091338.jpg",
                ]
            },
            goodtitle: "麦斯威尔杰威尔发胶定型喷雾男士干胶头发持久定型造型啫喱水发蜡蓬松清香 快速定型，蓬松清香，不起白屑，",
            goodzprice: "0.01", //折扣价格
            sales: "5", //销量
            goodtype: "1",
            gooduse: "1",
            goodbrand: "1"
        }, {
            goodid: "22",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224521970.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224521970.jpg"
                ]
            },
            goodtitle: "Maybelline/美宝莲好气色水润唇部套装 滋润保湿持久显色唇露唇膏",
            goodzprice: "34.00", //折扣价格
            sales: "1", //销量
            goodtype: "1",
            gooduse: "1",
            goodbrand: "2"
        }, {
            goodid: "23",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/202101/goods_img/0_P_1611858712812.png",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/202101/thumb_img/0_thumb_P_1611858712231.jpg",
                    "https://x.dscmall.cn/storage/images/202106/thumb_img/1242_thumb_P_1622745809363.jpg",
                ]
            },
            goodtitle: "测试",
            goodzprice: "60.00", //折扣价格
            sales: "11", //销量
            goodtype: "1",
            gooduse: "1",
            goodbrand: "3"
        }, {
            goodid: "24",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224493856.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224493856.jpg",
                ]
            },
            goodtitle: "小米宝莲 透净瞬洁净妆乳 120ml 卸妆乳 卸妆液卸妆无残留专柜正品 安全温和 彻底清洁 水润清爽",
            goodzprice: "129.60", //折扣价格
            sales: "3", //销量
            goodtype: "1",
            gooduse: "2",
            goodbrand: "1"
        }, {
            goodid: "25",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224466488.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224466138.jpg",
                    "https: //x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224466254.jpg",
                    "https: //x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224462894.jpg",
                ]
            },
            goodtitle: "宝姿美宝莲 好气色潮色双搭轻垫霜提亮肌肤白皙气垫CC霜凸显好气色 提亮肌肤",
            goodzprice: "28.79", //折扣价格
            sales: "0", //销量
            goodtype: "1",
            gooduse: "2",
            goodbrand: "2"
        }, {
            goodid: "26",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224408944.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224408944.jpg",
                    "https: //x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224406930.jpg",
                ]
            },
            goodtitle: "宝姿美宝莲 奇妙净颜盈润洁面膏100ml 保湿 控油 滋润 祛除多余油脂 不干燥 不紧绷",
            goodzprice: "340.00", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "2",
            goodbrand: "2"
        }, {
            goodid: "27",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224351882.jpg",
                picsurl: [
                    "https: //x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224351056.jpg",
                ]
            },
            goodtitle: "宝姿美宝莲 色秀指甲油 糖果色 专业彩妆美甲 专柜正品 绚丽色彩 多色可选",
            goodzprice: "226.79", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "2",
            goodbrand: "2"
        }, {
            goodid: "28",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224320593.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224320593.jpg",
                ]
            },
            goodtitle: "宝姿Maybelline/美宝莲净澈多效卸妆水清爽型 舒缓 深层清洁 舒缓 补水 深层清洁 卸妆",
            goodzprice: "56.00", //折扣价格
            sales: "0", //销量
            goodtype: "3",
            gooduse: "1",
            goodbrand: "1"
        }, {
            goodid: "29",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224295755.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224295755.jpg",
                    "https: //x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224295307.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224291402.jpg"
                ]
            },
            goodtitle: "宝姿美宝莲宝蓓护唇膏 宝贝护唇膏 润唇膏 唇彩口红保湿 滋润",
            goodzprice: "34.00", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "1",
            goodbrand: "3"
        }, {
            goodid: "30",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224265222.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224265222.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224263168.jpg",
                ]
            },
            goodtitle: "宝姿美宝莲 宝蓓爱炫彩护唇膏 润唇膏 波普风 保湿滋润 显色丰润 一扫唇色暗沉 卖萌必备",
            goodzprice: "116.00", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "1",
            goodbrand: "4"
        }, {
            goodid: "31",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489105021570.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489105021570.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105028525.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105028508.jpg"
                ]
            },
            goodtitle: "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
            goodzprice: "60.00", //折扣价格
            sales: "0", //销量
            goodtype: "3",
            gooduse: "1",
            goodbrand: "4"
        }, {
            goodid: "32",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104977818.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104977818.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104627793.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104628947.jpg",
                ]
            },
            goodtitle: "皮克朋一叶子去角质去死皮膏啫喱面部温和祛黑头全身温和补水凝胶磨砂膏 新鲜护肤 植物护肤 去除角质 光滑柔嫩",
            goodzprice: "108.00", //折扣价格
            sales: "0", //销量
            goodtype: "1",
            gooduse: "1",
            goodbrand: "4"
        }, {
            goodid: "33",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104621225.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104621225.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104982668.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104982920.jpg",
                ]
            },
            goodtitle: "NINE WEST花美时三合一自动旋转双头眉笔眉粉染眉膏画眉持久防水防汗不脱色 防水防汗 持久不晕染 正品包邮",
            goodzprice: "200.00", //折扣价格
            sales: "0", //销量
            goodtype: "1",
            gooduse: "2",
            goodbrand: "4"
        }, {
            goodid: "34",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104534435.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224263857.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104543433.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104543626.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104544834.jpg"
                ]
            },
            goodtitle: "飞利浦美宝莲绝色持久唇膏 粉红警报 魅惑炫亮润泽 唇彩口红",
            goodzprice: "300.00", //折扣价格
            sales: "17", //销量
            goodtype: "2",
            gooduse: "2",
            goodbrand: "4"
        }, {
            goodid: "35",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104168006.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104168006.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104176059.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104176145.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104176308.jpg"
                ]
            },
            goodtitle: "justyle美宝莲绝色持久唇膏 粉红警报 魅惑炫亮润泽 唇彩口红",
            goodzprice: "520.00", //折扣价格
            sales: "0", //销量
            goodtype: "3",
            gooduse: "2",
            goodbrand: "3"
        }, {
            goodid: "36",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224438450.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224438450.jpg",
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224435860.jpg",
                ]
            },
            goodtitle: "宝姿美宝莲 顺滑恒久眉笔流畅线条 利落型眉 可长久持妆 新品上市 流畅线条 利落型眉 长效持妆",
            goodzprice: "100.00", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "2",
            goodbrand: "3"
        }],

        // 猜你喜欢
        guesspic: [{
            goodid: "37",
            goodurls: "https://x.dscmall.cn/storage/images/202201/thumb_img/1278_copy_0_thumb_G_1642458923455.jpg",
            goodtitle: "测试1",
            goodprice: "68.00",
            sales: "1", //售出
        },{
            goodid: "38",
            goodurls: "https://x.dscmall.cn/storage/images/202201/thumb_img/1279_copy_0_thumb_G_1642458971157.jpg",
            goodtitle: "测试1",
            goodprice: "68.00",
            sales: "0", //售出
        },{
            goodid: "39",
            goodurls: "https://x.dscmall.cn/storage/images/202108/thumb_img/0_thumb_G_1630270465116.jpg",
            goodtitle: " 测试堂鼠商品",
            goodprice: "0.01",
            sales: "3", //售出
        },{
            goodid: "40",
            goodurls: "https://x.dscmall.cn/storage/images/202103/thumb_img/0_thumb_G_1615502729536.jpg",
            goodtitle: "测试库存",
            goodprice: "0.01",
            sales: "1", //售出
        },{
            goodid: "41",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169118213.jpg",
            goodtitle: "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
            goodprice: "15.90",
            sales: "1", //售出
        },{
            goodid: "42",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224291051.jpg",
            goodtitle: "宝姿美宝莲宝蓓护唇膏 宝贝护唇膏 润唇膏 唇彩口红保湿 滋润",
            goodprice: "100.00",
            sales: "0", //售出
        },{
            goodid: "43",
            goodurls: "https://x.dscmall.cn/storage/images/202106/thumb_img/0_thumb_G_1622745740754.jpg",
            goodtitle: "堂鼠",
            goodprice: "588.00",
            sales: "297", //售出
        }],

        // 推广商品
        goodtui: [{
            goodurls: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224521970.jpg",
            goodtitle: "Maybelline/美宝莲好气色水润唇部套装 滋润保湿持久显色唇露唇膏",
            goodzprice: "34.00", //折扣价格
            sales: "1", //销量
            goodtype: "1",
            gooduse: "1",
            goodbrand: "1"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104168006.jpg",
            goodtitle: "justyle美宝莲绝色持久唇膏 粉红警报 魅惑炫亮润泽 唇彩口红",
            goodzprice: "520.00", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "2",
            goodbrand: "2"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104621225.jpg",
            goodtitle: "NINE WEST花美时三合一自动旋转双头眉笔眉粉染眉膏画眉持久防水防汗不脱色 防水防汗 持久不晕染 正品包邮",
            goodzprice: "200.00", //折扣价格
            sales: "0", //销量
            goodtype: "3",
            gooduse: "1",
            goodbrand: "4"
        }, {
            goodid: "48",
            goodurls: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104977818.jpg",
            goodtitle: "皮克朋一叶子去角质去死皮膏啫喱面部温和祛黑头全身温和补水凝胶磨砂膏 新鲜护肤 植物护肤 去除角质 光滑柔嫩",
            goodzprice: "108.00", //折扣价格
            sales: "0", //销量
            goodtype: "2",
            gooduse: "1",
            goodbrand: "3"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489105021570.jpg",
            goodtitle: "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
            goodzprice: "60.00", //折扣价格
            sales: "0", //销量
            goodtype: "1",
            gooduse: "3",
            goodbrand: "4"
        }, ]  
    },



    // 服装城
    clothesData: {
        // 女装部分
        // goodtype:商品类型    1：连衣裙   2：蕾丝/雪纺衫  3：T恤  4：半身裙   5：休闲裤
        // goodbrand：商品品牌  1：sprit    2：喜瑞         3：乐力 4：LG       5：ERKE     6：崋帝     7：xxx  8：Midea
        girlclothes: [{
            goodid: "50",
            goodurls: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169118805.jpg",
            goodtitle: "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
            goodzprice: "15.90",
            goodtype: "1",
            goodbrand: "2",
        }, {
            goodid: "51",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
            goodtitle: "得听格子衬衫女长袖2020秋季新款小清新韩版宽松百搭学生春秋装纯棉衬衫大码外套上衣女 天蓝色 M（1",
            goodzprice: "233.00",
            goodtype: "4",
            goodbrand: "1",
        }, {
            goodid: "52",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169186175.jpg",
            goodtitle: "韩都衣舍2017春装新款女装春款拼接喇叭长袖连衣裙中长款时尚韩版 领券立减/单件包邮/七天无理由退换",
            goodzprice: "118.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "53",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169030833.jpg",
            goodtitle: "韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素",
            goodzprice: "88.00",
            goodtype: "1",
            goodbrand: "3",
        }, {
            goodid: "54",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169216444.jpg",
            goodtitle: "韩都衣舍2016新款秋冬款长袖连衣裙宽松学生冬季内搭打底裙子韩版 领券下单立减/单件包邮/先拍先发货！",
            goodzprice: "159.00",
            goodtype: "1",
            goodbrand: "4",
        }, {
            goodid: "55",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169250846.jpg",
            goodtitle: "韩都衣舍秋冬喇叭长袖针织衫毛衣女套头宽松纯色百搭学生韩版打底 领券下单立减/单件包邮/先拍先发货！",
            goodzprice: "159.00",
            goodtype: "1",
            goodbrand: "5",
        }, {
            goodid: "56",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169151126.jpg",
            goodtitle: "韩都衣舍春季韩国ulzzang连帽卫衣女套头宽松百搭学生韩版潮bf风 领券下单立减/单件包邮/先拍先发货！",
            goodzprice: "148.00",
            goodtype: "1",
            goodbrand: "4",
        }, {
            goodid: "57",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174894779.jpg",
            goodtitle: "2017韩版女装夏装新款A字宽松松紧腰印花连衣裙DT7039乾 舒适松紧腰 A字版型 时尚印花",
            goodzprice: "166.00",
            goodtype: "1",
            goodbrand: "6",
        }, {
            goodid: "58",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174858999.jpg",
            goodtitle: "美的韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10",
            goodzprice: "68.00",
            goodtype: "2",
            goodbrand: "3",
        }, {
            goodid: "59",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102753231.jpg",
            goodtitle: "华帝新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮",
            goodzprice: "300.00",
            goodtype: "3",
            goodbrand: "6",
        }, {
            goodid: "60",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174741051.jpg",
            goodtitle: "乐力初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底衣春秋 挺拔有型 棉氨材质 柔软舒适 耐洗耐磨",
            goodzprice: "65.00",
            goodtype: "3",
            goodbrand: "3",
        }, {
            goodid: "61",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174791219.jpg",
            goodtitle: "LG17年春夏新款百搭半身裙蛋糕裙 a字裙 裤裙伞裙大码裙子超短裙女 松紧腰围 带裤边打底衬 涤针织面料",
            goodzprice: "49.00",
            goodtype: "4",
            goodbrand: "4",
        }, {
            goodid: "62",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174925807.jpg",
            goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
            goodzprice: "158.00",
            goodtype: "5",
            goodbrand: "4",
        }],


    // 男装部分
        // goodtype:商品类型    1：T恤  2：裤子   3：休闲裤
        // goodbrand：商品品牌  1：金利来    2：CPT         3：康恩贝
        boyclothes: [{
            goodid: "58",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174414186.jpg",
            goodtitle: "康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生",
            goodzprice: "79.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "59",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174303715.jpg",
            goodtitle: "YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购",
            goodzprice: "79.00",
            goodtype: "2",
            goodbrand: "2",
        }, {
            goodid: "60",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174208112.jpg",
            goodtitle: "金利来森马夹克 2016冬装新款男士飞行夹克贴布绣立领休闲外套韩版潮流",
            goodprice: "94.8",
            goodzprice: "79.00",
            goodtype: "1",
            goodbrand: "3",
        }, ],


    // 服饰配件部分
        // goodtype:商品类型    1：配饰  2：棒球帽     3：遮阳帽
        // goodbrand：商品品牌  1：Justyle    2：GNC      3：绿色的不知道啥     4：Za   5：jackjones    6:converse  7:midea 8:huawei
        peijian: [{
            goodid: "61",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173894937.jpg",
            goodtitle: "金奥力红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情",
            goodzprice: "38.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "62",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodzprice: "3188.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "63",
            goodurls: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
            goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
            goodzprice: "399.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "64",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
            goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
            goodzprice: "15.00",
            goodtype: "1",
            goodbrand: "2",
            
        }, {
            goodid: "65",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
            goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
            goodzprice: "38.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "66",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
            goodtitle: "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
            goodzprice: "219.00",
            goodtype: "2",
            goodbrand: "1",
        }],

    // 内衣部分
        // goodtype:商品类型    1：内衣配件  2：女士内裤     3：连裤袜/丝袜
        // goodbrand：商品品牌  1：ELLE     2：李宁     3：masentek     4：five plus    5：lancome  6：jack wolfskin    7：立邦     8：NB
        neiyi: [{
            goodid: "66",
            goodurls: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174547044.jpg",
            goodtitle: "狼爪贝妍夏季薄款女士睡衣性感V领女南韩丝家居服运动可外穿中袖套装",
            goodzprice: "138.00",
            goodtype: "1",
            goodbrand: "6",
        }, {
            goodid: "67",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489099987431.jpg",
            goodtitle: "爆款 爱慕经典KiKi裤轻薄无痕女士中腰三角内裤多色内衣A",
            goodzprice: "88.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "68",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174469373.jpg",
            goodtitle: "兰蔻Calvin Klein Underwear/CK 2017春夏新款 男士平角内裤NU8638 初上市价格290元",
            goodzprice: "290.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "69",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174663688.jpg",
            goodtitle: "立邦都市丽人文胸旗舰店 林志玲有钢圈少女小胸文胸 聚拢 调整型内衣V 官方正品 赠运费险 收藏有礼 全国包邮",
            goodzprice: "138.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "70",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174703131.jpg",
            goodtitle: "李宁都市丽人一片式无痕文胸厚杯性感聚拢舒适光面胸罩纯色商场同款 2016新品明星同款舒适Q软托无痕体验",
            goodzprice: "138.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "71",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100049187.jpg",
            goodtitle: "Five Plus2017新品 加一尚品无痕内衣女 前扣无钢圈薄款交叉美背文胸M37 厚杯+薄杯 无钢圈 前扣 美背 上薄下厚",
            goodzprice: "138.00",
            goodtype: "1",
            goodbrand: "2",
        }, {
            goodid: "72",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100653308.jpg",
            goodtitle: "新百伦樱尚雅一片式无痕无钢圈文胸聚拢调整型性感小胸罩厚薄款少女内衣 2件减5元 不聚拢包退 送运费险",
            goodzprice: "138.00",
            goodtype: "1",
            goodbrand: "9",
        }, {
            goodid: "73",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100914563.jpg",
            goodtitle: "ELLE HOME舒适睡眠文胸罩无痕薄款运动内衣无钢圈女士调整型背心式少女聚拢 赠运费险 无痕无钢圈 舒适聚拢",
            goodzprice: "138.00",
            goodtype: "1",
            goodbrand: "1",
        },  {
            goodid: "73",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174508974.jpg",
            goodtitle: "Masentek迷瞳盒装女士内裤莫代尔透气少女三角裤夏季性感低腰无痕大码裤头 5条盒装 莫代尔面料 小内裤 窄边三角裤",
            goodzprice: "44.00",
            goodtype: "2",
            goodbrand: "3",
        }],



    // 运动户外
        // goodtype:商品类型    1：跑步运动  2：舞蹈运动     3：瑜伽运动
        // goodbrand:商品品牌      1：同情和堂      2：SPALDING     3：皮尔瑜伽     4：Johnson      5：picobang     6：三星     7：苹果     8：七匹狼
        sport: [{
            goodid: "74",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
            goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
            goodzprice: "400.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "75",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodzprice: "249.00",
            goodtype: "1",
            goodbrand: "6",
        }, {
            goodid: "76",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
            goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
            goodzprice: "23.80",
            goodtype: "1",
            goodbrand: "1"
        }, {
            goodid: "77",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
            goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
            goodzprice: "98.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "78",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
            goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
            goodzprice: "360.00",
            goodtype: "1",
            goodbrand: "8",
        }, {
            goodid: "79",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
            goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
            goodzprice: "260.00",
            goodtype: "1",
            goodbrand: "7",
        }, {
            goodid: "79",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218835060.jpg",
            goodtitle: "斯伯丁马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
            goodzprice: "98.00",
            goodtype: "1",
            goodbrand: "1",
        }, {
            goodid: "79",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218701469.jpg",
            goodtitle: "皮尔瑜伽迪卡侬健身手套 力量训练哑铃护掌防滑 DOMYOS QS 轻盈透气 重量训练",
            goodzprice: "39.90",
            goodtype: "2",
            goodbrand: "1",
        }, {
            goodid: "79",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218905472.jpg",
            goodtitle: "同庆和堂专业瑜伽服双线美背瑜伽背心吊带含胸垫122324",
            goodzprice: "159.00",
            goodtype: "3",
            goodbrand: "1",
        }  ],

    // 随手购部分
        suibian: [{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
            goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
            goodzprice: "98.00",
        },{
            goodid: "80",
            goodurls: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/123512/13/9287/160399/5f2fd23eE1fa59971/32abc6e0ae1d8f4b.jpg",
            goodtitle: "得听格子衬衫女长袖2020秋季新款小清新韩版宽松百搭学生春秋装纯棉衬衫大码外套上衣女 天蓝色 M（1",
            goodzprice: "78.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
            goodtitle: "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
            goodzprice: "219.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173860746.jpg",
            goodtitle: "justyle6林志玲花样姐姐同款海伦凯勒太阳镜女 偏光蛤蟆镜潮墨镜H8535 花样姐姐同款 林志玲设计 炫彩镂空",
            goodzprice: "378.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
            goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
            goodzprice: "400.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100914563.jpg",
            goodtitle: "ELLE HOME舒适睡眠文胸罩无痕薄款运动内衣无钢圈女士调整型背心式少女聚拢 赠运费险 无痕无钢圈 舒适聚拢",
            goodzprice: "211.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
            goodtitle: "喜瑞新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
            goodzprice: "233.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169118213.jpg",
            goodtitle: "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174508974.jpg",
            goodtitle: "Masentek迷瞳盒装女士内裤莫代尔透气少女三角裤夏季性感低腰无痕大码裤头 5条盒装 莫代尔面料 小内裤 窄边三角裤",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
            goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174703131.jpg",
            goodtitle: "李宁都市丽人一片式无痕文胸厚杯性感聚拢舒适光面胸罩纯色商场同款 2016新品明星同款舒适Q软托无痕体验",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/138880/22/6489/135565/5f4332e6E2b89c8f9/f8e10228bd2d311a.jpg",
            goodtitle: "【商场同款】哈吉斯HAZZYS 2020秋季风衣女英伦都市时尚风衣外套ASWSH00CH08 米色B",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218905472.jpg",
            goodtitle: "同庆和堂专业瑜伽服双线美背瑜伽背心吊带含胸垫122324",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169186175.jpg",
            goodtitle: "韩都衣舍2017春装新款女装春款拼接喇叭长袖连衣裙中长款时尚韩版 领券立减/单件包邮/七天无理由退换",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536622869504.jpg",
            goodtitle: "Lily2018秋新款女装V领修身职业套装连衣裙两件套118330C7607",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490168991044.jpg",
            goodtitle: "韩都衣舍2017韩版女装夏装新款纯色镂空露腰短袖T恤OU7163堯 韩版版型 时尚镂空 舒适面料 个性穿搭",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489099987431.jpg",
            goodtitle: "爆款 爱慕经典KiKi裤轻薄无痕女士中腰三角内裤多色内衣A",
            goodzprice: "98.00",
        } ,{
            goodid: "80",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodzprice: "98.00",
        } ]
    },

};