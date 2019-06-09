<template>
  <el-menu :default-active="activeIndex" mode="horizontal">
    <el-submenu index="1">
      <template slot="title"
        >Menu</template
      >
      <nuxt-link to="/catalogues/groups">
        <el-menu-item index="1-1">Groups</el-menu-item>
      </nuxt-link>
      <el-menu-item index="1-2">item two</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title"
          >item four</template
        >
        <el-menu-item index="1-4-1">item one</el-menu-item>
        <el-menu-item index="1-4-2">item two</el-menu-item>
        <el-menu-item index="1-4-3">item three</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'Menu'
}
</script>
