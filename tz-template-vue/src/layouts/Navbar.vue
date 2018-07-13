<template>
  <el-header id="app-header">
    <el-menu class="navbar" mode="horizontal">
      <el-menu-item v-for="system of systems" :key="system.sysId" :index="system.code">
        <a :href="`${system.url}?token=${user.token}`" target="_blank">{{ system.name }}</a>
      </el-menu-item>
      <div class="right">
        <span class="user-info">
          <svg-icon iconClass="user"></svg-icon>
          <span>{{ user.info.name }}</span>
          <svg-icon iconClass="phone" style="font-size: 21px;"></svg-icon>
          <span>{{ user.info.tanzkAccount }}</span>
          <svg-icon iconClass="department" style="font-size: 20px;"></svg-icon>
          <span>{{ user.info.deptName }}</span>
        </span>
        <router-link to="/">
          <svg-icon iconClass="home"></svg-icon>
        </router-link>
        <svg-icon iconClass="logout" @click.native="handleLogout"></svg-icon>
      </div>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    user() {
      return this.$store.state.user;
    },
    systems() {
      return this.$store.getters.systemsExcludeSelf;
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logOut');
    },
  },
};
</script>

<style scoped>
#app-header {
  padding: 0;
  line-height: 55px;
  font-size: 13px;
}

.right {
  float: right;
  margin-right: 15px;
}

.svg-icon {
  margin: 0 15px;
  font-size: 18px;
  color: #1f2328;
  cursor: pointer;
}

.user-info {
  margin-right: 10px;
}

.user-info .svg-icon {
  margin: 0 5px 0 15px;
}
</style>

<style>
#app-header .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  color: #909399;
}
</style>

