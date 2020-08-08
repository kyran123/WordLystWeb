<template>
  <div class="home">
    <div class="home-content">
      <content-main></content-main>
    </div>
    <content-features></content-features>
    <sub-footer></sub-footer>
    <footer-component></footer-component>
  </div>
</template>

<script>
// @ is an alias to /src
import footerComponent from '../components/FooterComponent';
import subFooter from '../components/Content/subFooter';
import contentFeatures from '../components/Content/featuresAlt';
import contentMain from '../components/Content/main';

export default {
  name: 'Home',
  components: {
    contentMain,
    contentFeatures,
    subFooter,
    footerComponent
  }
}
</script>

<style lang="scss">
  .home {
    .home-content {
      background: url('../assets/Images/backgroundProduction.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 0;
    }
  }
  
</style>