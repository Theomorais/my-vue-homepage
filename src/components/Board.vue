<template>
  <div>
    <div
      class="floating-btn btn btn-main btn-icon"
      @click="addTool()"
    >
      +
    </div>
    <AddTool v-if="displayAddTool" :close-panel="closeTool"/>
  </div>
</template>

<script>
import AddTool from './ToolsModule/AddTool.vue';

export default {
  name: 'Board',
  data() {
    return {
      displayAddTool: false,
    };
  },
  methods: {
    addTool() {
      this.displayAddTool = true;
    },
    closeTool() {
      this.displayAddTool = false;
    },
  },
  components: {
    AddTool,
  },
};
</script>
