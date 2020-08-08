<template>
  <overlay-scrollbars id="app">
    <router-view/>
  </overlay-scrollbars>
</template>

<script>
  import 'overlayscrollbars/css/OverlayScrollbars.css';

  export default {
    
  }
</script>>

<style lang="scss">
  @font-face {
    font-family: 'Montserrat-light';
    src: url('./assets/Fonts/Montserrat-Light.ttf');
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/Fonts/Montserrat-Medium.ttf');
  }
  @font-face {
    font-family: 'Bebas';
    src: url('./assets/Fonts/BebasNeue-Regular.ttf');
  }
  :root {
    --lighter-blue: #87B7D3;
    --light-blue: #2484C1;
    --blue: #1C5A9B;
    --white: #fff;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
  #app {
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-y: scroll;
    overflow: overlay;
  }
  .linkedin {
    mask: url("./assets/Icons/Social Media/linkedin.svg") no-repeat / center / contain; 
    -webkit-mask: url("./assets/Icons/Social Media/linkedin.svg") no-repeat center / contain;
  }
  .github {
    mask: url("./assets/Icons/Social Media/github.svg") no-repeat / center / contain; 
    -webkit-mask: url("./assets/Icons/Social Media/github.svg") no-repeat center / contain;
    width: 120% !important;
    height: 120% !important;
    margin-top: -8.5%;
    margin-left: -10%;
  }
  .os-theme-dark > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle {
    background: rgba(0, 0, 0, 0.6);
  }
  .os-theme-dark > .os-scrollbar:hover > .os-scrollbar-track > .os-scrollbar-handle {
    background: rgba(0, 0, 0, .85)
  }
  .btn-primary { 
          top: 25px;
          background-color: transparent;
          border: none;
          border-radius: 5px;
          padding: 7px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: 5px;
          margin-right: 5px;
          outline: none;
          background-color: var(--light-blue);
          font-family: Montserrat;
          color: #fff;
          font-size: 1.1em;

          &:hover {
            cursor: pointer;
            background-color: var(--blue);
          }
        }
        .btn-secondary {
          top: 25px;
          background-color: transparent;
          border: 1px solid #aaa;
          border-radius: 5px;
          padding: 7px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: 5px;
          margin-right: 5px;
          outline: none;
          font-family: Montserrat;
          color: #eee;
          font-size: 1.1em;
          &:hover {
            cursor: pointer;
            background-color: rgba(122, 122, 122, 0.2);
            border: 1px solid #ccc;
            color: #fff;
          }
        }
</style>
