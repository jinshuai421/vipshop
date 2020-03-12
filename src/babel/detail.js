$(function() {
    $('.upxxx').click(() => {
        $('html,body').stop().animate({
            'scrollTop': 0
        })
    })
    var num = 1;
    $('.oMinus').click(function() {
        num < 2 ? num = 1 : num--;
        $('.num').empty().append(num);
    })
    $('.oAdd').click(function() {
        num++;
        $('.num').empty().append(num);
    })

    var id = location.search[1];
    console.log(id)

    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: "33169"
    }).then(data => {
        data = data.data;
        console.log(data)
        $('.fw-l').prepend(
            `
                <img src="${data[id].pimg}" alt="">
                `
        )
        $('.fw-r').prepend(
            `
            <a href="javascript:;">左岸</a>
            <h3 title="${data[id].pdesc}">${data[id].pdesc}</h3>
            <p>舒适百搭 个性字母<span>收藏</span></p>
            <div class="price-box">
                <i>￥</i>
                <p title="59">59</p>
                <div>
                    <del>￥${data[id].pprice}</del> 2.2折
                </div>
            </div>
            `
        )
        $('.abtn').click(function() {
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                uid: "33169",
                pid: data[id].pid,
                pnum: num
            }).then(data => {
                location.href = "cart.html";
            })
        })

    })
});