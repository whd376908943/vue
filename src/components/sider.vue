<template>
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline" @click='jump'>
        <a-menu-item key="dashboard">
          <a-icon type="pie-chart" />
          <span>Dashboard</span>
        </a-menu-item>
        <a-sub-menu
          key="sub1"
        >
          <span slot="title"><a-icon type="user" /><span>生产发布</span></span>
          <a-menu-item key="tomcat">Tomcat</a-menu-item>
          <a-menu-item key="node">Node</a-menu-item>
        </a-sub-menu>
        <a-sub-menu
          key="sub2"
        >
          <span slot="title"><a-icon type="team" /><span>数据修改</span></span>
          <a-menu-item key="4">数据修改</a-menu-item>
          <a-menu-item key="5">表结构修改</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="6">
          <a-icon type="file" />
          <span>发布历史</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods:{
    jump(e){
        this.$router.push({name:e.key})
    }
  }
}
</script>
