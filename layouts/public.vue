<template>
  <div class="flex flex-col h-screen">
    <header class="w-full text-center border-b border-grey p-2">
      <h2 class="font-bold text-xl text-simple-dark">
        HOME <span class="text-danger">WORK</span>
      </h2>
    </header>
    <section
      class="flex items-center justify-center w-full h-full bg-cover-image bg-fixed pb-10"
    >
      <nuxt />
    </section>
    <footer
      class="absolute bottom-0 bg-gray-700 w-full text-center border-t border-simple-dark"
    >
      <div class="font-bold text-white mt-1 mb-4">
        <span class="mx-5 cursor-pointer" @click="home()">Main</span>
        <span class="mx-5 cursor-pointer">Contacts</span>
        <span class="mx-5 cursor-pointer">About</span>
      </div>
    </footer>
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
