<template>
  <div>
    <!-- Preloader -->
    <div id="preloader">
      <div data-loader="dual-ring"></div>
    </div>
    <!-- Preloader End -->
    <!-- Document Wrapper   
    =============================================-->
    <div id="main-wrapper">
      <Header />
      <!-- Content
      =============================================-->
      <div id="content" >
        <ServicesMenu />
          <nuxt />
      </div>
    </div>
    <LoginModal />
  </div>
</template>

<style>
</style>

<script>
import ServicesMenu from "@/components/ServicesMenu";
import Header from "@/components/Header";
import LoginModal from "@/components/LoginModal";
import "vuejs-noty/dist/vuejs-noty.css";
export default {
  components: {
    ServicesMenu,
    Header,
    LoginModal
  },
  head() {
    return {
      script: [
        {
          src: "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"
        }
      ]
    };
  }
};
</script>


<style>
#main-wrapper {
  min-height: 100vh;
  height: 100%;
}
</style>
