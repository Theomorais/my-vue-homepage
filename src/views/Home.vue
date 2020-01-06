<template>
  <div class="home">
    <Board />
  </div>
</template>

<script>
import Board from '@/components/Board.vue';
import '@/assets/board.css';

export default {
  name: 'Home',
  components: {
    Board,
  },
};
</script>
