<template>
  <p class="todo-element">
    <template v-if="editable === false">
      <input
        :id="`todo-${index}`"
        class="form-control"
        type="checkbox"
        @click="doneUndoneTodo(index)"
        :checked="todo.done"
      >
      <label :for="`todo-${index}`">{{todo.text}}</label>
      <i @click="deleteTodo(index)" class="todo-icon fa fa-trash"></i>
      <i @click="editable = true" class="todo-icon fa fa-pencil"></i>
    </template>
    <template v-else>
      <input
        type="text"
        class="form-control"
        v-model="tmpText"
        @keyup.enter="handleChange()"
      />
      <i @click="handleChange()" class="todo-icon fa fa-check"></i>
      <i @click="editable = false" class="todo-icon fa fa-times"></i>
    </template>
  </p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoElement',
  data() {
    return {
      editable: false,
      tmpText: this.todo.text || '',
    };
  },
  props: {
    index: {
      required: true,
      type: Number,
    },
    todo: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions(['doneUndoneTodo', 'deleteTodo', 'changeTodo']),
    handleChange() {
      if (this.tmpText.length > 0) {
        this.changeTodo({ index: this.index, text: this.tmpText });
        this.editable = false;
      }
    },
  },
};
</script>
