<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <div class="container">
    <div class="header">
      <div class="header_logo">
        <img src="../img/Logo.jpg" alt="logo">
      </div>
      <div class="header_navbar">
        <ul class="header_navbar-ul">
          <li><a class="header_navbar-li" href="#">Product</a></li>
          <li><a class="header_navbar-li" href="#">Customers</a></li>
          <li><a class="header_navbar-li" href="#">Pricng</a></li>
          <li><a class="header_navbar-li" href="#">Resources</a></li>
        </ul>
      </div>
      <div class="header_buttons">
        <div class="header_buttons-signup">
          <ButtonComponent/>
          <ButtonComponent :buttonTitle = '$t("button.title1")'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent";
export default {
  name: "HeaderComponent",
  components: ButtonComponent,
  data:() => ({
    buttonTitle: ''
  })

}
</script>

<style scoped>
.container{
  width: 100%;
}
.header{
  height: 78px;
  width: 1400px;
  display: flex;
  justify-content: space-between;
}
.header_logo{
  height: 186px;
  width: 32px;
  margin: 22px 320px 24px 144px;
}
.header_navbar{
  margin: 24px 29px 26px 0;
  height: 28px;
  width: 350px;
}
.header_navbar-ul{
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
.header_navbar-li{
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #2F281E;
}
.header_buttons{
  display: flex;
  justify-content: space-between;
}
.header_buttons-signin button{
  margin: 15px 14px 17px 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #173A56;
  border: #BCD0E5 1px solid;
  border-radius: 5px;
  padding: 0;
  background-color: #FFF;
  height: 46px;
  width: 102px;
}
.header_buttons-signin p{
  height: 24px;
  width: 55px;
  margin:11px 22px 11px 25px;
}
.header_buttons-signup button{
  margin: 15px 145px 17px 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: #FF9900 1px solid;
  border-radius: 5px;
  padding: 0;
  background-color: #FF9900;
  height: 46px;
  width: 110px;
}
.header_buttons-signup p{
  height: 24px;
  width: 62px;
  margin:11px 23px 11px 25px;
}

</style>
