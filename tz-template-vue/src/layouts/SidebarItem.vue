<template>
  <div class="sidebar-item">
    <template v-for="route of routes">
      <el-submenu v-if="route.children && route.children.length && (route.children[0].path || route.children.length > 1)"
        :key="route.name" :index="route.path">
        <template slot="title">
          <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon"></svg-icon>
          <span slot="title">{{ route.meta.title }}</span>
        </template>
        <template v-for="subRoute of route.children">
          <sidebar-item v-if="subRoute.children && subRoute.children.length" :key="subRoute.name"
            :routes="[subRoute]">
          </sidebar-item>
          <router-link v-else :key="subRoute.name" :to="{ name: subRoute.name }">
            <el-menu-item :index="`${route.path}/${subRoute.path}`">
              <svg-icon v-if="subRoute.meta && subRoute.meta.icon" :icon-class="subRoute.meta.icon"></svg-icon>
              <span slot="title">{{ subRoute.meta.title }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      <router-link v-else :key="route.name" :to="`${route.path}/`">
        <el-menu-item v-if="route.children" :index="`${route.path}/`">
          <svg-icon v-if="route.children[0].meta && route.children[0].meta.icon" :icon-class="route.children[0].meta.icon"></svg-icon>
          <span slot="title">{{ route.children[0].meta && route.children[0].meta.title }}</span>
        </el-menu-item>
        <el-menu-item v-else :index="route.path">
          <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon"></svg-icon>
          <span slot="title">{{ route.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: { type: Array, required: true },
  },
};
</script>

<style>
.sidebar-item .svg-icon {
  margin-right: 10px;
}
</style>
