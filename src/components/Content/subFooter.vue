<template>
  <div class="content-call-to-action">
        <h1>Try it out now!</h1>
        <button class="btn-primary" @click="download">Download</button>
  </div>
</template>

<script>

export default {
  name: 'sub-footer',
  components: {
      
  },
  methods: {
    download() {
      window.open('https://github.com/kyran123/WordLyst/releases/download/v1.0.0/WordLyst.Setup.1.0.0.exe', '_blank');
    }
  }
}
</script>

<style lang="scss">
    .content-call-to-action {
        margin-top: 12vh;
        margin-bottom: 12vh;
        h1 {
            margin-bottom: 55px;
            font-family: Bebas;
            letter-spacing: 3px;
            font-size: 2.5em;
        }
    }
</style>