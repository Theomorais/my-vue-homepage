import Vue from 'vue';
import Vuex from 'vuex';
import TodoModule from './TodoModule/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoModule,
  },
});
