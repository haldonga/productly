<template>
  <div class="container">
    <div class="GetStarted">
      <div class="GetStarted_content">
        <div class="content_header"><h3>The Design Thinking superpowers</h3></div>
        <div class="content_text"><p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p></div>
        <div class="content_footer">
          <div class="content_footer-button"><p>Get started</p></div>
          <div class="content_footer-link">
            <img src="../img/footer-link_img.png" alt="footer-link_img">
            <a href="#">Watch the Video</a>
          </div>
        </div>
      </div>
      <div class="GetStarted_image"><img src="../img/GetStarted.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStarted"
}
</script>

<style scoped>
.container{
  width: 100%;
}
.GetStarted{
  height: 701px;
  width: 1600px;
  margin: 87px 122px 0px 88px;
  display: flex;
  justify-content: space-between;
}
.GetStarted_image{
  height: 701px;
  width: 860px;
}
.GetStarted_content{
  margin: 116px 0 0 0;
}
.content_header{
  height: 151px;
  width: 740px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: #2F281E;
  margin-bottom: 42px;
}
.content_header h3{
  margin: 0 auto;
}
.content_text{
  height: 133px;
  width: 653px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #544837;
  margin: 0 90px 63px 0;
}
.content_text p{
  margin: 0 auto;
}
.content_footer{
  margin: 0 221px 0 0;
  height: 74px;
  width: 522px;
  display: flex;
  justify-content: space-between;
}
.content_footer-button{
  height: 74px;
  width: 250px;
  background-color: #FF9900;
  border-radius: 5px;
  border: 1px #FF9900 solid;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  padding: 0;
}
.content_footer-button p{
  height: 24px;
  width: 132px;
  margin: 25px 58px;
}
.content_footer-link{
  margin: 21px 221px 10px 42px;
  display: flex;
  justify-content: space-between;
  height: 32px;
  width: 230px;
}
.content_footer-link img{
  height: 25px;
  width: 28px;
  margin: 0 12px 0 0;
}
.content_footer-link a{
  height: 24px;
  width: 193px;
  margin: 4px 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #FF9900;
}
</style>