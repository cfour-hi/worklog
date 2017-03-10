!(function tractor() {

  var TRACTOR_TOUCHING = 'tractor-touching';
  var TRACTOR_LESS = 'tractor-less';
  var TRACTOR_GREATER = 'tractor-greater';
  var TRACTOR_REFRESHING = 'tractor-refreshing';

  var constructorFunc = function () { };

  var Tractor = function (options) {
    // 下拉容器偏移值
    this.translate = 0;

    // 是否已经触发滚动加载状态
    this.scrollerLoading = false;

    var defaults = {
      scroller: 'body', // 滚动容器
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

    this.tractor = extend(defaults, options || {});
    this.tractor.scroller = document.querySelector(this.tractor.scroller);

    this.initDrag();
    this.initScroll();
  };

  Tractor.prototype.initDrag = function (defaults, options) {
    var self = this;
    var tractor = this.tractor;
    var isTouchStart = false; // 是否已经触发下拉条件
    var isDragStart = false; // 是否已经开始下拉

    // 容器滚动尺寸
    var scrollerScrollHeight = tractor.scroller.scrollHeight;
    var scrollerHeight = tractor.scroller.getBoundingClientRect().height;

    // 下拉方向，touchstart 时的点坐标
    var startX, startY;

    // 监听下拉加载
    if (tractor.openDragLoading) {
      tractor.scroller.addEventListener('touchstart', touchStart, false);
      tractor.scroller.addEventListener('touchmove', touchMove, false);
      tractor.scroller.addEventListener('touchend', touchEnd, false);
    }

    function touchStart(event) {
      if (tractor.scroller.scrollTop <= 0) {
        isTouchStart = true;
        startX = event.changedTouches[0].pageX;
        startY = event.changedTouches[0].pageY;
      }
    }

    function touchMove(event) {
      // Tips:
      // return false 会阻止默认事件

      if (!isTouchStart) { return; }

      var distance = event.changedTouches[0].pageY - startY;
      if (distance > 0) {
        self.translate = Math.pow(event.changedTouches[0].pageY - startY, 0.85);
      } else {
        if (self.translate !== 0) {
          self.translate = 0;
          elTransform(tractor.scroller, 'translate3d(0, ' + self.translate + 'px, 0)');
        }
      }

      // 避免横向滑屏
      // var diffDistance = Math.abs(event.touches[0].pageX - startX) - Math.abs(event.touches[0].pageY - startY);
      // if (diffDistance > 0) return false;

      if (distance > 0) {
        event.preventDefault();

        tractor.scroller.classList.add(TRACTOR_TOUCHING);

        if (!isDragStart) {
          isDragStart = true;

          // hock
          tractor.onDragStart();
        }

        if (self.translate <= tractor.dragValve) {
          if (tractor.scroller.classList.contains(TRACTOR_GREATER)) { tractor.scroller.classList.remove(TRACTOR_GREATER); }
          if (!tractor.scroller.classList.contains(TRACTOR_LESS)) { tractor.scroller.classList.add(TRACTOR_LESS); }

          // hock
          tractor.onDragLessValve();
        } else {
          if (tractor.scroller.classList.contains(TRACTOR_LESS)) { tractor.scroller.classList.remove(TRACTOR_LESS); }
          if (!tractor.scroller.classList.contains(TRACTOR_GREATER)) { tractor.scroller.classList.add(TRACTOR_GREATER); }

          // hock
          tractor.onDragGreaterValve();
        }

        elTransform(tractor.scroller, 'translate3d(0, ' + self.translate + 'px, 0)');
      }
    }

    function touchEnd(event) {
      isDragStart = false;

      if (!isTouchStart) { return; }

      tractor.scroller.classList.remove(TRACTOR_TOUCHING);

      if (self.translate <= tractor.dragValve) {
        tractor.scroller.classList.remove(TRACTOR_LESS);
        self.translateScroller(300, 0);
      } else {
        tractor.scroller.classList.remove(TRACTOR_GREATER);
        tractor.scroller.classList.add(TRACTOR_REFRESHING);

        self.translateScroller(100, tractor.dragValve);

        // hock
        tractor.onDragDone();
      }
    }
  };

  Tractor.prototype.initScroll = function () {
    var self = this;
    var tractor = this.tractor;

    // 监听滚动加载
    if (tractor.openScrollLoading) { tractor.scroller.addEventListener('scroll', scrolling, false); }

    function scrolling() {
      if (self.scrollerLoading) { return; }

      scrollerscrollHeight = tractor.scroller.scrollHeight;
      scrollerHeight = tractor.scroller.getBoundingClientRect().height;
      scrollerTop = tractor.scroller.scrollTop;

      // 达到滚动加载阀值
      if (scrollerscrollHeight - scrollerHeight - scrollerTop <= tractor.scrollValve) {
        self.scrollerLoading = true;

        // hock
        tractor.onScroll2Valve();
      }
    }
  };

  Tractor.prototype.translateScroller = function (consuming, valve) {
    var self = this;

    requestAnimationFrame(translateRAF);

    var time = 0;
    function translateRAF(timestamp) {
      if (!time) time = timestamp;
      var remain = self.translate - self.translate * (timestamp - time) / consuming;
      if (remain < valve) remain = self.translate = valve;

      elTransform(self.tractor.scroller, 'translate3d(0, ' + remain + 'px, 0)');

      if (remain > valve) requestAnimationFrame(translateRAF);
    }
  };

  Tractor.prototype.dragLoadingDone = function () {
    this.tractor.scroller.classList.remove(TRACTOR_REFRESHING);
    this.translateScroller(300, 0);
  };

  Tractor.prototype.scrollLoadingDone = function () {
    this.scrollerLoading = false;
  };

  function extend(to, from) {
    Object.keys(from).forEach(function (key) {
      to[key] = from[key];
    });
    return to;
  }

  function elTransform(el, transform) {
    var elStyle = el.style;
    elStyle.webkitTransform = elStyle.MozTransform = elStyle.transform = transform;
  };

  window.Tractor = Tractor;

})();
