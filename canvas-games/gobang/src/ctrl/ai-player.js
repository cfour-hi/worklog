define([
  'Player'
], function (Player) {

  var AIPlayer = function (options) {
    Player.call(this, options);
  };

  AIPlayer.prototype = Object.create(Player.prototype);

  return AIPlayer;

});
