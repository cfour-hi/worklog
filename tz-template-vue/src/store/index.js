import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const REG_FILE_NAME = /[^/\\]+(?=\.js)/;

const modules = ((req) => {
  const paths = req.keys();
  const result = paths.reduce((prev, cur) => {
    const fileName = REG_FILE_NAME.exec(cur)[0];
    prev[fileName] = req(cur).default;
    return prev;
  }, {});
  return result;
})(require.context('./', false, /^.\/(?!index)\S+.js$/));

export default new Vuex.Store({ modules });
