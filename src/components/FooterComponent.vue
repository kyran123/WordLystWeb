<template>
    <div class="footer-container">
        <div class="socialMedia">
            <!--&copy;--> WordLyst by <a href="https://kylefransen.nl">Kyle Fransen</a>
            <div class="mediaIcons">
                <a href="http://linkedin.com/in/kyle-fransen-273475151/" class="mediaIcon linkedin"></a>
                <a href="https://github.com/kyran123" class="mediaIcon github"></a>
            </div>
        </div>
    </div>
</template>




<script>
    export default {
        name: "footer-component"
    }
</script>





<style lang="scss" scoped>
    .footer-container {
        width: 100vw;
        height: max-content;
        font-family: Montserrat;


        border-top: 1px solid #cdd3d4;

        .socialMedia {
            background: #eee;
            height: 1.5em;
            padding: 1em;
            padding-right: 2em !important;
            padding-left: 2em !important;
            line-height: 1.5em;
            text-align: left;
            display: grid;
            grid-template-columns: max-content 1fr min-content;
            grid-column-gap: 5px;

            .mediaIcons {
                display: grid;
                grid-template-columns: repeat(2, 2em);
                width: 100%;

                .mediaIcon {
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;
                    float: right;
                    background-color: #333;

                    &:hover {
                        cursor: pointer;
                        background-color: #000;
                    }
                }
            }
        }
    }
    a {
        font-family: Montserrat-light;
        text-decoration: none !important;
        font-weight: bold;
        color: var(--light-blue);

        &:hover {
            cursor: pointer;
            color: var(--blue);
        }
    }
</style>