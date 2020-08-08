<template>
  <div id="content-features">
        <h1>Features</h1>
        <div class="content-card-container">
            <div class="content-card">
                <img src="../../assets/Icons/User Interface/database.svg">
                <h3>Over 3.000 words!</h3>
                <p>Regularly updated database with over 3.000 words at your fingertips!</p>
            </div>
            <div class="content-card">
                <img src="../../assets/Icons/User Interface/definition.svg">
                <h3>Word definitions!</h3>
                <p>You are just 1 click away from finding the word's definitions, synonyms and usage!</p>
            </div>
            <div class="content-card">
                <img src="../../assets/Icons/User Interface/darkMode.svg">
                <h3>Dark mode!</h3>
                <p>For the night owls WordLyst has dark mode support, so you don't get blinded while using our program!</p>
            </div>
        </div>
        <div class="content-card-container">
            <div class="content-card">
                <img src="../../assets/Icons/User Interface/clipboard.svg">
                <h3>Spellchecking!</h3>
                <p>Not quite sure how to spell a word? Just search it and WordLyst will suggest the words you might be looking for!</p>
            </div>
            <div class="content-card">
                <img src="../../assets/Icons/User Interface/learning.svg">
                <h3>Owlbot Dictionary</h3>
                <p>WordLyst uses Owlbot's extensive english dictionary API for the most comprehensive results!</p>
            </div>
            <div class="content-card">
                <img src="../../assets/Icons/User Interface/discount.svg">
                <h3>No cost</h3>
                <p>WordLyst is completely free and always will be free!</p>
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
    #content-features {
        display: grid;
        grid-template-rows: 1fr;
        background: #f8f8f8;
        padding: 5em;
        border-top: 1px solid #cdd3d4;
        border-bottom: 1px solid #cdd3d4;

        h1 {
            margin-top: 35px;
            margin-bottom: 55px;
            font-family: Bebas;
            letter-spacing: 3px;
            font-size: 2.5em;
        }
        .content-card-container {
            width: 50vw;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 5vw;
            margin-bottom: 10vh;

            .content-card {
                background: #fff;
                border: 1px solid #cdd3d4;
                padding: 2em;

                h3 {
                    font-family: Montserrat;
                    font-size: 1.25em;
                    color: var(--light-blue);
                }
                p {

                }
                img {
                    width: 40%;
                    opacity: 0.75;
                }
            }
        }
    }
</style>