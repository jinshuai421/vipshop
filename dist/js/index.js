"use strict";

$(function () {
  // 轮播图
  var count = 0;

  function move() {
    count++;
    if (count == $('.banner-li li').length) count = 0;
    $('.banner-li li').eq(count).fadeIn().stop().animate({
      'display': 'block',
      'opacity': 1
    }).siblings('.banner-li li').fadeOut().stop().animate({
      'display': 'none',
      'opacity': 0
    });
    $('.fbc-trigger-li li').eq(count).addClass('selected').siblings().removeClass('selected');

    if (count == 1) {
      $('.fbc-trigger-line').stop().animate({
        'left': '574px'
      });
    } else {
      $('.fbc-trigger-line').stop().animate({
        'left': '344px'
      });
    }
  }

  var timer = setInterval(function () {
    move();
  }, 3000);
  $('.fbc-trigger-li li').mouseover(function () {
    $(this).addClass('selected').siblings().removeClass('selected');
  }); // 左右按钮

  $('.banner-btn-r').click(function () {
    move();
  });
  $('.banner-btn-l').click(function () {
    count -= 2;
    move();
  }); // 移入停止

  $('.focus-banner').mouseover(function () {
    clearInterval(timer);
  });
  $('.focus-banner').mouseout(function () {
    timer = setInterval(function () {
      move();
    }, 3000);
  }); // 置顶

  $('.upxxx').click(function () {
    $('html,body').stop().animate({
      'scrollTop': 0
    });
  }); // 楼梯

  $(window).scroll(function () {
    var st = $(this).scrollTop();

    if (st > $('#nav-floor1').offset().top) {
      $('.index-nav-wrap').addClass('index-nav-fixed');
    } else {
      $('.index-nav-wrap').removeClass('index-nav-fixed');
    }

    $('.shop-sort').each(function (i) {
      if (st >= $(this).offset().top - $(this).outerHeight() / 2) {
        $('.index-nav-wrap a').eq(i).addClass('nav-reap-on').siblings().removeClass('nav-reap-on');
      }
    });
  });
  $('.index-nav-wrap a').click(function () {
    $(this).addClass('nav-reap-on').siblings().removeClass('nav-reap-on');
  });
});