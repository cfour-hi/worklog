<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  height: 100%;
}
</style>

<style>
@import './styles/base.css';
@import './styles/element-ui.css';
@import './styles/app.css';
</style>
