<template>
  <div class="content-features">
        <h1>Features</h1>
        <div class="content-card-container-light">
            <div class="content-card">
                <div class="left-column">
                    <h3>15.000+ words!</h3>
                    Regularly updated database with over 15.000 words!
                </div>
                <div class="right-column">
                    <div class="feature-highlight"></div>
                </div>
            </div>
        </div>
        <div class="content-card-container-white">
            <div class="content-card">
                <div class="left-column">
                    <div class="feature-highlight"></div>
                </div>
                <div class="right-column">
                    <h3>Quick word definitions!</h3>
                    Click any word to get the definition, synonyms and usage!
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'content-features',
  components: {
      
  }
}
</script>

<style lang="scss">
    .content-features {
        width: 100vw;
        display: grid;
        grid-template-rows: 1fr;

        h1 {
            margin-top: 35px;
            margin-bottom: 55px;
            font-family: Bebas;
            letter-spacing: 3px;
        }
        .content-card-container-light {
            background: #eee;
        }
        .content-card-container-white {
            background: #fff;
        }
        .content-card {
            width: 50vw;
            margin: auto;
            padding: 5em;
            display: grid;
            grid-template-columns: 1fr 1fr;

            .left-column {
                text-align: left;
            }
            .right-column {
                text-align: right;
            }
            .feature-highlight {
                background: url("../../assets/Images/Lines.png");
                background-size: contain;
                background-repeat: no-repeat;
                height: 20vw; 
            }
        }
        
    }
</style>