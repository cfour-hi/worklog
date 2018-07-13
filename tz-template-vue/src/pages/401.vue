<template>
  <div id="page__401" v-once>
    <el-button @click="handleBack" icon='arrow-left' class="pan-back-btn">首页</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <h5>如有不满请联系你领导</h5>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGif from '@/assets/401.gif';

export default {
  name: 'Page401',
  data() {
    return {
      errGif,
      ewizardClap:
        'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false,
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
#page__401 {
  width: 800px;
  padding-top: 100px;
  margin: 0 auto;
}

.pan-back-btn {
  background: #008489;
  color: #fff;
}

.text-jumbo {
  font-size: 60px;
  font-weight: 700;
  color: #484848;
}

.list-unstyled {
  font-size: 14px;
}
</style>

<style>
#page__401 .list-unstyled li {
  padding-bottom: 5px;
}

#page__401 .list-unstyled a {
  color: #008489;
  text-decoration: none;
}

#page__401 .list-unstyled a:hover {
  text-decoration: underline;
}
</style>
