<template>
  <HeaderProductly/>
  <GetStarted/>
  <ButtonComponent/>
</template>

<script>
import HeaderProductly from './components/HeaderProductly.vue'
import GetStarted from "./components/GetStarted";
import ButtonComponent from './components/ButtonComponent'
//import i18n from "./i18n";
export default {
  name: 'App',
  components: {
    HeaderProductly,
    GetStarted,
    ButtonComponent
  }
}

</script>

<style>
</style>
