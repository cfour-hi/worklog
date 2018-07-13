import Vue from 'vue';

const TZ_LOADING = 'tzLoading';

Vue.mixin({
  beforeCreate() {
    const { name = '', methods = {} } = this.$options;
    const loadings = {};

    if (!methods || !Object.keys(methods).length) return;
    // 针对 element-ui 组件不进行修改
    if (name.match(/^El/)) return;

    Object.keys(methods).forEach((key) => {
      const fn = methods[key];
      loadings[key] = false;

      methods[key] = function(...args) {
        const r = fn.apply(this, args);
        if (r && typeof r.finally === 'function') {
          this[TZ_LOADING][key] = true;
          r.finally(() => {
            this[TZ_LOADING][key] = false;
          });
        }
        return r;
      };
    });

    this[TZ_LOADING] = loadings;
  },
  data() {
    return { [TZ_LOADING]: this[TZ_LOADING] || {} };
  },
});
