<template>
  <div class="content-main">
      <content-header></content-header>
      <div class="content-program"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import contentHeader from './header';

export default {
  name: 'content-main',
  components: {
    contentHeader
  }
}
</script>

<style lang="scss">
  .content-main {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-items: center;
    display: grid;
    grid-template-rows: 3fr 1fr;

    .content-program {
      width: 50vw;
      margin-top: -10vh;
      background: url('../../assets/Images/programSimple.png');
      background-size: cover;
      background-repeat: no-repeat;
      border-left: 1px solid rgba(0, 0, 0, 0.3);
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      z-index: 10;
    }
  }
</style>