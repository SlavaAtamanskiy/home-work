<template>
  <section id="content-body">
    <div class="wrapper">
      <el-card
        class="card-news"
        shadow="always"
        :body-style="{ padding: '0px' }"
        ><img src="../../assets/images/home_page/news.jpg" class="image" />
        <a href="#" class="button button-news">News</a></el-card
      >
      <el-card
        class="card-sing-up"
        shadow="always"
        :body-style="{ padding: '0px' }"
        ><img src="../../assets/images/home_page/register.jpg" class="image" />
        <nuxt-link to="/register" class="button button-sign-up"
          >Sing up</nuxt-link
        ></el-card
      >
      <el-card
        class="card-sign-in"
        shadow="always"
        :body-style="{ padding: '0px' }"
        ><img
          src="../../assets/images/home_page/login.jpg"
          class="image"
        /><nuxt-link to="/login" class="button button-sign-in"
          >Sing in</nuxt-link
        ></el-card
      >
      <el-card
        class="card-support"
        shadow="always"
        :body-style="{ padding: '0px' }"
        ><img src="../../assets/images/home_page/support.jpg" class="image" /><a
          href="#"
          class="button button-support"
          >Support</a
        ></el-card
      >
      <el-card
        class="card-about"
        shadow="always"
        :body-style="{ padding: '0px' }"
        ><img src="../../assets/images/home_page/about.jpg" class="image" /><a
          href="#"
          class="button button-about"
          >About</a
        ></el-card
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Calibri', sans-serif;
}
.el-card {
  position: absolute;
  text-align: center;
  height: 12rem;
  width: 12rem;
  -webkit-transition: -webkit-transform 1s ease-in;
  transition: -webkit-transform 1s ease-in;
  -o-transition: transform 1s ease-in;
  transition: transform 1s ease-in;
  transition: transform 1s ease-in, -webkit-transform 1s ease-in;
  -webkit-transition-delay: 1s;
  -o-transition-delay: 1s;
  transition-delay: 1s;
}
.el-card img {
  height: 9rem;
  width: 12rem;
}
.button {
  line-height: 2.2rem;
  color: #007c89;
  text-decoration: none;
}
.button:hover,
.button:focus,
.button:active {
  cursor: pointer;
  color: #009cad;
}
@media (max-width: 812px) {
  .sm {
    display: none;
  }
  .button {
    position: static;
    margin: 2rem;
  }
  .wrapper:hover .button {
    -webkit-transform: translateX(0) !important;
    -ms-transform: translateX(0) !important;
    transform: translateX(0) !important;
  }
  #content-body {
    height: 100vh !important;
    overflow: auto;
  }
}
#content-body {
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.wrapper {
  display: flex;
  justify-content: center;
  position: fixed;
  flex-flow: row wrap;
  width: 2850px;
  max-width: 100%;
  min-height: 15rem;
}
#content-body .wrapper:hover .card-news {
  -webkit-transform: translateX(-26rem);
  -ms-transform: translateX(-26rem);
  transform: translateX(-26rem);
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
#content-body .wrapper:hover .card-sing-up {
  -webkit-transform: translateX(-13rem);
  -ms-transform: translateX(-13rem);
  transform: translateX(-13rem);
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
#content-body .wrapper:hover .card-support {
  -webkit-transform: translateX(13rem);
  -ms-transform: translateX(13rem);
  transform: translateX(13rem);
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
#content-body .wrapper:hover .card-about {
  -webkit-transform: translateX(26rem);
  -ms-transform: translateX(26rem);
  transform: translateX(26rem);
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
#content-body .button:hover {
  opacity: 0.8;
}
</style>
