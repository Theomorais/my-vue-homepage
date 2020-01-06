<template>
  <div class="floating-box">
    <div class="btn-close" @click="closePanel()">
      <i class="fa fa-times"></i>
    </div>
    <h1>Add a tool to your Dashboard</h1>
    <div class="tool-container">
      <div class="tool-block">
        <i class="fa fa-list"></i><br>
        New Todo
      </div>
      <div class="tool-block">
        <i class="fa fa-sticky-note"></i><br>
        New sticky note
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTool',
  props: ['closePanel'],
};
</script>
