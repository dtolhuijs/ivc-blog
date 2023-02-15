<template>
    <section>
        <div class="banner">
            <div class="banner-wrapper block m-auto p-2">
                <h2>Bestuur en directie</h2>
            </div>
        </div>

        <div class="management-section">
            <div class="management-wrapper flex m-auto">
                <div class="column description">
                    <p>
                        Het Internationaal Vrouwen Centrum is een stichting met een bestuur op afstand.
                        Het bestuur is eindverantwoordelijk voor alle activiteiten van de stichting.
                        Het bestuur bestaat uit 6 leden die op vrijwillige basis bestuurlijk hun deskundigheid inzetten.
                        Hoofdtaken van het bestuur zijn o.a. het vaststellen van inhoudelijk en financieel beleid en het
                        controleren van de dagelijkse leiding.
                    </p>
                </div>

                <div class="column image">
                    <img src="../../../images/holding-hands.jpeg" alt="Holding hands">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "OrganizationSection",
}
</script>

<style lang="scss" scoped>
.banner {
    padding: 100px 0 0;

    .banner-wrapper {
        max-width: 1140px;

        h2 {
            font-size: 2rem;
            padding: 25px 25px 25px 25px;
            color: #000000;
            font-family: "Public Sans", Sans-serif;

        }
    }
}
.management-section {
    margin-bottom: 50px;
    padding: 50px 25px;
    background-color: #F9F9F9;

    .management-wrapper {
        max-width: 1140px;

        .column {
            width: 50%;

            &.description {

                p {
                    font-size: 22px;
                    font-weight: 400;
                    color: #7A7A7A;
                    padding-bottom: 40px;
                    padding-right: 20px;
                    font-family: "Public Sans", Sans-serif;
                }
            }

            &.image {
                img {
                    border-style: solid;
                    border-width: 10px 10px 10px 10px;
                    border-color: #FFFFFF;
                }
            }
        }

        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;

            .column {
                width: 100%;
            }
        }
    }
}
</style>
