<template>
  <div id="app">
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    rel="stylesheet"
    integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
    crossorigin="anonymous">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import './assets/main.css';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>
