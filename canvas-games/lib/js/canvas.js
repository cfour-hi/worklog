!(function () {

  var Canvas = function (el) {
    this.el = document.querySelector(el);
    this.ctx = this.el.getContext('2d');

    this.init();
  };

  var canvasProto = Canvas.prototype;

  canvasProto.init = function () {
    if (inMobile) {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;

      this.w = this.el.width = w - (w % 10) - 20;
      this.h = this.el.height = h - (h % 10) - 20;
    } else {
      this.w = this.el.width = 600;
      this.h = this.el.height = 500;
    }
  };

  canvasProto.draw = function () {
    this.ctx.clearRect(0, 0, this.w, this.h);
    ball.draw();
    paddleL.draw();
    paddleR.draw();

    ball.checkCollision();
  };

  window.Canvas = Canvas;

})();
