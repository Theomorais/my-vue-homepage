/**
 * aTodo is an array of todo
 * todo: {
 *  id: Number,
 *  text: String,
 *  done: Boolean,
 * }
 */
const state = {
  aTodos: [],
};

const getters = {
  getTodos: paramState => paramState.aTodos,
};

const mutations = {
  ADD_NEW_TODO(paramState, newTodo) {
    paramState.aTodos.push(newTodo);
  },
  DELETE_TODO(paramState, indexToRemove) {
    paramState.aTodos.splice(indexToRemove, 1);
  },
  CHANGE_DONE_TODO(paramState, indexToChange) {
    if (indexToChange !== undefined && paramState.aTodos[indexToChange]) {
      paramState.aTodos[indexToChange].done = !paramState.aTodos[indexToChange].done;
    } else {
      console.error(`Unable to find index: ${indexToChange} in aTodos`);
    }
  },
  /**
   * @param { index: Number, text: String } oItem
   */
  EDIT_TODO(paramState, oItem) {
    if (oItem.index !== undefined
          && oItem.text
          && paramState.aTodos[oItem.index]
    ) {
      paramState.aTodos[oItem.index].text = oItem.text;
    } else {
      console.error(`Unable to find index: ${oItem.index} in aTodos`);
    }
  },
};

const actions = {
  newTodo(paramStore, sTodoText) {
    paramStore.commit('ADD_NEW_TODO', { text: sTodoText, done: false });
  },
  deleteTodo(paramStore, indexToDelete) {
    paramStore.commit('DELETE_TODO', indexToDelete);
  },
  doneUndoneTodo(paramStore, indexToChange) {
    paramStore.commit('CHANGE_DONE_TODO', indexToChange);
  },
  changeTodo(paramStore, oItem) {
    paramStore.commit('EDIT_TODO', oItem);
  },
};

const TodoModule = {
  state,
  getters,
  mutations,
  actions,
};

export default TodoModule;
