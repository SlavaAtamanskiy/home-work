<template>
  <div class="flex flex-col h-full">
    <header class="w-full text-center border-b border-grey p-4">
      <div class="home-work-menu"><Menu /></div>
      <h2 class="logo">HOME <span class="part-2">WORK</span></h2>
      <UserPanel />
    </header>
    <section class="flex-1 mx-auto p-8">
      <nuxt />
    </section>
    <footer class="w-full text-center border-t border-grey p-4 pin-b">
      <div class="links">
        <span @click="home()">Main</span> <span>Contacts</span>
        <span>About</span>
      </div>
      <div class="version">Version 1.0.01</div>
    </footer>
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
