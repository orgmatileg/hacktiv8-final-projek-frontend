<template>
  <div class="notification is-danger">
    <button @click="handleClose" class="delete"></button>
    {{message}}
  </div>
</template>

<script>
export default {
  name: "ErrorNotification",
  props: {
    message: { type: String, required: true },
    handleClose: { type: Function, required: true }
  }
};
</script>

<style scoped>
</style>