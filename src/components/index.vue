<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <!-- 左侧栏 -->
    <index-sider></index-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
      
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="bc in breadcrumbList" :key="bc.name">
            {{  bc.name  }}
          </a-breadcrumb-item>
        </a-breadcrumb>        

        <!-- 文本内容content -->
        <router-view></router-view>
      </a-layout-content>
      <index-footer></index-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import indexSider from './sider'
import indexFooter from './footer'
import {mapState} from 'vuex'

export default {
  components: { indexSider,indexFooter },
  computed: {
    ...mapState({
      breadcrumbList:state=>state.route.meta
    })
  }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
