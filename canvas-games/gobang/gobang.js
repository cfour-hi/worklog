!(function () {
  var ACTIVE = 'active';

  /**
   * Gobang
   * @param {Object} options
   * |- * @param {Element} el : canavs 元素
   * |- * @param {Number} range : 棋盘范围
   * |- * @param {Number} distance : 棋盘间隔
   * |-   @param {Object} whitePiece : 白色棋子
   * |-   @param {Object} blackPiece : 黑色棋子
   * |-   @param {Function} onStep : 每下一步棋的回调 hook
   * |-   @param {Function} onGameover : 游戏结束 callbackon
   * |-   @param {Function} onBackspace : 悔棋 callback
   */
  var Gobang = function (options) {
    this.el = options.el;
    this.ctx = this.el.getContext('2d');
    this.range = options.range;
    this.distance = options.distance;
    this.currentPlayer = 1;
    this.lastStep = {};
    this.pieces = new Array(this.range); // 横轴

    if (options.onStep) { this.onStep = options.onStep; }
    if (options.onGameover) { this.onGameover = options.onGameover; }
    if (options.onBackspace) { this.onBackspace = options.onBackspace; }

    this.init();
    this.drawBoard();
    this.createPlayers(options.whitePiece, options.blackPiece);
  };
  var gobangProto = Gobang.prototype;

  // 初始化
  gobangProto.init = function () {
    // 初始化 this.range * this.range 二维数组
    for (var i = this.pieces.length - 1; i >= 0; i--) {
      this.pieces[i] = new Array(this.range);

      for (var j = this.pieces[i].length - 1; j >= 0; j--) {
        this.pieces[i][j] = 0;
      }
    }

    // 初始化 canvas 大小
    this.el.width = this.el.height = (this.range + 1) * this.distance;

    // 绑定点击事件
    this.el.onclick = function (event) {
      var x = Math.round((event.layerX - this.distance) / this.distance);
      var y = Math.round((event.layerY - this.distance) / this.distance);
      this.drawPiece(x, y);
    }.bind(this);
  };

  // 绘制棋盘
  gobangProto.drawBoard = function () {
    var max = this.range * this.distance;

    for (var i = this.distance; i <= max; i += this.distance) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.distance, i);
      this.ctx.lineTo(max, i);
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(i, this.distance);
      this.ctx.lineTo(i, max);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  };

  // 创建游戏玩家
  gobangProto.createPlayers = function (wp, bp) {
    this.player1 = new Player(this, wp || whitePiece, 1, '白棋');
    this.player2 = new Player(this, bp || blackPiece, 2, '黑棋');
  };

  /**
   * drawPiece
   * * @param {Number} x : 水平方向坐标
   * * @param {Number} y : 垂直方向坐标
   *   @param {String} type : 事件类型
   *
   * 当用户点击棋盘的时候，x 和 y 是棋盘上的 layerX 和 layerY，并且有 type 值为 'click'
   * 当 canvas 重绘的时候，x 和 y 是棋子对应的点坐标，type 默认不传
   */
  gobangProto.drawPiece = function (x, y) {
    if (x < 0 || x >= this.range || y < 0 || y >= this.range) {
      return console.warn('超出有效点击范围！');
    }

    if (this.checkCollision(x, y)) {
      return console.warn('当前位置已有棋子！');
    }

    this['player' + this.currentPlayer].draw(x, y);
    this.pieces[x][y] = this.currentPlayer;

    if (this.checkGameover(x, y)) {
      console.info('游戏结束！');

      // 移除绑定事件
      this.el.onclick = null;

      // 游戏结束回调
      if (this.onGameover) {
        this.onGameover(this['player' + this.currentPlayer]);
      }
    } else {
      this.lastStep.x = x;
      this.lastStep.y = y;

      this.togglePlayer();

      // step hook
      if (this.onStep) {
        this.onStep(this['player' + this.currentPlayer]);
      }
    }
  }

  /**
   * checkCollision
   * * @param {Number} x : 水平方向坐标
   * * @param {Number} y : 垂直方向坐标
   */
  gobangProto.checkCollision = function (x, y) {
    if (this.pieces[x][y] !== 0) {
      return true;
    }
    return false;
  };

  /**
   * checkGameover
   * * @param {Number} x : 水平方向坐标
   * * @param {Number} y : 垂直方向坐标
   */
  gobangProto.checkGameover = function (x, y) {
    var countHorizontal = 0;
    var countVertical = 0
    var countBackslash = 0;
    var countSlash = 0;
    var i;
    var j;

    // 水平方向检查
    for (i = x; i >= 0; i--) {
      if (this.pieces[i][y] === this.currentPlayer) {
        countHorizontal += 1;
      } else {
        break;
      }
    }

    for (j = x + 1; j < this.range; j++) {
      if (this.pieces[j][y] === this.currentPlayer) {
        countHorizontal += 1;
      } else {
        break;
      }
    }

    if (countHorizontal >= 5) {
      return true;
    }

    // 垂直方向检查
    for (i = y; i >= 0; i--) {
      if (this.pieces[x][i] === this.currentPlayer) {
        countVertical += 1;
      } else {
        break;
      }
    }

    for (j = y + 1; j < this.range; j++) {
      if (this.pieces[x][j] === this.currentPlayer) {
        countVertical += 1;
      } else {
        break;
      }
    }

    if (countVertical >= 5) {
      return true;
    }

    // 左上向右下检查（反斜线）
    for (i = x, j = y; i >= 0 && j >= 0; i-- , j--) {
      if (this.pieces[i][j] === this.currentPlayer) {
        countBackslash += 1;
      } else {
        break;
      }
    }

    for (i = x + 1, j = y + 1; i < this.range && j < this.range; i++ , j++) {
      if (this.pieces[i][j] === this.currentPlayer) {
        countBackslash += 1;
      } else {
        break;
      }
    }

    if (countBackslash >= 5) {
      return true;
    }

    // 右上向左下检查（斜线）
    for (i = x, j = y; i < this.range && j >= 0; i++ , j--) {
      if (this.pieces[i][j] === this.currentPlayer) {
        countSlash += 1;
      } else {
        break;
      }
    }

    for (i = x - 1, j = y + 1; i >= 0 && j < this.range; i-- , j++) {
      if (this.pieces[i][j] === this.currentPlayer) {
        countSlash += 1;
      } else {
        break;
      }
    }

    if (countSlash >= 5) {
      return true;
    }

    return false;
  };

  // 切换玩家
  gobangProto.togglePlayer = function () {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else if (this.currentPlayer === 2) {
      this.currentPlayer = 1;
    } else {
      console.error('currentPlayer 值出错！)')
    }
  };

  // 悔棋
  gobangProto.backspace = function () {
    var x = this.lastStep.x;
    var y = this.lastStep.y;

    if (!x || !y) {
      return console.warn('棋盘上还没有一个棋子！');
    }

    if (this.pieces[x][y] === 0) {
      return console.warn('已经悔过棋啦！');
    }

    this.pieces[x][y] = 0;
    this.togglePlayer();
    this.repaintGobang();

    // 悔棋回调
    if (this.onBackspace) {
      this.onBackspace(this['player' + this.currentPlayer]);
    }
  };

  // canvas 重绘
  gobangProto.repaintGobang = function () {
    this.ctx.clearRect(0, 0, this.el.width, this.el.height);
    this.drawBoard();

    var self = this;
    this.pieces.forEach(function (vps, x) {
      vps.forEach(function (point, y) {
        if (point > 0) {
          self['player' + point].draw(x, y);
        }
      });
    });
  };

  // 撤销悔棋
  gobangProto.cancelBackspace = function () {
    var x = this.lastStep.x;
    var y = this.lastStep.y;

    // 已经取消过悔棋
    if (this.pieces[x][y] !== 0) {
      return console.warn('已经取消过悔棋！');
    }

    this.drawPiece(x, y);
  };

  /**
   * Player
   * * @param {Object} cvs : 所处 canvas 对象
   * * @param {Object} img : 棋子图片
   * * @param {Number} mark : 玩家标记
   * * @param {String} name : 玩家名称
   */
  var Player = function (cvs, img, mark, name) {
    this.cvs = cvs;
    this.img = img;
    this.mark = mark;
    this.name = name;
  };
  var playerProto = Player.prototype;

  /**
   * draw
   * * @param {Number} x : 水平方向坐标
   * * @param {Number} y : 垂直方向坐标
   *
   * 绘制棋子
   */
  playerProto.draw = function (x, y) {
    var distance = this.cvs.distance;
    var halfDistance = distance / 2;
    this.cvs.ctx.drawImage(this.img, x * distance + halfDistance, y * distance + halfDistance);
  };

  var gobang = document.querySelector('.gobang-canvas');
  var cvs;

  var whitePiece = new Image();
  var blackPiece = new Image();
  whitePiece.src = '../lib/image/white-piece.png';
  blackPiece.src = '../lib/image/black-piece.png';

  document.addEventListener('readystatechange', function () {
    // 主要针对 whitePiece 和 blackPiece 加载完成
    if (document.readyState === 'complete') {
      // 开始游戏
      Array.prototype.forEach.call(document.querySelectorAll('.start-game'), function (el) {
        el.addEventListener('click', function () {
          cvs = new Gobang({
            el: gobang,
            range: 16,
            distance: 40,
            whitePiece: whitePiece,
            blackPiece: blackPiece,
            onStep: stepPiece,
            onGameover: gameover,
            onBackspace: backspace
          });
          this.closest('.dialog-modal').classList.remove(ACTIVE);
        }, false);
      });
    }
  }, false);

  // 悔棋
  document.querySelector('.backspace').addEventListener('click', function () {
    cvs.backspace();
  }, false);

  // 撤销悔棋
  document.querySelector('.cancel-backspace').addEventListener('click', function () {
    cvs.cancelBackspace();
  }, false);

  var nextPiece = document.querySelector('.next-piece');
  // 每下一步棋会被触发的 hook 函数
  function stepPiece(player) {
    if (player.mark === 1) {
      nextPiece.classList.remove('black-piece');
      nextPiece.classList.add('white-piece');
    } else if (player.mark === 2) {
      nextPiece.classList.remove('white-piece');
      nextPiece.classList.add('black-piece');
    } else {
      console.error('玩家 mark 值出错！');
    }
  }

  var gameoverDialog = document.querySelector('.dialog-modal__gameover');
  // 游戏结束回调
  function gameover(player) {
    gameoverDialog.querySelector('.game-over').textContent = player.name + '赢';
    gameoverDialog.classList.add(ACTIVE);
  }

  // 悔棋回调
  function backspace(player) {
    stepPiece(player);
  }

})();
