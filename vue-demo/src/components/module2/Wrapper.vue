<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Module2Wrapper',
  data () {
    return {
      msg: 'This is module 2 wrapper'
    }
  }
}
</script>

