<template>
  <p>Hello</p>
  <HeaderComponent/>
  <GetStarted/>
  <ButtonComponent/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import GetStarted from "@/components/GetStarted";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "homeComponent",
  components: {
    HeaderComponent,
    GetStarted,
    ButtonComponent
  }
}
</script>

<style scoped>

</style>