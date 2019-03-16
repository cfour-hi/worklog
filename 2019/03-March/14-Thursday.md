## 计划任务

- [ ] 继续思考如何优化项目现有结构及开发模式

  无果

- [x] CRM v1.15 任务排期确定

  前端总共 3 天开发时间

## 临时任务

- [x] 优化按提单部门统计查询项上级部门

  查询项上级部门如果选择最后一级，没有子级部门的情况下，页面是查找不出任何数据的。  
  现需要调整，部门级联组件不显示最后一级，让用户无法选择。

- [x] 使用 vue-text-mask 完成一些基础组件

  element-ui 风格 vue-text-mask input 基础组件

  ```js
  <template>
    <div :class="[`el-input--${size}`]" class="el-input">
      <MaskedInput v-model="$_value" v-bind="$attrs" class="el-input__inner" v-on="$listeners"/>
    </div>
  </template>

  <script>
  import MaskedInput from 'vue-text-mask';

  export default {
    name: 'InputTextMask',

    components: {
      MaskedInput,
    },

    inheritAttrs: false,

    props: {
      value: { type: String, required: true, default: '' },
      size: { type: String, default: 'small' },
    },

    computed: {
      $_value: {
        get() {
          return String(this.value); // MaskedInput prop value type must String
        },
        set() {}, // 父组件使用 v-model 传递 input event 通过 $listeners 绑定到子组件
      },
    },
  };
  </script>
  ```

  中国手机号码 input 组件

  ```js
  <template>
  <InputTextMask v-model="$_value" :mask="mask" v-bind="$_attrs" v-on="$listeners"/>
  </template>

  <script>
  import InputTextMask from './InputTextMask';

  export default {
    name: 'InputChinaMobileNumber',

    components: {
      InputTextMask,
    },

    props: {
      value: { type: String, required: true, default: '' },
    },

    data() {
      return {
        mask: [1, /[3-5]|[7-8]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
      };
    },

    computed: {
      $_value: {
        get() {
          return this.value;
        },
        set() {}, // 父组件使用 v-model 传递 input event 通过 $listeners 绑定到子组件
      },

      $_attrs() {
        return {
          guide: false,
          placeholder: '请输入手机号码',
          ...this.$attrs,
        };
      },
    },
  };
  </script>
  ```

  QQ 号码 input 组件

  ```js
  <template>
  <InputTextMask v-model="$_value" :mask="mask" v-bind="$_attrs" v-on="$listeners"/>
  </template>

  <script>
  import InputTextMask from './InputTextMask';

  export default {
    name: 'InputQQNumber',

    components: {
      InputTextMask,
    },

    props: {
      value: { type: String, required: true, default: '' },
    },

    data() {
      return {
        mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
      };
    },

    computed: {
      $_value: {
        get() {
          return this.value;
        },
        set() {}, // 父组件使用 v-model 传递 input event 通过 $listeners 绑定到子组件
      },

      $_attrs() {
        return {
          guide: false,
          placeholder: '请输入 QQ 号码',
          ...this.$attrs,
        };
      },
    },
  };
  </script>
  ```

  优化 数值\金额 输入组件

  ```js
  <template>
  <InputTextMask v-model="$_value" :mask="mask" v-bind="$attrs" v-on="$listeners"/>
  </template>

  <script>
  import createNumberMask from 'text-mask-addons/dist/createNumberMask';
  import InputTextMask from './InputTextMask';

  export default {
    name: 'InputNumber',

    components: {
      InputTextMask,
    },

    inheritAttrs: false,

    props: {
      value: { type: [Number, String], default: undefined },
      includeThousandsSeparator: { type: Boolean, default: false }, // 是否包含千分位分隔符
      allowDecimal: { type: Boolean, default: false }, // 是否允许小数
      integerLimit: { type: Number, default: null }, // 整数部分长度
      size: { type: String, default: 'small' },
    },

    data() {
      return {
        mask: createNumberMask({
          prefix: '',
          includeThousandsSeparator: this.includeThousandsSeparator,
          allowDecimal: this.allowDecimal,
          integerLimit: this.integerLimit,
        }),
      };
    },

    computed: {
      $_value: {
        get() {
          return String(this.value); // MaskedInput prop value type must String
        },
        set() {}, // 父组件使用 v-model 传递 input event 通过 $listeners 绑定到子组件
      },
    },
  };
  </script>
  ```
