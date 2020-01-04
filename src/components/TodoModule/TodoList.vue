<template>
  <div class="todo-list">
    <div class="todo-elements-list">
      <template v-for="(todo, index) in getTodos">
        <TodoElement :key="index" :index="index" :todo="{...todo}"/>
      </template>
    </div>
    <div class="todo-control-panel">
      <input
        type="text"
        class="form-control"
        v-model="newTodoText"
        placeholder="New Todo"
      >
      <button
        class="btn btn-primary"
        @click="createNewTodo()"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoElement from './TodoElement.vue';
import '@/assets/todo.css';

/**
 * @todo: Add store persist
 * @todo: made list order modifiable
 */
export default {
  data() {
    return {
      newTodoText: '',
    };
  },
  methods: {
    ...mapActions(['newTodo']),
    createNewTodo() {
      if (this.newTodoText.length > 0) {
        this.newTodo(this.newTodoText);
        this.newTodoText = '';
      }
    },
  },
  computed: {
    ...mapGetters(['getTodos']),
  },
  components: {
    TodoElement,
  },
};
</script>

<style scoped>
  input {
    margin-right: 1vw;
  }
</style>
