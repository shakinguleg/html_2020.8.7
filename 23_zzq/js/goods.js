$(document).ready(function () {
    var goods = localStorage.getItem("goods")
    var arr = []
    var $sail = $(".sail");
    console.log("ffff");


    // 如果有物品存在则显示
    if (goods) {
        arr = JSON.parse(goods);
        //取出对应code的物品
        $.ajax({
            type: "get",
            url: "./data/goods.json",
            dataType: "json",
            // 请求数据
            success: function (response) {
                var sail_header = ""
                $.each(response, function (resIndex, resElement) {
                    var resCode = resElement.code;
                    $.each(arr, function (indexInArray, valueOfElement) {
                        var code = valueOfElement.code;
                        if (code === resCode) {
                            var num = valueOfElement.num;
                            var price = resElement.price;
                            var sum = price.slice(0, 1) + price.slice(1) * num;
                            var title = resElement.title
                            var img = resElement.imgurl
                            sail_header +=
                                `<div class="sail_header_wrap">
                                <div class="sail_header">
                                    <span class="switch">换购</span>
                                    <span class="header_2">购满1件，即可享受换购优惠</span>
                                    <span class="switch_now">立即换购&gt;</span>
                                </div>
                                <div class="sail_item">
                                <input class="check" type="checkbox">
            
                                <!-- 明细 -->
                                <div class="detail">
            
                                    <!-- 结算项 -->
                                    <div class="final">
                                        <div class="good_item">
                                            <img src="${img}" alt="">
                                            <div class="a_wrap">
                                                <a href="#">
                                                    ${title}
                                                </a>
                                                <a href="#"><span>选服务</span></a>
                                            </div>
                                        </div>
            
                                        <div class="type">
                                            <span>暗夜绿色</span>
                                            <span>256G</span>
                                        </div>
            
                                        <div class="price">
                                            <span>${price}</span>
                                            <span>促销</span>
                                        </div>
            
                                        <div class="num">
                                            <a class="sub" href="#">-</a>
                                            <input type="text" value="${num}">
                                            <a class="add" href="#">+</a>
                                        </div>
            
                                        <div class="sum">${sum}</div>
            
                                        <div class="option">
                                            <a class="del" code=${code} href="#">删除</a>
                                            <a href="#">移到我的关注</a>
                                        </div>
                                    </div>
            
                                    <!-- 赠品 -->
                                    <div class="extra">
                                        <div class="gift">
                                            <a class="first" href="#">
                                                【赠品】电信星卡宝藏版 可领3个月视频会员 套内200G专属大流量 套外1元1GB/日【苹果专用】
                                            </a>
                                            <span>X1</span>
                                            <a class="last" href="#">查看价格</a>
                                        </div>
                                        <div class="gift">
                                            <a class="first" href="#">
                                                【赠品】Mac推荐卡
                                            </a>
                                            <span>X1</span>
                                            <a class="last" href="#">查看价格</a>
                                        </div>
                                        <div class="gift">
                                            <a class="first" href="#">
                                                【赠品】【推广体验-无实物仅权益】Apple Music新用户三个月免费试用(iOS&Android用户均可使用)
                                            </a>
                                            <span>X1</span>
                                            <a class="last" href="#">查看价格</a>
                                        </div>
                                        <div class="gift">
                                            <a class="first" href="#">
                                                【赠品】【免费体验】Apple产品“上手无忧”服务
                                            </a>
                                            <span>X1</span>
                                            <a class="last" href="#">查看价格</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                                `
                        }

                    });
                });
                $sail.html(sail_header)
            }
        });


    } else {
        // 购物车没有物品不显示
        $sail.html("没有商品")
    }

    //点击改变数量
    $sail.on("click", ".final .num .sub", function () {
        var $ipt = $(".final .num input");
        var num;
        if ($ipt.val() > 0) {
            num = $ipt.val() - 1;
            var code = $(this).parent().siblings(".option").find("a")[0].getAttribute("code")

            $.each(arr, function (indexInArray, valueOfElement) {
                if (valueOfElement.code == code) {
                    valueOfElement.num--;
                }
            });
            localStorage.setItem("goods", JSON.stringify(arr));
        } else {
            num = 0;
        }
        $ipt.val(num);
        var price = $(this).parent().siblings(".price").find("span")[0].innerText.slice(1);
        $(this).parent().siblings(".sum").text(num * price);
    })

    $sail.on("click", ".final .num .add", function () {
        var $ipt = $(".final .num input");
        var num = parseInt($ipt.val()) + 1;
        var code = $(this).parent().siblings(".option").find("a")[0].getAttribute("code")

        $.each(arr, function (indexInArray, valueOfElement) {
            if (valueOfElement.code == code) {
                valueOfElement.num++;
            }
        });
        localStorage.setItem("goods", JSON.stringify(arr));
        $ipt.val(num);
        var price = $(this).parent().siblings(".price").find("span")[0].innerText.slice(1);
        $(this).parent().siblings(".sum").text(num * price);
    })

    //从本地删除
    $sail.on("click", ".option .del", function () {
        var curCode = $(this).attr("code")
        _this = $(this);
        $.each(arr, function (indexInArray, valueOfElement) {
            if (arr[indexInArray].code == curCode) {
                //  从对应数组中删除
                arr.splice(indexInArray, 1)
                _this.closest(".sail_header_wrap").html("")
                return false;
            }
        });
        // 重新更新本地
        if (arr.length !== 0) {
            localStorage.setItem("goods", JSON.stringify(arr));
        } else {
            localStorage.clear();
            $sail.html("没有商品")
        }
    });

});