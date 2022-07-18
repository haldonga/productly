<template>
  <div class="Button">
    <button>{{buttonTitle}}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    buttonTitle: {
      type: String
    }
  },
}
</script>

<style scoped>

</style>