<template>
  <Register />
</template>

<script>
import Register from '~/components/public/register.vue'

export default {
  components: {
    Register
  },
  layout() {
    return 'public'
  }
}
</script>
