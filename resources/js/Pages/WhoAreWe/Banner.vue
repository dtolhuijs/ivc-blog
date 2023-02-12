<template>
    <section>
        <div class="banner">
            <div class="banner-wrapper block m-auto p-2">
                <h2>Wie zijn wij?</h2>
                <div class="banner-text">
                    <p>
                        “Het is onze missie vrouwen te empoweren naar sociale zelfredzaamheid en financiële onafhankelijkheid!’’
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Banner",
}
</script>

<style lang="scss" scoped>
    .banner {
        padding: 100px 0 50px 0;

        .banner-wrapper {
            max-width: 1140px;

            h2 {
                margin: 50px 20px 20px 20px;
                font-family: "Public Sans", Sans-serif;
                font-size: 36px;
                font-weight: 400;
                color: #000000;
            }

            .banner-text {
                p {
                    text-align: center;
                    color: #AE5D65;
                    font-family: "Public Sans", Sans-serif;
                    font-size: 36px;
                    font-weight: 500;
                    font-style: italic;
                }
            }
        }
    }
</style>
