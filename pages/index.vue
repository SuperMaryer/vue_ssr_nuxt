<template>
  <section class="container">
      <nuxt-link to="/school">跳转到school</nuxt-link>
      <br>
      <button @click="jumpTo">跳转到school student</button>
      <br>
      <!-- 直接使用a标签跳转相当于刷新页面 -->
      <a href="/school">跳转到school</a>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  methods:{
    jumpTo(){
      this.$router.push({path:'/school/student'})
      // this.$router.push({name:'student'})
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
