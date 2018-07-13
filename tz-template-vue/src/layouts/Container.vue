<template>
  <el-container id="app-container">
    <sidebar></sidebar>
    <el-container id="main-container" direction="vertical">
      <navbar></navbar>
      <app-main></app-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppMain from './Main';

export default {
  name: 'Container',
  components: { Navbar, Sidebar, AppMain },
};
</script>

<style scoped>
#app-container {
  position: relative;
  height: 100%;
}
</style>
