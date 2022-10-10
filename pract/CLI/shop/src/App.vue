<template>
  <div class ="home-router">
    <router-link to="/">Go to Home </router-link>
    <router-link to="/home1">Go to Home1</router-link>
    <router-link to="/home2">Go to Home2</router-link>
    <main>
      <router-view/>
    </main>
  </div>
  
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
.home-router {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}
body, html {
  margin: 0;
  padding: 0;
}
</style>
