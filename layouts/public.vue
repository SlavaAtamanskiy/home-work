<template>
  <div id="home-work-basic-layout">
    <div class="header header-public">
      <h2 class="logo">HOME <span class="part-2">WORK</span></h2>
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
export default {
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
