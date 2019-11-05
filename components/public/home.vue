<template>
  <div class="card-container max-w-full min-h-xs">
    <div class="card card-news">
      <img
        class="w-full"
        src="../../assets/images/home_page/news.jpg"
        alt="News"
      />
      <a href="#" class="button button-news">News</a>
    </div>
    <div class="card card-sing-up">
      <img
        class="w-full"
        src="../../assets/images/home_page/register.jpg"
        alt="News"
      />
      <nuxt-link to="/register" class="button button-sign-up"
        >Sing up</nuxt-link
      >
    </div>
    <div class="card card-sign-in">
      <img
        class="w-full"
        src="../../assets/images/home_page/login.jpg"
        alt="News"
      />
      <nuxt-link to="/login" class="button button-sign-in">Sing in</nuxt-link>
    </div>
    <div class="card card-support">
      <img
        class="w-full"
        src="../../assets/images/home_page/support.jpg"
        alt="News"
      />
      <a href="#" class="button button-support">Support</a>
    </div>
    <div class="card card-about">
      <img
        class="w-full"
        src="../../assets/images/home_page/about.jpg"
        alt="News"
      />
      <a href="#" class="button button-about">About</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
