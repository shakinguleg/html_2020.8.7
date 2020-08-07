$(function () {

    // 加载图片
    $.ajax({
        type: "get",
        url: "./data/goods.json",
        dataType: "json",
        success: function (response) {
            console.log('response: ', response);
            $.each(response, function (indexInArray, valueOfElement) {
                var blockDom = `<div class="block">
                                    <img src="${valueOfElement.imgurl}" alt="">
                                    <p class="${valueOfElement.price}">$410</p>
                                    <span class="detail">${valueOfElement.title}</span>
                                    <div code=${valueOfElement.code} class="buy">
                                        <div class="add">加入购物车</div>
                                    </div>
                                </div>`
                $(".group").append(blockDom);
            });
        }
    });

    $(".group").on("click", ".buy", function () {
        // 记录购物车历史
        var arr = [];
        //取出点击对应商品的code
        var code = $(this).attr("code");
        //将code放到localStorage中


        // 如果有商品记录就取出
        var goods = null;
        goods = localStorage.getItem("goods");
        if (goods) {
            arr = JSON.parse(goods)
        }

        var have = false;  //物品未加入过购物车标志

        // 如果已经有对应商品, 将数量增加
        if(arr.length){
            $.each(arr, function (indexInArray, valueOfElement) {
                if (valueOfElement.code == code) {
                    valueOfElement.num++;
                    have = true;
                    return false;
                }
            });
        }

        //没有加入过购物车, 将商品加入本地缓存
        if (!have) {
            arr.push({
                "code":code,
                "num": "1",
            })
        }

        localStorage.setItem("goods",JSON.stringify(arr));
        alert("加入购物车成功")

    });

})