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
var Data = {

    //首页面数据
    indexData: {
        // 好货大汇聚数据       注意此处goodsis
        mainLbtdata: [{
            goodsis: "0",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097011644.jpg",
            goodtitle: "海飞丝Razer/雷蛇 北海巨妖专业版V2 Kraken Pro 电竞游戏耳麦 耳机",
            goodprice: "236.00",
            goodzprice: "360.00"
        }, {
            goodsis: "1",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg",
            goodtitle: "合生元Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
            goodprice: "419.00",
            goodzprice: "600.00"
        }, {
            goodsis: "2",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
            goodtitle: "匡威实木衣柜",
            goodprice: "6590.00",
            goodzprice: "9360.00"
        }, {
            goodsis: "3",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
            goodtitle: "一品玉丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
            goodprice: "1689.00",
            goodzprice: "2400.00"
        }, {
            goodsis: "4",
            goodurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536605332768.jpg ",
            goodtitle: "艾伦 Y700平板电脑12寸超薄智能wifi二合一10新款高清三星屏吃鸡游戏",
            goodprice: "10.00",
            goodzprice: "960.00"
        }, {
            goodsis: "5",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489096810833.jpg",
            goodtitle: "磨铁图书Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
            goodprice: "7100.00",
            goodzprice: "9360.00"
        }, {
            goodsis: "6",
            goodurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536605332768.jpg",
            goodtitle: "艾伦 Y700平板电脑12寸超薄智能wifi二合一10新款高清三星屏吃鸡游戏",
            goodprice: "10.00",
            goodzprice: "960.00"
        }, {
            goodsis: "7",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
            goodtitle: "一品玉丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
            goodprice: "1689.00",
            goodzprice: "2400.00"
        }, {
            goodsis: "8",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
            goodtitle: "匡威实木衣柜",
            goodprice: "6590.00",
            goodzprice: "9360.00"
        }, {
            goodsis: "9",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
            goodtitle: "一品玉丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
            goodprice: "1689.00",
            goodzprice: "2400.00"
        }, {
            goodsis: "10",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097011644.jpg",
            goodtitle: "海飞丝Razer/雷蛇 北海巨妖专业版V2 Kraken Pro 电竞游戏耳麦 耳机",
            goodprice: "236.00",
            goodzprice: "360.00"
        }, {
            goodsis: "11",
            goodurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536605332768.jpg",
            goodtitle: "艾伦 Y700平板电脑12寸超薄智能wifi二合一10新款高清三星屏吃鸡游戏",
            goodprice: "10.00",
            goodzprice: "960.00"
        }, {
            goodsis: "12",
            goodurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
            goodtitle: "一品玉丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
            goodprice: "1689.00",
            goodzprice: "2400.00"
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
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg",
            goodtitle: "合生元Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
            goodprice: "7700.00",
            goodzprice: "600.00",
        }, {
            goodid: "2",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
            goodtitle: "喜瑞新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
            goodprice: "233.00",
            goodzprice: "279.00",
        }, {
            goodid: "3",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102753231.jpg",
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
        hotgoods: [{
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224435682.jpg",
            goodtitle: "宝姿美宝莲 顺滑恒久眉笔流畅线条 利落型眉 可长久持妆 新品上市 流畅线条 利落型眉 长效持妆",
            goodprice: "100",
            goodtype: "3",
            gooduse: "3",
            goodbrand: "1"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224263857.jpg",
            goodtitle: "宝姿美宝莲 宝蓓爱炫彩护唇膏 润唇膏 波普风 保湿滋润 显色丰润 一扫唇色暗沉 卖萌必备",
            goodprice: "100",
            goodtype: "3",
            gooduse: "1",
            goodbrand: "2"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224291051.jpg",
            goodtitle: "宝姿美宝莲宝蓓护唇膏 宝贝护唇膏 润唇膏 唇彩口红保湿 滋润",
            goodprice: "100",
            goodtype: "3",
            gooduse: "5",
            goodbrand: "3"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224320245.jpg",
            goodtitle: "宝姿Maybelline/美宝莲净澈多效卸妆水清爽型 舒缓 深层清洁 舒缓 补水 深层清洁 卸妆",
            goodprice: "100",
            goodtype: "2",
            gooduse: "1",
            goodbrand: "4"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224493829.jpg",
            goodtitle: "小米宝莲 透净瞬洁净妆乳 120ml 卸妆乳 卸妆液卸妆无残留专柜正品 安全温和 彻底清洁 水润清爽",
            goodprice: "100",
            goodtype: "1",
            gooduse: "3",
            goodbrand: "5"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489104977765.jpg",
            goodtitle: "皮克朋一叶子去角质去死皮膏啫喱面部温和祛黑头全身温和补水凝胶磨砂膏 新鲜护肤 植物护肤 去除角质 光...",
            goodprice: "108",
            goodtype: "1",
            gooduse: "2",
            goodbrand: "6"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105021484.jpg",
            goodtitle: "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
            goodprice: "60",
            goodtype: "1",
            gooduse: "1",
            goodbrand: "7"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105021484.jpg",
            goodtitle: "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
            goodprice: "60",
            goodtype: "1",
            gooduse: "2",
            goodbrand: "6"
        }, {
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224351677.jpg",
            goodtitle: "宝姿美宝莲 色秀指甲油 糖果色 专业彩妆美甲 专柜正品 绚丽色彩 多色可选",
            goodprice: "100",
            goodtype: "3",
            gooduse: "2",
            goodbrand: "5"
        }, {
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
        }, {
            goodid: "38",
            goodurls: "https://x.dscmall.cn/storage/images/202201/thumb_img/1279_copy_0_thumb_G_1642458971157.jpg",
            goodtitle: "测试1",
            goodprice: "68.00",
            sales: "0", //售出
        }, {
            goodid: "39",
            goodurls: "https://x.dscmall.cn/storage/images/202108/thumb_img/0_thumb_G_1630270465116.jpg",
            goodtitle: " 测试堂鼠商品",
            goodprice: "0.01",
            sales: "3", //售出
        }, {
            goodid: "40",
            goodurls: "https://x.dscmall.cn/storage/images/202103/thumb_img/0_thumb_G_1615502729536.jpg",
            goodtitle: "测试库存",
            goodprice: "0.01",
            sales: "1", //售出
        }, {
            goodid: "41",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169118213.jpg",
            goodtitle: "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
            goodprice: "15.90",
            sales: "1", //售出
        }, {
            goodid: "42",
            goodurls: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490224291051.jpg",
            goodtitle: "宝姿美宝莲宝蓓护唇膏 宝贝护唇膏 润唇膏 唇彩口红保湿 滋润",
            goodprice: "100.00",
            sales: "0", //售出
        }, {
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
        // 女装数据
        girlclothes: [
            // 连衣裙
            [{
                goodid: "50",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169118805.jpg",
                },
                goodtitle: "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
                goodprice: "19.08",
            }, {
                goodid: "51",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
                },
                goodtitle: "得听格子衬衫女长袖2020秋季新款小清新韩版宽松百搭学生春秋装纯棉衬衫大码外套上衣女 天蓝色 M（1",
                goodprice: "19.08",
            }, {
                goodid: "52",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169186175.jpg",
                },
                goodtitle: "韩都衣舍2017春装新款女装春款拼接喇叭长袖连衣裙中长款时尚韩版 领券立减/单件包邮/七天无理由退换",
                goodprice: "19.08",
            }, {
                goodid: "53",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169030833.jpg",
                },
                goodtitle: "韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素",
                goodprice: "19.08",
            }, {
                goodid: "54",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169216444.jpg",
                },
                goodtitle: "韩都衣舍2016新款秋冬款长袖连衣裙宽松学生冬季内搭打底裙子韩版 领券下单立减/单件包邮/先拍先发货！",
                goodprice: "19.08",
            }, {
                goodid: "55",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169250846.jpg",
                },
                goodtitle: "韩都衣舍秋冬喇叭长袖针织衫毛衣女套头宽松纯色百搭学生韩版打底 领券下单立减/单件包邮/先拍先发货！",
                goodprice: "19.08",
            }],
            // 雷斯
            [{
                goodid: "56",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169151126.jpg",
                },
                goodtitle: "韩都衣舍春季韩国ulzzang连帽卫衣女套头宽松百搭学生韩版潮bf风 领券下单立减/单件包邮/先拍先发货！",
                goodprice: "19.08",
            }, {
                goodid: "57",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174894779.jpg",
                },
                goodtitle: "2017韩版女装夏装新款A字宽松松紧腰印花连衣裙DT7039乾 舒适松紧腰 A字版型 时尚印花",
                goodprice: "19.08",
            }],
            // T恤
            [{
                goodid: "53",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169030833.jpg",
                },
                goodtitle: "韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素",
                goodprice: "19.08",
            }, {
                goodid: "54",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169216444.jpg",
                },
                goodtitle: "韩都衣舍2016新款秋冬款长袖连衣裙宽松学生冬季内搭打底裙子韩版 领券下单立减/单件包邮/先拍先发货！",
                goodprice: "19.08",
            }],
            // 半身裙
            [{
                goodid: "54",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169216444.jpg",
                },
                goodtitle: "韩都衣舍2016新款秋冬款长袖连衣裙宽松学生冬季内搭打底裙子韩版 领券下单立减/单件包邮/先拍先发货！",
                goodprice: "19.08",
            }, {
                goodid: "50",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169118805.jpg",
                },
                goodtitle: "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
                goodprice: "19.08",
            }, {
                goodid: "51",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
                },
                goodtitle: "得听格子衬衫女长袖2020秋季新款小清新韩版宽松百搭学生春秋装纯棉衬衫大码外套上衣女 天蓝色 M（1",
                goodprice: "19.08",
            }],
            // 休闲裤
            [{
                goodid: "55",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169250846.jpg",
                },
                goodtitle: "韩都衣舍秋冬喇叭长袖针织衫毛衣女套头宽松纯色百搭学生韩版打底 领券下单立减/单件包邮/先拍先发货！",
                goodprice: "19.08",
            }]
        ],

        // 男装数据
        boyclothes: [
            // T恤
            [{
                goodid: "58",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174414186.jpg",
                },
                goodtitle: "康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生",
                goodprice: "94.8",
            }, {
                goodid: "59",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174303715.jpg",
                },
                goodtitle: "YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购",
                goodprice: "94.8",
            }],
            // 裤子
            [{
                goodid: "60",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174208112.jpg",
                },
                goodtitle: "金利来森马夹克 2016冬装新款男士飞行夹克贴布绣立领休闲外套韩版潮流",
                goodprice: "94.8",
            }],
            // 休闲裤
            [{
                goodid: "59",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174303715.jpg",
                },
                goodtitle: "YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购",
                goodprice: "94.8",
            }]
        ],

        // 服饰配件数据
        peijian: [
            // 配饰
            [{
                goodid: "61",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173894937.jpg",
                },
                goodtitle: "金奥力红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情",
                goodprice: "45.60",
            }, {
                goodid: "62",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
                },
                goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
                goodprice: "45.60",
            }, {
                goodid: "63",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
                },
                goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
                goodprice: "45.60",
            }, {
                goodid: "64",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
                },
                goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
                goodprice: "45.60",
            }, {
                goodid: "65",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
                },
                goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
                goodprice: "45.60",
            }, ],
            // 棒球帽
            [{
                goodid: "61",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
                },
                goodtitle: "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
                goodprice: "219.00",
            }],
            // 遮阳帽
            [{
                goodid: "64",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
                },
                goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
                goodprice: "45.60",
            }, {
                goodid: "65",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
                },
                goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
                goodprice: "45.60",
            }]
        ],

        // 内衣数据
        neiyi: [
            // 内衣配件
            [{
                goodid: "66",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174547044.jpg",
                },
                goodtitle: "狼爪贝妍夏季薄款女士睡衣性感V领女南韩丝家居服运动可外穿中袖套装",
                goodprice: "165.60",
            }, {
                goodid: "67",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489099987431.jpg",
                },
                goodtitle: "爆款 爱慕经典KiKi裤轻薄无痕女士中腰三角内裤多色内衣A",
                goodprice: "165.60",
            }, {
                goodid: "68",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174469373.jpg",
                },
                goodtitle: "兰蔻Calvin Klein Underwear/CK 2017春夏新款 男士平角内裤NU8638 初上市价格290元",
                goodprice: "165.60",
            }, {
                goodid: "69",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174663688.jpg",
                },
                goodtitle: "立邦都市丽人文胸旗舰店 林志玲有钢圈少女小胸文胸 聚拢 调整型内衣V 官方正品 赠运费险 收藏有礼 全国包邮",
                goodprice: "165.60",
            }, {
                goodid: "70",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174703131.jpg",
                },
                goodtitle: "李宁都市丽人一片式无痕文胸厚杯性感聚拢舒适光面胸罩纯色商场同款 2016新品明星同款舒适Q软托无痕体验",
                goodprice: "165.60",
            }, {
                goodid: "71",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100049187.jpg",
                },
                goodtitle: "Five Plus2017新品 加一尚品无痕内衣女 前扣无钢圈薄款交叉美背文胸M37 厚杯+薄杯 无钢圈 前扣 美背 上薄下厚",
                goodprice: "165.60",
            }, {
                goodid: "72",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100653308.jpg",
                },
                goodtitle: "新百伦樱尚雅一片式无痕无钢圈文胸聚拢调整型性感小胸罩厚薄款少女内衣 2件减5元 不聚拢包退 送运费险",
                goodprice: "165.60",
            }, {
                goodid: "73",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100914563.jpg",
                },
                goodtitle: "ELLE HOME舒适睡眠文胸罩无痕薄款运动内衣无钢圈女士调整型背心式少女聚拢 赠运费险 无痕无钢圈 舒适聚拢",
                goodprice: "165.60",
            }, ],
            // 女士内裤
            [{
                goodid: "73",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174508974.jpg",
                },
                goodtitle: "Masentek迷瞳盒装女士内裤莫代尔透气少女三角裤夏季性感低腰无痕大码裤头 5条盒装 莫代尔面料 小内裤 窄边三角裤",
                goodprice: "165.60",
            }, {
                goodid: "67",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489099987431.jpg",
                },
                goodtitle: "爆款 爱慕经典KiKi裤轻薄无痕女士中腰三角内裤多色内衣A",
                goodprice: "165.60",
            }],
            // 丝袜
            [{
                goodid: "70",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174703131.jpg",
                },
                goodtitle: "李宁都市丽人一片式无痕文胸厚杯性感聚拢舒适光面胸罩纯色商场同款 2016新品明星同款舒适Q软托无痕体验",
                goodprice: "165.60",
            }, {
                goodid: "71",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100049187.jpg",
                },
                goodtitle: "Five Plus2017新品 加一尚品无痕内衣女 前扣无钢圈薄款交叉美背文胸M37 厚杯+薄杯 无钢圈 前扣 美背 上薄下厚",
                goodprice: "165.60",
            }, {
                goodid: "72",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489100653308.jpg",
                },
                goodtitle: "新百伦樱尚雅一片式无痕无钢圈文胸聚拢调整型性感小胸罩厚薄款少女内衣 2件减5元 不聚拢包退 送运费险",
                goodprice: "165.60",
            }]
        ],

        // 运动户外数据
        sport: [
            // 跑步
            [{
                goodid: "74",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
                },
                goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
                goodprice: "165.60",
            }, {
                goodid: "75",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
                },
                goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
                goodprice: "1000",
            }, {
                goodid: "76",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
                },
                goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
                goodprice: "1000",
            }, {
                goodid: "77",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
                },
                goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
                goodprice: "1000",
            }, {
                goodid: "78",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
                },
                goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
                goodprice: "1000",
            }, {
                goodid: "79",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
                },
                goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
                goodprice: "158",
            }],
            // 舞蹈
            [{
                goodid: "78",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
                },
                goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
                goodprice: "1000",
            }, {
                goodid: "79",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
                },
                goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
                goodprice: "158",
            }],
            // 瑜伽
            [{
                goodid: "75",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
                },
                goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
                goodprice: "1000",
            }, {
                goodid: "76",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
                },
                goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
                goodprice: "1000",
            }]
        ],

        // 随手购数据
        suibian: [{
            goodid: "80",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173894937.jpg",
            },
            goodtitle: "金奥力红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情",
            goodprice: "45.60",

        }, {
            goodid: "81",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            },
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodprice: "45.60",
        }, {
            goodid: "82",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
            },
            goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
            goodprice: "45.60",
        }, {
            goodid: "83",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
            },
            goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
            goodprice: "45.60",
        }, {
            goodid: "84",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
            },
            goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
            goodprice: "45.60",
        }, {
            goodid: "85",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
            },
            goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
            goodprice: "165.60",
        }, {
            goodid: "86",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            },
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodprice: "1000",
        }, {
            goodid: "87",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
            },
            goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
            goodprice: "1000",
        }, {
            goodid: "88",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
            },
            goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
            goodprice: "1000",
        }, {
            goodid: "89",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
            },
            goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
            goodprice: "1000",
        }, {
            goodid: "90",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
            },
            goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
            goodprice: "158",
        }, {
            goodid: "91",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            },
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodprice: "45.60",
        }, {
            goodid: "92",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
            },
            goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
            goodprice: "45.60",
        }, {
            goodid: "93",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
            },
            goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
            goodprice: "45.60",
        }, {
            goodid: "94",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
                showurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
                picsurl: [
                    "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
                ]
            },
            goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
            goodprice: "45.60",
            goodzprice: "38.00",
            goodtype: "男装，女装，内衣",
            goodcount: "1",
            shopname: "创造旗舰店",
        }, {
            goodid: "95",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
            },
            goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
            goodprice: "165.60",
        }, {
            goodid: "96",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            },
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodprice: "1000",
        }, {
            goodid: "97",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
            },
            goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
            goodprice: "1000",
        }, {
            goodid: "98",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
            },
            goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
        }, {
            goodid: "99",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
            },
            goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
            goodprice: "1000",
        }, {
            goodid: "100",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
            },
            goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
            goodprice: "158",
        }, ]
    },


    // 家用电器
    applianceData: {
        // 热门推荐数据
        hot: [
            // 新品首发
            [{
                goodid: "101",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }, {
                goodid: "102",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "103",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536539387616.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "280.00",
            }, {
                goodid: "104",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540810221.jpg",
                },
                goodtitle: "飞利浦空气净化器AC3252家用室内卧室除甲醛雾霾烟尘PM2.5办公室",
                goodprice: "2233.80",
            }, {
                goodid: "105",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536546954848.jpg",
                },
                goodtitle: " 美的 M1-L202B微波炉家用迷你智能多功能小型全自动平板式特价安",
                goodprice: "454.80",
            }, {
                goodid: "106",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }],
            // 热销排行
            [{
                goodid: "102",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "101",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }, {
                goodid: "104",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540810221.jpg",
                },
                goodtitle: "飞利浦空气净化器AC3252家用室内卧室除甲醛雾霾烟尘PM2.5办公室",
                goodprice: "2233.80",
            }, {
                goodid: "103",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536539387616.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "280.00",
            }, {
                goodid: "106",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "105",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536546954848.jpg",
                },
                goodtitle: " 美的 M1-L202B微波炉家用迷你智能多功能小型全自动平板式特价安",
                goodprice: "454.80",
            }],
            // 精品推荐
            [{
                goodid: "103",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536539387616.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "280.00",
            }, {
                goodid: "101",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }, {
                goodid: "102",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "106",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "105",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536546954848.jpg",
                },
                goodtitle: " 美的 M1-L202B微波炉家用迷你智能多功能小型全自动平板式特价安",
                goodprice: "454.80",
            }, {
                goodid: "104",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540810221.jpg",
                },
                goodtitle: "飞利浦空气净化器AC3252家用室内卧室除甲醛雾霾烟尘PM2.5办公室",
                goodprice: "2233.80",
            }, ],
            // 今日特价
            [{
                goodid: "106",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "105",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536546954848.jpg",
                },
                goodtitle: " 美的 M1-L202B微波炉家用迷你智能多功能小型全自动平板式特价安",
                goodprice: "454.80",
            }, {
                goodid: "104",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540810221.jpg",
                },
                goodtitle: "飞利浦空气净化器AC3252家用室内卧室除甲醛雾霾烟尘PM2.5办公室",
                goodprice: "2233.80",
            }, {
                goodid: "103",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536539387616.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "280.00",
            }, {
                goodid: "102",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg",
                },
                goodtitle: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goodprice: "120.00",
            }, {
                goodid: "101",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }]
        ],

        // 厨房电器数据        
        kitchen: [
            // 电饭煲
            [{
                goods_id: "101",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg"
                },
                goods_title: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goods_price: "379.00",
            }, {
                goods_id: "102",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg"
                },
                goods_title: "小米 米家IH电饭煲 小米智能家用wifi电饭锅3L手机控制 小米专卖店 正品授权",
                goods_price: "100.00",
            }, {
                goods_id: "103",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg"
                },
                goods_title: "苏泊尔（SUPOR）电饭煲家用IH加热4升L大容量2-5人智能预约球釜多功能蒸米饭电饭锅小柴火饭 S",
                goods_price: "529.00",
            }, {
                goods_id: "104",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175189731.jpg"
                },
                goods_title: "玛克家纺【12期免息】Panasonic/松下 SR-PE401-K 新品可变压力IH电饭煲4L 送豪华大礼",
                goods_price: "2299.00",
            }, {
                goods_id: "105",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/150025/18/1826/160157/5efc59d9E24ac5c67/0468574b944f4edb.jpg"
                },
                goods_title: "苏泊尔（SUPOR）电饭煲电饭锅5L大容量智能预约家用智能多功能煮饭锅3-4-6人特色蛋糕煲仔饭 现",
                goods_price: "249.00",
            }, {
                goods_id: "106",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/132173/38/6674/188372/5f32a7f0E83623b6a/f36c13d3e534550e.jpg"
                },
                goods_title: "苏泊尔（SUPOR）安全电压力锅 易用大面板 焖香节能煲 开盖收汁一键排压饭煲饭锅官方旗舰店特价家用",
                goods_price: "299.00",
            }, {
                goods_id: "107",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536546120383.jpg"
                },
                goods_title: "九阳豆浆机家用全自动多功能智能预约官方旗舰店3-4-5人免滤D268",
                goods_price: "499.00",
            }],
            // 电压力锅
            [{
                goods_id: "111",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/144960/17/6515/163247/5f446d44E4915b357/0741b8c5089004b1.jpg"
                },
                goods_title: "美的（Midea）电压力锅5升双胆电高压锅 一键排气 七段调压 开盖收汁 WQC50A5（李现推荐）",
                goods_price: "259.80",
            }, {
                goods_id: "112",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/134016/4/1040/200492/5ed5297cE4dd22b3d/dec0baa9b25581f2.jpg"
                },
                goods_title: "苏泊尔（SUPOR）电压力锅6升高压锅家用双胆多功能智能电高压锅煮电饭煲汤锅",
                goods_price: "319.00",
            }, {
                goods_id: "113",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg"
                },
                goods_title: "海尔（Haier）1.5匹 新一级能效省电 智能 自清洁 变频冷暖壁挂式卧室空调挂机 速享风 KFR",
                goods_price: "3399.00",
            }],
            // 豆浆机
            [{
                goods_id: "121",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/133212/38/7616/89755/5f3f62c6E92a5e4d2/6421cd03a11bf0f9.jpg"
                },
                goods_title: "美的（Midea ) 豆浆机高转速家用全自动多功能豆浆机无网易清洗安静低噪DJ10B-E103（李现",
                goods_price: "179.00",
            }, {
                goods_id: "122",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490147066965.jpg"
                },
                goods_title: "苏泊尔（SUPOR）豆浆机破壁免滤双层不锈钢机身家用多功能豆浆机搅拌机料理机DJ12B-P65",
                goods_price: "179.00",
            }, {
                goods_id: "123",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175270619.jpg"
                },
                goods_title: "梦特娇Joyoung/九阳 DJ13B-N621SG全自动豆浆机家用特价正品旗舰店智能 会做饭煲汤 易清洗 双层全钢 无网研磨",
                goods_price: "299.00",
            }],
            // 面包机
            [{
                goods_id: "131",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/121925/10/9874/183397/5f3c0ed0E86d96eb4/a9a55420b82130b9.jpg"
                },
                goods_title: "九阳（Joyoung）电饼铛魔法包迷你三明治早餐机轻食机华夫饼家用多功能双面加热吐司三明治机S-T1",
                goods_price: "399.00",
            }, {
                goods_id: "132",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/113202/28/14967/149485/5f3747c2E795251b1/e545e9446ba78fd2.jpg"
                },
                goods_title: "柏翠（petrus）烤面包机全自动三明治早餐机揉面和面多士炉家用多功能冰淇淋PE8860",
                goods_price: "359.00",
            }, {
                goods_id: "133",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/136701/21/7182/185568/5f3a3999Ee1709270/ee7d949e815b844e.jpg"
                },
                goods_title: "小熊（Bear）烤面包机多士炉三明治机电饼铛电热锅电火锅电蒸锅多功能早餐机 DSL-A13F1",
                goods_price: "349.00",
            }, {
                goods_id: "104",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175339477.jpg"
                },
                goods_title: "耐克Midea/美的 TLC2000面包机家用全自动智能多功能不锈钢机身触摸屏 逼格好物 钢化上盖 时尚触屏",
                goods_price: "299.00",
            }],
            // 咖啡机
            [{
                goods_id: "141",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/124559/20/5186/127155/5eeb104cE51c8ee13/3f15e98a0384fabf.jpg"
                },
                goods_title: "小熊（Bear）咖啡机 美式家用 0.7L全自动滴漏式小型泡茶煮咖啡壶 KFJ-A07V1",
                goods_price: "129.00",
            }, {
                goods_id: "142",
                goods_urls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/121290/34/3160/200435/5ecf257bE76d27e86/ea7fd7dc0db77022.jpg"
                },
                goods_title: "德颐 DE-180 一键花式咖啡 意式全自动咖啡机 家用电器商用办公室现磨豆自动奶泡系统 智能咖啡机",
                goods_price: "2498.00",
            }, {
                goods_id: "143",
                goods_urls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175311141.jpg"
                },
                goods_title: "摩托罗拉Donlim/东菱 DL-KF500S 咖啡机家用全半自动意式商用蒸汽式打奶泡 不锈钢机身 20帕进口泵浦 双温系统",
                goods_price: "499.00",
            }],
        ],

        // 大家电数据
        big: [
            // 平板电视
            [{
                goodid: "114",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536532312220.jpg",
                },
                goodtitle: "猫人Xiaomi/小米 小米电视4A 55英寸 4k超高清智能网络电视机 50 60",
                goodprice: "2399.00",
            }, {
                goodid: "115",
                goodurls: {
                    nowurl: "	https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490209464414.jpg",
                },
                goodtitle: "金士顿康佳kktv U65 65英寸4K超高清安卓智能网络平板led液晶电视机6070 4k超",
                goodprice: "10.00",
            }, {
                goodid: "116",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/146288/13/4159/153565/5f23baaaEda2c963a/c190a3dd7af7469e.jpg",
                },
                goodtitle: "小米全面屏电视 55英寸 E55X 4K超高清 HDR 内置小爱 2GB+8GB 教育电视 AI人工",
                goodprice: "1799.00",
            }, {
                goodid: "117",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/117388/12/13709/135183/5f242f55E8ee77445/d25dcca3a77ff00d.jpg",
                },
                goodtitle: "欧亚马山水 F7 5.1家庭影院音响套装电视客厅家用3d环绕组合音箱 电视k歌音响套装 家用 组合 重低音蓝牙",
                goodprice: "1999.00",
            }, {
                goodid: "118",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201909/thumb_img/925_thumb_G_1569533172825.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }, {
                goodid: "119",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175557366.jpg",
                },
                goodtitle: "欧亚马Hisense/海信 LED49EC270W 49吋液晶平板电视机网络wifi彩电50",
                goodprice: "254.80",
            }, {
                goodid: "120",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105386951.jpg",
                },
                goodtitle: "乔山Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款",
                goodprice: "3444.80",
            }],
            // 空调
            [{
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/140042/15/5805/81386/5f3bf6aaEa19bdff7/2e84d21364c34cee.jpg",
                },
                goodtitle: "格力（GREE）3匹 E风 定速冷暖 智能 大风量 立式圆柱客厅空调柜机KFR-72LW/(7253",
                goodprice: "5999.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/147513/39/5756/67219/5f3ba607E51d872a3/e2802d4980eb5f72.jpg",
                },
                goodtitle: "康佳（KONKA）1匹 壁挂式空调 快速冷暖 定频 空调挂机 隐藏显示屏LED （纯铜管）KFR-2",
                goodprice: "1399.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/127699/24/10697/131799/5f435270Ed75befd7/8c489f44ab243c5f.jpg",
                },
                goodtitle: "奥克斯 (AUX) 3匹 一级能效 变频冷暖 智能 空调立式 倾城立柜式空调柜机(KFR-72LW/",
                goodprice: "5299.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/144967/28/5829/53990/5f3b6a3cE8c401301/48038d2f9fed483d.jpg",
                },
                goodtitle: "美的(Midea)513升 十字对开门家用冰箱四开门风冷无霜双变频 一级能效WIFI智能 抗菌保鲜 ",
                goodprice: "5079.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105497655.jpg",
                },
                goodtitle: "皮克朋Haier/海尔 KFR-33GW/10EBBAL13U1 1.5匹智能壁挂式家用空调挂机 智能操控 快速冷暖 送装一体 ",
                goodprice: "6888.00",
            }, ],
            // 冰箱
            [{
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/133609/36/3966/136896/5f057ae2E43635df2/a3e4833b0df7cf73.jpg",
                },
                goodtitle: "容声(Ronshen) 529升 对开门冰箱 风冷无霜 变频 纤薄 大容量 节能静音 双开门冰箱 B",
                goodprice: "3099.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175463945.jpg",
                },
                goodtitle: "诺基亚SIEMENS/西门子 KA92NV66TI 双开门双门对开门家用变频无霜电冰箱",
                goodprice: "7999.00",
            }, ],
            // 洗衣机
            [{
                goodid: "114",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536535600478.jpg",
                },
                goodtitle: "美的MD100V71WDX 10公斤变频滚筒洗衣机全自动家用洗烘一体",
                goodprice: "2300.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/118060/15/15212/126944/5f3c8a42E760cf94b/c82379c285712787.jpg",
                },
                goodtitle: "美的（Midea）滚筒洗衣机全自动 10公斤变频除螨洗烘一体 双蒸汽恒温洗 祛味空气洗 深层除螨",
                goodprice: "3099.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/142686/36/6495/184483/5f43f3deEc03560cf/4067a2cff0f05841.jpg",
                },
                goodtitle: "小天鹅（LittleSwan）洗衣机滚筒全自动 10公斤kg洗烘一体机带烘干纳米银离子除菌智能大容量",
                goodprice: "3299.00",
            }, {
                goodid: "114",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536534726865.jpg",
                },
                goodtitle: "BH (必艾奇)Haier/海尔 EG10014B39GU1 10公斤kg蓝晶变频滚筒全自动洗衣机",
                goodprice: "2000.00",
            }, ],
            // 家庭影院
            [],
        ],

        // 个护健康
        person: [
            // 按摩椅
            [{
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201810/thumb_img/948_thumb_G_1539998506787.jpg",
                },
                goodtitle: "狼爪贝妍夏季薄款女士睡衣性感V领女南韩丝家居服运动可外穿中袖套装",
                goodprice: "165.60",
            }, {
                goodid: "122",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209956282.jpg",
                },
                goodtitle: "爆款 爱慕经典KiKi裤轻薄无痕女士中腰三角内裤多色内衣A",
                goodprice: "165.60",
            }, {
                goodid: "123",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209865656.jpg",
                },
                goodtitle: "兰蔻Calvin Klein Underwear/CK 2017春夏新款 男士平角内裤NU8638 初上市价格290元",
                goodprice: "165.60",
            }, {
                goodid: "124",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209796384.jpg",
                },
                goodtitle: "立邦都市丽人文胸旗舰店 林志玲有钢圈少女小胸文胸 聚拢 调整型内衣V 官方正品 赠运费险 收藏有礼 全国包邮",
                goodprice: "165.60",
            }, {
                goodid: "125",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204113895.jpg",
                },
                goodtitle: "李宁都市丽人一片式无痕文胸厚杯性感聚拢舒适光面胸罩纯色商场同款 2016新品明星同款舒适Q软托无痕体验",
                goodprice: "165.60",
            }, {
                goodid: "126",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209823294.jpg",
                },
                goodtitle: "Five Plus2017新品 加一尚品无痕内衣女 前扣无钢圈薄款交叉美背文胸M37 厚杯+薄杯 无钢圈 前扣 美背 上薄下厚",
                goodprice: "165.60",
            }, {
                goodid: "127",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209897184.jpg",
                },
                goodtitle: "新百伦樱尚雅一片式无痕无钢圈文胸聚拢调整型性感小胸罩厚薄款少女内衣 2件减5元 不聚拢包退 送运费险",
                goodprice: "165.60",
            }],
            // 剃须刀
            [{
                    goodid: "121",
                    goodurls: {
                        nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204599776.jpg",
                    },
                    goodtitle: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
                    goodprice: "649.00",
                },
                {
                    goodid: "127",
                    goodurls: {
                        nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209897184.jpg",
                    },
                    goodtitle: "新百伦樱尚雅一片式无痕无钢圈文胸聚拢调整型性感小胸罩厚薄款少女内衣 2件减5元 不聚拢包退 送运费险",
                    goodprice: "165.60",
                }, {
                    goodid: "121",
                    goodurls: {
                        nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204599776.jpg",
                    },
                    goodtitle: "斯伯丁飞利浦剃须刀S5091 男士充电式电动剃须刀刮胡刀胡须刀三刀头正品 一机三用 多效理容 剃须 洁面 修剪鼻毛",
                    goodprice: "649.00",
                },
            ],
            // 脱毛器
            [{
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204629634.jpg",
                },
                goodtitle: "松下电器飞科FR5222剃毛机毛球修剪器充电式衣服去球器吸打脱毛器除剃毛器 送备用刀头强劲去球不伤衣物",
                goodprice: "35.00",
            }, {
                goodid: "125",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204113895.jpg",
                },
                goodtitle: "李宁都市丽人一片式无痕文胸厚杯性感聚拢舒适光面胸罩纯色商场同款 2016新品明星同款舒适Q软托无痕体验",
                goodprice: "165.60",
            }, {
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204629634.jpg",
                },
                goodtitle: "松下电器飞科FR5222剃毛机毛球修剪器充电式衣服去球器吸打脱毛器除剃毛器 送备用刀头强劲去球不伤衣物",
                goodprice: "35.00",
            }],
            // 口腔护理
            [{
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204190470.jpg",
                },
                goodtitle: "七匹狼Philips/飞利浦齿间清洁工具可充电 HX8255/02",
                goodprice: "769.00",
            }, {
                goodid: "124",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209796384.jpg",
                },
                goodtitle: "立邦都市丽人文胸旗舰店 林志玲有钢圈少女小胸文胸 聚拢 调整型内衣V 官方正品 赠运费险 收藏有礼 全国包邮",
                goodprice: "165.60",
            }, {
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204190470.jpg",
                },
                goodtitle: "七匹狼Philips/飞利浦齿间清洁工具可充电 HX8255/02",
                goodprice: "769.00",
            }],
            // 理发器
            [{
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204421971.jpg",
                },
                goodtitle: "华帝正品康夫专业成人理发器电动充电电推剪静音理发工具电推子剃头刀",
                goodprice: "129.00",
            }, {
                goodid: "122",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209956282.jpg",
                },
                goodtitle: "爆款 爱慕经典KiKi裤轻薄无痕女士中腰三角内裤多色内衣A",
                goodprice: "165.60",
            }, {
                goodid: "121",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204421971.jpg",
                },
                goodtitle: "华帝正品康夫专业成人理发器电动充电电推剪静音理发工具电推子剃头刀",
                goodprice: "129.00",
            }]
        ],

        // 五金家装数据
        five: [
            // 电动工具
            [{
                goodid: "128",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490205156678.jpg",
                },
                goodtitle: "喜瑞闽豹家用工具套装 五金工具箱 电工木工德国维修工具组套修理组合 质量稳定 坚固耐用 彩套包装 可团购定制",
                goodprice: "454.80",
            }, {
                goodid: "129",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209988231.jpg",
                },
                goodtitle: "迪士尼东成角磨机S1M-FF03/04-100A手提砂轮切割机角向磨光机抛光机东城",
                goodprice: "454.80",
            }, {
                goodid: "130",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210205198.jpg",
                },
                goodtitle: "戴尔龙韵电链锯 大功率自喷油手提电锯伐木锯家用木工锯链条电动工具 免费换新 3年质保 安全耐用 3C认证",
                goodprice: "454.80",
            }, {
                goodid: "131",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210428229.jpg",
                },
                goodtitle: "海飞丝锐奔水钻机手持式钻孔机混泥土打孔钻眼机大功率空调开孔两用电钻 力大威猛 工业级 全铜电机 带保护离合",
                goodprice: "454.80",
            }, {
                goodid: "132",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210364947.jpg",
                },
                goodtitle: "钙尔奇醒狮 多功能手提木工刨家用轻型大功率电刨子电动工具套装压刨机",
                goodprice: "454.80",
            }, {
                goodid: "133",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210322574.jpg",
                },
                goodtitle: "ELLE HOME龙韵电动扳手 锂电扳手 无刷电机充电扳手 扭力冲击板手 无刷电机 档位调节 双档定制",
                goodprice: "454.80",
            }, {
                goodid: "134",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210232345.jpg",
                },
                goodtitle: "Dior百锐3.6V电动螺丝刀迷你电起子充电式小型电改锥锂电变形电批包邮 3.6V双向控制 带灯照明 可变型",
                goodprice: "454.80",
            }],
            // 仪表
            [{
                goodid: "134",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490205223025.jpg",
                },
                goodtitle: "养生堂希玛 红外线测温仪手持式工业红外测温枪高精度高温电子温度计 配硬盒 送31件套螺丝批 30天只换不修",
                goodprice: "146.00",
            }, {
                goodid: "132",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210364947.jpg",
                },
                goodtitle: "钙尔奇醒狮 多功能手提木工刨家用轻型大功率电刨子电动工具套装压刨机",
                goodprice: "454.80",
            }, {
                goodid: "133",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210322574.jpg",
                },
                goodtitle: "ELLE HOME龙韵电动扳手 锂电扳手 无刷电机充电扳手 扭力冲击板手 无刷电机 档位调节 双档定制",
                goodprice: "454.80",
            }, {
                goodid: "134",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210232345.jpg",
                },
                goodtitle: "Dior百锐3.6V电动螺丝刀迷你电起子充电式小型电改锥锂电变形电批包邮 3.6V双向控制 带灯照明 可变型",
                goodprice: "454.80",
            }],
            // 水槽
            [{
                goodid: "134",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490205189180.jpg",
                },
                goodtitle: "西门子JOMOO 厨房水槽套餐双槽304不锈钢洗碗池 洗菜盆加厚水盆一体水槽 官方正品 赠运费险 五年联保 领券更实惠",
                goodprice: "899.00",
            }, {
                goodid: "129",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209988231.jpg",
                },
                goodtitle: "迪士尼东成角磨机S1M-FF03/04-100A手提砂轮切割机角向磨光机抛光机东城",
                goodprice: "454.80",
            }, {
                goodid: "130",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210205198.jpg",
                },
                goodtitle: "戴尔龙韵电链锯 大功率自喷油手提电锯伐木锯家用木工锯链条电动工具 免费换新 3年质保 安全耐用 3C认证",
                goodprice: "454.80",
            }, {
                goodid: "131",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490210428229.jpg",
                },
                goodtitle: "海飞丝锐奔水钻机手持式钻孔机混泥土打孔钻眼机大功率空调开孔两用电钻 力大威猛 工业级 全铜电机 带保护离合",
                goodprice: "454.80",
            }]
        ],

        // 生活电器
        life: [
            // 电风扇
            [{
                goodid: "135",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536532312220.jpg",
                },
                goodtitle: "猫人Xiaomi/小米 小米电视4A 55英寸 4k超高清智能网络电视机 50 60",
                goodprice: "2399.00",
            }, {
                goodid: "136",
                goodurls: {
                    nowurl: "	https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490209464414.jpg",
                },
                goodtitle: "金士顿康佳kktv U65 65英寸4K超高清安卓智能网络平板led液晶电视机6070 4k超",
                goodprice: "10.00",
            }, {
                goodid: "137",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536541932871.jpg",
                },
                goodtitle: "小米全面屏电视 55英寸 E55X 4K超高清 HDR 内置小爱 2GB+8GB 教育电视 AI人工",
                goodprice: "1799.00",
            }, {
                goodid: "138",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536538994065.jpg",
                },
                goodtitle: "欧亚马山水 F7 5.1家庭影院音响套装电视客厅家用3d环绕组合音箱 电视k歌音响套装 家用 组合 重低音蓝牙",
                goodprice: "1999.00",
            }, {
                goodid: "139",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204803359.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }, {
                goodid: "140",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175557366.jpg",
                },
                goodtitle: "欧亚马Hisense/海信 LED49EC270W 49吋液晶平板电视机网络wifi彩电50",
                goodprice: "254.80",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105386951.jpg",
                },
                goodtitle: "乔山Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款",
                goodprice: "3444.80",
            }],
            // 冷风扇
            [{
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209649059.jpg",
                },
                goodtitle: "宏基康佳电风扇塔扇家用塔式落地扇静音无叶风扇定时扇遥控立式大厦扇 换季活动 晒图奖励30元 到手119元起",
                goodprice: "179.00",
            }, {
                goodid: "139",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204803359.jpg",
                },
                goodtitle: "猫人Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安",
                goodprice: "454.80",
            }, {
                goodid: "140",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175557366.jpg",
                },
                goodtitle: "欧亚马Hisense/海信 LED49EC270W 49吋液晶平板电视机网络wifi彩电50",
                goodprice: "254.80",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105386951.jpg",
                },
                goodtitle: "乔山Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款",
                goodprice: "3444.80",
            }],
            // 净化器
            [{
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201810/thumb_img/935_thumb_G_1539998561723.jpg",
                },
                goodtitle: "奔腾加湿器家用静音卧室大容量办公室桌面加湿器迷你空气香薰机",
                goodprice: "150.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540228512.jpg",
                },
                goodtitle: "亚都纯净型无雾加湿器SZK-J030家用卧室静音孕妇婴儿办公室内增湿",
                goodprice: "450.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536541556112.jpg",
                },
                goodtitle: "Bear/小熊 JSQ-A30Q1加湿器空气净化香薰机3L家用静音办公室卧室",
                goodprice: "100.00",
            }, ],
            // 加湿器
            [{
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536539387249.jpg",
                },
                goodtitle: "容声空气加湿器大容量大雾量工业商用烟草大型大功率蔬菜水果保鲜",
                goodprice: "280.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201810/thumb_img/935_thumb_G_1539998561723.jpg",
                },
                goodtitle: "奔腾加湿器家用静音卧室大容量办公室桌面加湿器迷你空气香薰机",
                goodprice: "150.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204884535.jpg",
                },
                goodtitle: "途牛松下空气净化器家用静音除雾霾甲醛PM2.5异味烟味 卧室氧吧PXF35C 质保两年 纳米水离子 适用20平米内房间",
                goodprice: "1299.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536538483354.jpg",
                },
                goodtitle: "小熊加湿器家用静音办公室卧室空调房空气净化大容量小型香薰喷雾",
                goodprice: "90.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536539200990.jpg",
                },
                goodtitle: "智米小米生态链智能家用卧室孕妇婴儿大容量杀菌超声波加湿器",
                goodprice: "755.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540228512.jpg",
                },
                goodtitle: "亚都纯净型无雾加湿器SZK-J030家用卧室静音孕妇婴儿办公室内增湿",
                goodprice: "450.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536541556112.jpg",
                },
                goodtitle: "Bear/小熊 JSQ-A30Q1加湿器空气净化香薰机3L家用静音办公室卧室",
                goodprice: "100.00",
            }, ],
            // 扫地机器人
            [{
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204958315.jpg",
                },
                goodtitle: "她他/tata美国iRobot529经典组合扫地机器人家用全自动智能擦地机国行热卖 告别手动 每日净尘 咨询送配件",
                goodprice: "2999.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201810/thumb_img/935_thumb_G_1539998561723.jpg",
                },
                goodtitle: "奔腾加湿器家用静音卧室大容量办公室桌面加湿器迷你空气香薰机",
                goodprice: "150.00",
            }, {
                goodid: "141",
                goodurls: {
                    nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490204884535.jpg",
                },
                goodtitle: "途牛松下空气净化器家用静音除雾霾甲醛PM2.5异味烟味 卧室氧吧PXF35C 质保两年 纳米水离子 适用20平米内房间",
                goodprice: "1299.00",
            }]
        ],

        // 随手购
        suibian: [{
            goodid: "142",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173894937.jpg",
            },
            goodtitle: "金奥力红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情",
            goodprice: "45.60",
        }, {
            goodid: "143",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            },
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodprice: "45.60",
        }, {
            goodid: "145",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
            },
            goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
            goodprice: "45.60",
        }, {
            goodid: "146",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
            },
            goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
            goodprice: "45.60",
        }, {
            goodid: "147",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
            },
            goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
            goodprice: "45.60",
        }, {
            goodid: "148",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
            },
            goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
            goodprice: "165.60",
        }, {
            goodid: "149",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            },
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodprice: "1000",
        }, {
            goodid: "150",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
            },
            goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
            goodprice: "1000",
        }, {
            goodid: "151",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
            },
            goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
            goodprice: "1000",
        }, {
            goodid: "152",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218770962.jpg",
            },
            goodtitle: "七匹狼哑铃男士钢制家用电镀哑铃杠铃25 40公斤 纯钢哑铃盒装 健身器材 纯钢哑铃杠铃送哑铃架",
            goodprice: "1000",
        }, {
            goodid: "153",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218732576.jpg",
            },
            goodtitle: "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
            goodprice: "158",
        }, {
            goodid: "154",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
            },
            goodtitle: "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
            goodprice: "45.60",
        }, {
            goodid: "155",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg",
            },
            goodtitle: "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
            goodprice: "45.60",
        }, {
            goodid: "156",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg",
            },
            goodtitle: "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
            goodprice: "45.60",
        }, {
            goodid: "157",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg",
            },
            goodtitle: "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
            goodprice: "45.60",
        }, {
            goodid: "158",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490915538739.jpg",
            },
            goodtitle: "阿迪达斯男鞋ZX750三叶草zx700跑",
            goodprice: "165.60",
        }, {
            goodid: "159",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218873837.jpg",
            },
            goodtitle: "三星Nike 耐克官方 PRO COOL COMP LONG-SLEEVE 男子训练紧身衣703088",
            goodprice: "1000",
        }, {
            goodid: "160",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
            },
            goodtitle: "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
            goodprice: "1000",
        }, {
            goodid: "161",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218667022.jpg",
            },
            goodtitle: "皮克朋马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤",
            goodprice: "1000",
        }, ]
    },




    // 鞋靴箱包
    shoesData: {
        // 热销榜
        hot: [{
            goodid: "162",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536617317847.jpg",
            },
            goodtitle: "WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004",
            goodprice: "454.80",
            cv1: 1
        }, {
            goodid: "163",
            goodurls: {
                nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/118454/38/16337/121880/5f475aafEaf198729/56c5253eff2e5bf7.jpg",
            },
            goodtitle: "爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/29英寸大容量学生密码箱皮箱登机箱 瑰",
            goodprice: "454.80",
            cv1: 2
        }, {
            goodid: "164",
            goodurls: {
                nowurl: "https://img14.360buyimg.com/n1/s300x300_jfs/t1/92852/14/12983/89555/5e511d37Ed34136d1/da7534a3e88bfd14.jpg",
            },
            goodtitle: "小米（MI）拉杆箱青春版旅行箱20/24寸男女箱万向轮密码箱轻巧便携出差旅行拉杆箱 黄色 20英寸",
            goodprice: "454.80",
            cv1: 3

        }, {
            goodid: "165",
            goodurls: {
                nowurl: "https://img.alicdn.com/imgextra/i1/2206477550426/O1CN01eB1YwL1F19JC61vWl_!!0-item_pic.jpg_300x300.jpg",
            },
            goodtitle: "COACH/蔻驰女士拼色HUTTON钱包 灰褐姜色",
            goodprice: "454.80",
            cv1: 4

        }, {
            goodid: "166",
            goodurls: {
                nowurl: "https://img.alicdn.com/imgextra/i2/2206477550426/O1CN01yl6HOr1F19JA5n0qK_!!0-item_pic.jpg_300x300.jpg",
            },
            goodtitle: "COACH/蔻驰女士拼色HUTTON钱包 灰褐姜色",
            goodprice: "454.80",
            cv1: 5
        }, ],
        // 今日推荐
        tuijian: [{
            goodid: "167",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536617317847.jpg",
            },
            goodtitle: "WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004",
            goodprice: "454.80",
        }, {
            goodid: "168",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489109583798.jpg",
            },
            goodtitle: "同仁堂【情侣款】Camel骆驼男靴 时尚潮流英伦风马丁靴高帮皮靴 爆卖1万双！ 情侣马丁靴 好评如潮",
            goodprice: "454.80",
        }, {
            goodid: "169",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108908792.jpg",
            },
            goodtitle: "迪士尼伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包",
            goodprice: "454.80",
        }, {
            goodid: "170",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490208908113.jpg",
            },
            goodtitle: "西门子NIKE耐克男鞋2017春款AIR ZOOM 33气垫休闲运动跑步鞋831352-001 气垫缓震 夏季透气 6年老店 正品保障",
            goodprice: "454.80",
        }, {
            goodid: "171",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489109337889.jpg",
            },
            goodtitle: "同庆和堂igtt铝框行李箱拉杆箱旅行箱万向轮男女20/24/26寸密码箱登机箱子 铝合金框 加强密码锁 万向轮 终身保修",
            goodprice: "454.80",
        }, {
            goodid: "172",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209093825.jpg",
            },
            goodtitle: "伊莱克斯BOSSsunwen头层牛皮真皮针扣皮带男士编织时尚腰带奢侈品个性青年 自动扣 头层牛皮 赠运费险 全场包邮 七天退换",
            goodprice: "454.80",
        }, {
            goodid: "173",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209125275.jpg",
            },
            goodtitle: "亿健COVHERlab男士职业正装商务领带 紫方块奢侈领带男韩版 礼品领带 奢侈品牌 商务必备 简约大气 送礼佳品",
            goodprice: "454.80",
        }, {
            goodid: "174",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489109282145.jpg",
            },
            goodtitle: "飞科波米铝框拉杆箱万向轮密码旅行箱子20/24寸行李箱女登机箱男26/28 顺丰速运赠运费险赠十礼品终身质保",
            goodprice: "454.80",
        }, {
            goodid: "175",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490208869148.jpg",
            },
            goodtitle: "喜瑞New Balance/NB 500系列男鞋复古鞋跑步鞋休闲运动鞋GM500RSW",
            goodprice: "454.80",
        }, {
            goodid: "176",
            goodurls: {
                nowurl: "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209033472.jpg",
            },
            goodtitle: "一品玉KooDao2016新款奢侈蛇纹真皮女士手提包百搭精品休闲斜挎手拎包 悦享生活 品质追求 满减领券 支持无理由 退换货",
            goodprice: "454.80",
        }, ]
    },




    // 店铺街
    shopData: {
        main: [{
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490153973561051484.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490915977483540879.jpg",
            title: "绿联专卖店",
            brand: "绿联",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490159042324590344.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490159042003546514.jpg",
            title: "火影旗舰店",
            brand: "火影",
            rank: "2",
            ziying: ''
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490160857982584904.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490160857716424359.jpg",
            title: "全友家私",
            brand: "全友家私",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490223011111438424.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490223011153110906.jpg",
            title: "美宝莲",
            brand: "美宝莲",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/images/1 - 副本.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1598468461882421099.png",
            title: "奇居旗舰店",
            brand: "奇居",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490223410708601451.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490223410237633996.jpg",
            title: "成人旗舰店",
            brand: "杜蕾斯",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490168617959840802.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490168617360778777.jpg",
            title: "服装专卖店",
            brand: " 服装",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1637703711997392395.png",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1595180901796131550.jpg",
            title: "普陀区 - 万卓有限公司",
            brand: "万卓",
            rank: "2",
            ziying: ''
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490153973561051484.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490915977483540879.jpg",
            title: "绿联专卖店",
            brand: "绿联",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490159042324590344.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490159042003546514.jpg",
            title: "火影旗舰店",
            brand: "火影",
            rank: "2",
            ziying: ''
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490160857982584904.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490160857716424359.jpg",
            title: "全友家私",
            brand: "全友家私",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490223011111438424.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490223011153110906.jpg",
            title: "美宝莲",
            brand: "美宝莲",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/images/1 - 副本.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1598468461882421099.png",
            title: "奇居旗舰店",
            brand: "奇居",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490223410708601451.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490223410237633996.jpg",
            title: "成人旗舰店",
            brand: "杜蕾斯",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1490168617959840802.jpg",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1490168617360778777.jpg",
            title: "服装专卖店",
            brand: " 服装",
            rank: "2",
        }, {
            bigurl: "https://x.dscmall.cn/storage/data/store_street/street_thumb/1637703711997392395.png",
            small: "https://x.dscmall.cn/storage/data/store_street/brand_thumb/1595180901796131550.jpg",
            title: "普陀区 - 万卓有限公司",
            brand: "万卓",
            rank: "2",
            ziying: ''
        }, ]
    },



    // 品牌专区
    brandData: {
        mian: [{
            title: "比特",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490035744332013781.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072850306019115.jpg",
        }, {
            title: "同庆和唐",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490219223517648103.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072373278367315.jpg",
        }, {
            title: "金士顿",
            bigurl: "	https://x.dscmall.cn/storage/data/indeximg/1490219016634946053.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072384627679069.jpg",
        }, {
            title: "esprit",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490219134284444948.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072399542595828.jpg",
        }, {
            title: "HLLE HOME",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490048046384195778.jpg",
            smallurl: "	https://x.dscmall.cn/storage/data/brandlogo/1490072677495061584.jpg",
        }, {
            title: "宝姿",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490219016634946053.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072384627679069.jpg",
        }, {
            title: "李宁",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047441388009467.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "白兰氏",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "同仁堂",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "比特",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047441388009467.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "比特",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/indeximg/1490035744332013781.jpg",
        }, {
            title: "比特",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/indeximg/1490035744332013781.jpg",
        }, {
            title: "比特",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490035744332013781.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072850306019115.jpg",
        }, {
            title: "同庆和唐",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490219223517648103.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072373278367315.jpg",
        }, {
            title: "金士顿",
            bigurl: "	https://x.dscmall.cn/storage/data/indeximg/1490219016634946053.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072384627679069.jpg",
        }, {
            title: "esprit",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490219134284444948.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072399542595828.jpg",
        }, {
            title: "HLLE HOME",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490048046384195778.jpg",
            smallurl: "	https://x.dscmall.cn/storage/data/brandlogo/1490072677495061584.jpg",
        }, {
            title: "宝姿",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490219016634946053.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072384627679069.jpg",
        }, {
            title: "李宁",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047441388009467.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "白兰氏",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "同仁堂",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "二傻子",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047441388009467.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
        }, {
            title: "DaUHK",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/indeximg/1490035744332013781.jpg",
        }, {
            title: "ZQ",
            bigurl: "https://x.dscmall.cn/storage/data/indeximg/1490047937765033207.jpg",
            smallurl: "https://x.dscmall.cn/storage/data/indeximg/1490035744332013781.jpg",
        }, ]
    },

};