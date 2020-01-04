<template>
  <nav id="nav-bar">
    <div class="nav-element">
      <router-link to="/">Home</router-link>
    </div>
    <div class="nav-element">
      <router-link to="/todo">Todo List</router-link>
    </div>
  </nav>
</template>

<script>
import '@/assets/navbar.css';

export default {
  name: 'NavBar',
};
</script>

<style>
</style>
