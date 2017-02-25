// 使用时建议添加 https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js

;(function tractor() {

  var TOUCHING = 'touching';
  var TRACTOR_LESS = 'tractor-less';
  var TRACTOR_GREATER = 'tractor-greater';
  var REFRESHING = 'refreshing';

  var Tractor = function(options) {
    // 下拉容器偏移值
    this.translate = 0;

    // 是否已经触发滚动加载状态
    this.scrollerLoading = false;

    var self = this;

    var defaults = {
      scroller: $('body'), // 滚动容器
      openDragLoading: true, // 开启下拉加载
      openScrollLoading: true, // 开启滚动加载
      dragValve: 40, // 下拉加载阀值
      scrollValve: 40, // 滚动加载阀值
      onDragStart: constructorFunc, // 下拉开始
      onDragLessValve: constructorFunc, // 下拉中，但还没到刷新阀值
      onDragGreaterValve: constructorFunc, // 下拉中，已经达到刷新阀值
      onDragDone: constructorFunc, // 下拉结束
      onScroll2Valve: constructorFunc // 滚动到阀值
    }

    var tractor = self.tractor = $.extend({}, defaults, options || {});

    // 是否已经触发下拉条件
    var isTouchStart = false;

    // 是否已经开始下拉
    var isDragStart = false;

    // 容器滚动尺寸
    var scrollerScrollHeight = tractor.scroller[0].scrollHeight;
    var scrollerHeight = tractor.scroller.height();
    var scrollerTop = tractor.scroller.scrollTop();

    // tractor.scroller.height(scrollerHeight += tractor.dragValve);

    // 下拉方向，touchstart 时的点坐标
    var startX, startY;

    // tractor.scroller.css('overflow', 'auto');

    // 监听下拉加载
    if (tractor.openDragLoading) {
      tractor.scroller.on({
        touchstart: touchStart,
        touchmove: touchMove,
        touchend: touchEnd
      });
    }

    // 监听滚动加载
    if (tractor.openScrollLoading) {
      tractor.scroller.on({
        scroll: scrolling
      });
    }

    function touchStart(event) {
      if (tractor.scroller.scrollTop() <= 0) {
        isTouchStart = true;
        startX = event.changedTouches[0].pageX;
        startY = event.changedTouches[0].pageY;
      }
    }

    function touchMove(event) {
      // Tips:
      // return false 会阻止默认事件

      if (!isTouchStart) return;

      var distance = event.changedTouches[0].pageY - startY;
      if (distance > 0) {
        self.translate = Math.pow(event.changedTouches[0].pageY - startY, 0.85);
      } else {
        self.translate = 0;
        tractor.scroller.transform('translate3d(0, ' + self.translate + 'px, 0)');
      }

      // 避免横向滑屏
      // var diffDistance = Math.abs(event.touches[0].pageX - startX) - Math.abs(event.touches[0].pageY - startY);
      // if (diffDistance > 0) return false;

      if (distance > 0) {
        event.preventDefault();

        // tractor.scroller.addClass(TOUCHING).css('overflow', 'hidden');
        tractor.scroller.addClass(TOUCHING);

        if (!isDragStart) {
          isDragStart = true;
          tractor.onDragStart();
        }

        if (self.translate <= tractor.dragValve) {
          if (tractor.scroller.hasClass(TRACTOR_GREATER)) tractor.scroller.removeClass(TRACTOR_GREATER);
          if (!tractor.scroller.hasClass(TRACTOR_LESS)) tractor.scroller.addClass(TRACTOR_LESS);

          tractor.onDragLessValve();
        } else {
          if (tractor.scroller.hasClass(TRACTOR_LESS)) tractor.scroller.removeClass(TRACTOR_LESS);
          if (!tractor.scroller.hasClass(TRACTOR_GREATER)) tractor.scroller.addClass(TRACTOR_GREATER);

          tractor.onDragGreaterValve();
        }

        tractor.scroller.transform('translate3d(0, ' + self.translate + 'px, 0)');
      }
    }

    function touchEnd(event) {
      isDragStart = false;

      if (!isTouchStart) return;

      // tractor.scroller.removeClass(TOUCHING).css('overflow', 'auto');
      tractor.scroller.removeClass(TOUCHING);
      if (self.translate <= tractor.dragValve) {
        tractor.scroller.removeClass(TRACTOR_LESS)
        self.translateScroller(300, 0);
      } else {
        tractor.scroller.removeClass(TRACTOR_GREATER);
        tractor.scroller.addClass(REFRESHING);
        self.translateScroller(100, tractor.dragValve);
        tractor.onDragDone();
      }
    }

    function scrolling() {
      if (self.scrollerLoading) return;

      scrollerscrollHeight = tractor.scroller[0].scrollHeight;
      scrollerHeight = tractor.scroller.height();
      scrollerTop = tractor.scroller.scrollTop();

      // 达到滚动加载阀值
      if (scrollerscrollHeight - scrollerHeight - scrollerTop <= tractor.scrollValve) {
        self.scrollerLoading = true;
        tractor.onScroll2Valve();
      }
    }
  };

  Tractor.prototype.translateScroller = function(consuming, valve) {
    var self = this;

    requestAnimationFrame(translateRAF);

    var time = 0;
    function translateRAF(timestamp) {
      if (!time) time = timestamp;
      var remain = self.translate - self.translate * (timestamp - time) / consuming;
      if (remain < valve) remain = self.translate = valve;

      self.tractor.scroller.transform('translate3d(0, ' + remain + 'px, 0)');

      if (remain > valve) requestAnimationFrame(translateRAF);
    }
  };

  Tractor.prototype.dragLoadingDone = function() {
    this.tractor.scroller.removeClass(REFRESHING);
    this.translateScroller(300, 0);
  };

  Tractor.prototype.scrollLoadingDone = function() {
    this.scrollerLoading = false;
  };

  $.fn.transform = function(transform) {
    for (var i = this.length - 1; i >= 0; i--) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = elStyle.MozTransform = elStyle.transform = transform;
    }
    return this;
  };

  var constructorFunc = function() {};

  window.Tractor = Tractor;

})();
