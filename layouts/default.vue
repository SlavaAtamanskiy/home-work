<template>
  <div id="home-work-basic-layout">
    <div class="header header-default">
      <div class="home-work-menu"><Menu /></div>
      <h2 class="logo">HOME <span class="part-2">WORK</span></h2>
      <UserPanel />
    </div>
    <section class="home-work-main">
      <nuxt />
    </section>
    <div class="footer">
      <div class="links">
        <span @click="home()">Main</span> <span>Contacts</span>
        <span>About</span>
      </div>
      <div class="version">Version 1.0.01</div>
    </div>
  </div>
</template>

<script>
import UserPanel from '~/components/header/user-panel.vue'
import Menu from '~/components/header/menu.vue'

export default {
  components: {
    UserPanel,
    Menu
  },
  methods: {
    home() {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
@import '@/assets/css/styles.min.css';
</style>
