<template>
  <Home />
</template>

<script>
import Home from '~/components/public/home.vue'

export default {
  components: {
    Home
  },
  layout() {
    return 'public'
  }
}
</script>
