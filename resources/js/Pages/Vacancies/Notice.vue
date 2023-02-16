<template>
    <section>
        <div class="notice-section">
            <div class="notice-wrapper m-auto">
                <h2>Interesse?</h2>
                <p>
                    Heeft u interesse in een functie als vrijwilliger? Neem contact met ons op. Dit kunt u doen door
                    langs te komen bij ons centrum of te bellen met 0223-634216.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Notice",
}
</script>

<style lang="scss" scoped>

    .notice-section {
        padding: 50px 0;

        .notice-wrapper {
            background-color: #AE5D65;
            max-width: 707px;
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            color: #FFFFFF;
            padding: 25px 25px 25px 25px;

            h2 {
                margin-bottom: 20px;
                font-family: "Public Sans", sans-serif;
                font-size: 2rem;
                color: #fff;
            }

            p {
                font-weight: 400;
                font-family: "Public Sans", sans-serif;
                color: #fff;
            }
        }
    }

</style>
