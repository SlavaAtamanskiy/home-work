<template>
  <Login />
</template>

<script>
import Login from '~/components/public/login.vue'

export default {
  components: {
    Login
  },
  layout() {
    return 'public'
  }
}
</script>
