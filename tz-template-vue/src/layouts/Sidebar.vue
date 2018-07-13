<template>
  <el-aside id="app-sidebar" style="width: 220px;">
    <div class="tz-logo-wrap">
      <img src="../assets/logo.png" alt="logo" class="tz-logo">
    </div>
    <el-menu class="menu custom-scroll-bar" :default-active="$route.path" background-color="#304156"
      text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-aside>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  computed: {
    routes() {
      return this.$store.getters.menu;
    },
  },
};
</script>

<style scoped>
#app-sidebar {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.tz-logo-wrap {
  position: fixed;
  z-index: 2;
  left: 0;
  width: 219px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #304156;
}

#app-sidebar .menu {
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 219px;
  height: auto;
}

.tz-logo {
  width: 120px;
}
</style>
