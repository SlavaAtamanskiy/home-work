<template>
  <div class="">
    <h1>{{ title }}</h1>
    <ul id="example-1">
      <li v-for="item in all" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Groups'
    }
  },
  computed: {
    all() {
      return this.$store.state.groups.all
    }
  },
  fetch({ store }) {
    return store.dispatch('groups/getAll')
  },
  methods: {}
}
</script>
