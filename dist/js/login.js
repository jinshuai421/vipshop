"use strict";

$(function () {
  var count = 0;
  $('.more').click(function () {
    count++;

    if (count % 2) {
      $('.log-third').animate({
        'height': '170px'
      });
    } else {
      $('.log-third').animate({
        'height': '119px'
      });
    }
  });
  $('.log-header h2').click(function () {
    $(this).addClass('log-h2').siblings().removeClass('log-h2');

    if ($('.log-header h2:first-of-type').hasClass('log-h2')) {
      $('.ckg-main').css({
        'display': 'none'
      });
      $('.log-e').css({
        'display': 'block'
      });
    } else {
      $('.ckg-main').css({
        'display': 'block'
      });
      $('.log-e').css({
        'display': 'none'
      });
    }
  });
  $("#btn").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
      username: $('.username').val(),
      password: $('.password').val()
    }).then(function (data) {
      if (data.code == 1) {
        location.href = "index.html";
        $('.zhengque').css({
          'display': 'inline-block'
        });
        $('.cuowu').css({
          'display': 'none'
        });
        console.log('123');
      } else {
        //用户名不可用
        $('.cuowu').css({
          'display': 'inline-block'
        });
        $('.zhengque').css({
          'display': 'none'
        });
      }
    });
  });
});