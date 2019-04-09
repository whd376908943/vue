<template>
<a-layout-header class="header">
  <header-avatar></header-avatar>
</a-layout-header>
</template>

<script>
import HeaderAvatar from './HeaderAvatar'

export default {
  components:{HeaderAvatar}
}
</script>


<style>
.header {
  background: #fff;
  padding: 0;
  padding-right: 50px;
}


</style>
