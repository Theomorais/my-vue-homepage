import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import TodoModule from './TodoModule/todo';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuexHompage',
  storage: window.localStorage,
  // add modules that you want to presist here
  reducer: state => ({
    TodoModule: state.TodoModule,
  }),
});

export default new Vuex.Store({
  modules: {
    TodoModule,
  },
  plugins: [vuexLocalStorage.plugin],
});
