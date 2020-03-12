$(function() {



    var tiems = 1200;

    setInterval(function() {
        // 计时器
        tiems--;
        var d = new Date();

        var m = d.getMinutes(); //分钟
        var s = d.getSeconds();

        var min = Math.floor(tiems % 3600 / 60); //分钟
        var sec = Math.floor(tiems % 60);

        $('.min').html(min);
        $('.sec').html(sec);
    }, 1000);

    function show() {
        $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php?", {
            id: "33169"
        }).then(data => {
            data = data.data;
            console.log(data)

            for (let i in data) {
                $('.orders-bd').append(
                    `
                <div class="product-item" ">
                    <div class="m-product">
                        <img src="${data[i].pimg}" alt="">
                        <div><span>自营</span><a href="JavaScript:;">${data[i].pdesc}</a>
                        </div>
                        <p>尺码：<span>XL</span></p>
                    </div>
                    <div class="m-price">
                        <span>¥${data[i].pprice}</span>
                        <del>¥1599</del>
                    </div>
                    <p><i class="oMinus"  data-id="${data[i].pid}">-</i><em class="num">${data[i].pnum}</em><i class="oAdd" data-id="${data[i].pid}">+</i></p>
                    <div class="add">¥<em>${data[i].pprice * data[i].pnum}</em></div>
                    <a href="javascript:;" class="del" data-id="${data[i].pid}">删除</a>
                </div>
                `
                )
                $('.all').html(+i + 1);
            }
            del();
            add();
            numadd();

        });

    }
    let singles = 0;

    function add() {
        $('.add').each(function(i) {
            singles += parseFloat($('.add').eq(i).children('em').html());
        })
        $('.addup').html(`¥${singles}`);
    }

    function numadd() {
        $('.oMinus').click(function() {
            this.num = $(this).siblings('.num').html();
            this.num < 2 ? this.num = 1 : this.num--;
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: "33169",
                pid: $(this).data('id'),
                pnum: this.num
            }).then(data => {

            });
            $(this).siblings('.num').html(this.num);
            add();
        })
        $('.oAdd').click(function() {
            this.num = $(this).siblings('.num').html();
            this.num++;
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: "33169",
                pid: $(this).data('id'),
                pnum: this.num
            }).then(data => {

            });
            $(this).siblings('.num').html(this.num);
            add();
        })
    }

    function del() {
        $('.del').click(function() {
            let k = $(this).data('id');
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                uid: "33169",
                pid: k
            }).then(data => {
                parent.location.reload()
            });
        })
    }


})