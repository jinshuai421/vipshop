"use strict";

$(function () {
  $('.upxxx').click(function () {
    $('html,body').stop().animate({
      'scrollTop': 0
    });
  });
  var num = 1;
  $('.oMinus').click(function () {
    num < 2 ? num = 1 : num--;
    $('.num').empty().append(num);
  });
  $('.oAdd').click(function () {
    num++;
    $('.num').empty().append(num);
  });
  var id = location.search[1];
  console.log(id);
  $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    uid: "33169"
  }).then(function (data) {
    data = data.data;
    console.log(data);
    $('.fw-l').prepend("\n                <img src=\"".concat(data[id].pimg, "\" alt=\"\">\n                "));
    $('.fw-r').prepend("\n            <a href=\"javascript:;\">\u5DE6\u5CB8</a>\n            <h3 title=\"".concat(data[id].pdesc, "\">").concat(data[id].pdesc, "</h3>\n            <p>\u8212\u9002\u767E\u642D \u4E2A\u6027\u5B57\u6BCD<span>\u6536\u85CF</span></p>\n            <div class=\"price-box\">\n                <i>\uFFE5</i>\n                <p title=\"59\">59</p>\n                <div>\n                    <del>\uFFE5").concat(data[id].pprice, "</del> 2.2\u6298\n                </div>\n            </div>\n            "));
    $('.abtn').click(function () {
      $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
        uid: "33169",
        pid: data[id].pid,
        pnum: num
      }).then(function (data) {
        location.href = "cart.html";
      });
    });
  });
});