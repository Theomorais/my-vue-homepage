<template>
  <div class="about">
    <h1>Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoModule/TodoList.vue';

export default {
  name: 'TodoView',
  components: {
    TodoList,
  },
};
</script>

<style>

</style>
