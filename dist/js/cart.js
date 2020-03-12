"use strict";

$(function () {
  var tiems = 1200;
  setInterval(function () {
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
    }).then(function (data) {
      data = data.data;
      console.log(data);

      for (var i in data) {
        $('.orders-bd').append("\n                <div class=\"product-item\" \">\n                    <div class=\"m-product\">\n                        <img src=\"".concat(data[i].pimg, "\" alt=\"\">\n                        <div><span>\u81EA\u8425</span><a href=\"JavaScript:;\">").concat(data[i].pdesc, "</a>\n                        </div>\n                        <p>\u5C3A\u7801\uFF1A<span>XL</span></p>\n                    </div>\n                    <div class=\"m-price\">\n                        <span>\xA5").concat(data[i].pprice, "</span>\n                        <del>\xA51599</del>\n                    </div>\n                    <p><i class=\"oMinus\"  data-id=\"").concat(data[i].pid, "\">-</i><em class=\"num\">").concat(data[i].pnum, "</em><i class=\"oAdd\" data-id=\"").concat(data[i].pid, "\">+</i></p>\n                    <div class=\"add\">\xA5<em>").concat(data[i].pprice * data[i].pnum, "</em></div>\n                    <a href=\"javascript:;\" class=\"del\" data-id=\"").concat(data[i].pid, "\">\u5220\u9664</a>\n                </div>\n                "));
        $('.all').html(+i + 1);
      }

      del();
      add();
      numadd();
    });
  }

  var singles = 0;

  function add() {
    $('.add').each(function (i) {
      singles += parseFloat($('.add').eq(i).children('em').html());
    });
    $('.addup').html("\xA5".concat(singles));
  }

  function numadd() {
    $('.oMinus').click(function () {
      this.num = $(this).siblings('.num').html();
      this.num < 2 ? this.num = 1 : this.num--;
      $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
        uid: "33169",
        pid: $(this).data('id'),
        pnum: this.num
      }).then(function (data) {});
      $(this).siblings('.num').html(this.num);
      add();
    });
    $('.oAdd').click(function () {
      this.num = $(this).siblings('.num').html();
      this.num++;
      $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
        uid: "33169",
        pid: $(this).data('id'),
        pnum: this.num
      }).then(function (data) {});
      $(this).siblings('.num').html(this.num);
      add();
    });
  }

  function del() {
    $('.del').click(function () {
      var k = $(this).data('id');
      $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
        uid: "33169",
        pid: k
      }).then(function (data) {
        parent.location.reload();
      });
    });
  }
});