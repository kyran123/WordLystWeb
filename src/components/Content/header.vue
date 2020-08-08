<template>
  <div class="content-header">
    <div class="headerText">WordLyst</div>
    <div class="subText">Writing aids in one single application for every writer.</div>
    <div class="interactions">
      <button class="btn-primary" @click="download">Download now</button>
      <button class="btn-secondary" @click="scrollTo">Learn more</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'content-header',
  components: {
  },
  methods: {
    scrollTo() {
      var element = document.querySelector("#content-features");
      element.scrollIntoView({ behavior: 'smooth'});
    },
    download() {
      window.open('https://github.com/kyran123/WordLyst/releases/download/v1.0.0/WordLyst.Setup.1.0.0.exe', '_blank');
    }
  }
}
</script>

<style lang="scss">
    .content-header {
        width: 100%;
        margin-top: auto;
        margin-bottom: 20vh;
        .headerText {
            text-align: center;
            font-family: Bebas;
            font-size: 5em;
            color: #fff;
            letter-spacing: 5px;
        }
        .subText {
            text-align: center;
            font-family: Montserrat-light;
            font-size: 1.5em;
            color: #ddd;
            text-shadow: 0 0 1px #fff;
            letter-spacing: 1px;
        }
        .interactions {
          margin-top: 20px;
        }
    }
</style>