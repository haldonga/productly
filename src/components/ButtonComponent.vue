<template>
  <div class="ButtonComponent">
    <button>{{title}}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>