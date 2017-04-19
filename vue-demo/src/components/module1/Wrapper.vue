<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Module1Wrapper',
  data () {
    return {
      msg: 'This is module 1 wrapper'
    }
  }
}
</script>

