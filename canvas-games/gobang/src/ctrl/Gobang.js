define([
  'util',
  'Player',
  'AIPlayer',
  'Chessboard',
  'CanvasGobang',
  'DOMGobang'
], function (_, Player, AIPlayer, Chessboard, CanvasGobang, DOMGobang) {

  /**
   * Gobang
   * @param {Object} options
   * |- * @param {Element} el : canavs 元素
   * |- * @param {String} type : 绘制类型
   * |- * @param {Number} range : 棋盘范围
   * |- * @param {Number} distance : 棋盘间隔
   * |- * @param {Object} whitePiece : 白色棋子
   * |- * @param {Object} blackPiece : 黑色棋子
   * |-   @param {Boolean} withAI : 人机对战
   * |-   @param {Function} onStep : 每下一步棋的回调 hook
   * |-   @param {Function} onGameover : 游戏结束 callbackon
   * |-   @param {Function} onBackspace : 悔棋 callback
   */
  var Gobang = function (options) {
    _.extend(this, options);

    this.gameover = false;
    this.playerIndex = 0;
    this.players = [];

    // 生成棋盘模型
    this.vm = new Chessboard(this);

    this.init();
    this.initEvents();
    this.createPlayers();
  };

  Gobang.prototype.init = function () {
    if (this.type === 'canvas') {
      this.view = new CanvasGobang(this);
    } else if (this.type === 'dom') {
      this.view = new DOMGobang(this);
    } else {
      console.error('初始化棋盘时 type 值错误！');
    }
  };

  Gobang.prototype.initEvents = function () {
    this.el.onclick = function (event) {
      if (this.gameover) {
        return console.warn('游戏已结束！');
      }

      var currentPlayer = this.players[this.playerIndex];

      x = Math.round((event.clientX - this.el.offsetLeft - this.distance) / this.distance);
      y = Math.round((event.clientY - this.el.offsetTop - this.distance) / this.distance);

      if (x < 0 || x >= this.range || y < 0 || y >= this.range) {
        return console.warn('超出有效点击范围！');
      }

      if (this.vm.checkCollision(x, y)) {
        return console.warn('当前位置已有棋子！');
      }

      this.vm.pushStep(x, y, currentPlayer);

      var player = this.vm.checkGameover(x, y, currentPlayer);

      if (player) {
        this.gameover = true;

        // 游戏结束回调
        if (this.onGameover) {
          this.onGameover(player);
        }
        return console.info('游戏结束！');
      }

      this.playerIndex = this.playerIndex ? 0 : 1;

      // 下棋 hook
      if (this.onStep) {
        this.onStep(this.players[this.playerIndex]);
      }
    }.bind(this);
  };

  // 创建玩家
  Gobang.prototype.createPlayers = function () {
    var player1 = new Player({
      _gobang: this,
      piece: this.whitePiece,
      index: 0,
      name: '白棋'
    });

    var p2Args = {
      _gobang: this,
      piece: this.blackPiece,
      index: 1,
      name: '黑棋'
    }

    var player2 = this.withAI ? new AIPlayer(p2Args) : new Player(p2Args);

    this.players.push(player1);
    this.players.push(player2);
  };

  // 悔棋
  Gobang.prototype.backspace = function () {
    if (!this.vm.pushBackspace()) {
      return console.warn('已经无棋可悔！');
    }

    this.playerIndex = this.playerIndex ? 0 : 1;

    // 悔棋回调
    if (this.onBackspace) {
      this.onBackspace(this.players[this.playerIndex]);
    }
  };

  // 撤销悔棋
  Gobang.prototype.cancelBackspace = function () {
    if (!this.vm.cancelBackspace()) {
      return console.warn('已经撤销所有悔棋！');
    }

    this.playerIndex = this.playerIndex ? 0 : 1;
  };

  return Gobang;

});
