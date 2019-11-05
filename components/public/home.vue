<template>
  <div class="card-container max-w-full min-h-xs">
    <div v-for="(item, i) in items" :key="i" :class="item.class">
      <img class="w-full" :src="baseURL + item.img" :alt="item.title" />
      <nuxt-link :to="item.route" class="button">{{ item.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    baseURL:
      'https://raw.githubusercontent.com/SlavaAtamanskiy/home-work/master/assets/images/home_page/',
    items: [
      {
        title: 'News',
        class: 'card card-news',
        img: 'news.jpg',
        route: '#'
      },
      {
        title: 'Sing up',
        class: 'card card-sing-up',
        img: 'register.jpg',
        route: '/register'
      },
      {
        title: 'Sing in',
        class: 'card card-sing-in',
        img: 'login.jpg',
        route: '/login'
      },
      {
        title: 'Support',
        class: 'card card-support',
        img: 'support.jpg',
        route: '#'
      },
      {
        title: 'About',
        class: 'card card-about',
        img: 'about.jpg',
        route: '#'
      }
    ]
  })
}
</script>
