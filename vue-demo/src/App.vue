<template>
  <div id="app">
    <header>
      <el-menu class="header-menu" theme="dark" mode="horizontal" :default-active="$route.path" router>
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/overview" @click="gotoOverview">概览</el-menu-item>
        <el-submenu class="cloud-product" index="/">
          <template slot="title">云产品</template>
          <li class="category-item" v-for="(cgs, key) in category" :key="key">
            <ol class="module-list">
              <li class="category-item__title">{{key}}</li>
              <el-menu-item class="module-item" v-for="(cg, index) in cgs" :key="cg.id" :index="cg.route" @click="selectModule(key, index)">{{cg.name}}</el-menu-item>
            </ol>
          </li>
        </el-submenu>
      </el-menu>
    </header>
    <transition name="sidebar">
      <aside v-if="showSidebar">
        <el-row>
          <el-col>
            <h2>{{currentModule.name}}</h2>
            <el-menu :default-active="$route.path" route>
              <!--<template v-for="menu in sidebar">
                <template v-if="menu.pages.length > 1">
                  <el-submenu :key="menu.id" :index="menu.route">
                    <template slot="title">{{menu.name}}</template>
                    <el-menu-item-group>
                      <el-menu-item v-for="page in menu.pages" :key="page.id" :index="page.route">{{page.name}}</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </template>
                <template v-else>-->
                  <el-menu-item v-for="menu in sidebar" :key="menu.id" :index="menu.route">{{menu.name}}</el-menu-item>
                <!--</template>
              </template>-->
            </el-menu>
          </el-col>
        </el-row>
      </aside>
    </transition>
    <transition name="main">
      <main>
        <router-view></router-view>
      </main>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: {},
      sidebar: [],
      currentModule: {}
    };
  },
  computed: {
    showSidebar () {
      return this.$store.state.showSidebar
    }
  },
  created () {
    this.$store.commit('openLoading', { ctx: this })

    this.$http.get('/api/modules').then((response) => {
        this.$store.commit('closeLoading')

        response.data.forEach((item) => {
          if (this.category[item.type.name]) {
            this.category[item.type.name].push(item)
          } else {
            this.$set(this.category, item.type.name, [item])
          }

          if (this.$route.path === item.route) {
            this.$set(this, 'currentModule', item)
            this.$set(this, 'sidebar', item.childMenus)

            if (this.sidebar && this.sidebar.length > 0) {
              this.$store.commit('toggleSidebar', { state: true })
            }
          }
        });
    }).catch((error) => {
      console.log(error);
    })
  },
  methods: {
    selectModule (key, index) {
      this.$set(this, 'currentModule', this.category[key][index])
      this.$set(this, 'sidebar', this.currentModule.childMenus)

      let sidebarState = this.$store.state.showSidebar
      if (this.sidebar && this.sidebar.length > 0) {
        if (!sidebarState) this.$store.commit('toggleSidebar', { state: true })
      } else {
        if (sidebarState) this.$store.commit('toggleSidebar', { state: false })
      }
    },
    gotoOverview () {
      this.$store.commit('toggleSidebar', { state: false })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

header {
  position: fixed;
  z-index: 1;
  top: 0; right: 0; left: 0;
}

aside {
  position: fixed;
  top: 60px; left: 0; bottom: 0;
  width: 200px;
  background-color: #eef1f6;
}

main {
  position: absolute;
  top: 60px; right: 0; left: 0;
  padding: 20px;
  transition: all .3s;
  margin-left: 200px;
}

aside + main {
  margin-left: 200px;
}
aside.sidebar-leave-active + main,
header + main {
  margin-left: 0;
}

aside .el-menu {
  overflow: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header-menu .cloud-product ul.el-menu {
  width: 1150px;
  padding: 20px;
}
header .category-item {
  vertical-align: top;
  display: inline-block;
  width: 165px;
  margin: 10px;
}
header .module-list {
  padding-left: 0;
}
header .category-item__title {
  font-size: 14px;
  line-height: 30px;
  margin: 0 0 5px;
  color: #6c747f;
  border-bottom: 1px solid #d3dce6;
}

.sidebar-enter-active, .sidebar-leave-active {
  transition: margin-left .3s;
}
.sidebar-enter {
  margin-left: -200px;
}
.sidebar-leave-active {
  margin-left: -200px;
}
</style>
