<template>
    <section>
        <div class="management-section">
            <div class="management-wrapper flex m-auto">
                <div class="column description">
                    <h2>Bestuur en directie</h2>
                    <p>
                        Het Internationaal Vrouwen Centrum is een stichting met een bestuur op afstand.
                        Het bestuur is eindverantwoordelijk voor alle activiteiten van de stichting.
                        Het bestuur bestaat uit 6 leden die op vrijwillige basis bestuurlijk hun deskundigheid inzetten.
                        Hoofdtaken van het bestuur zijn o.a. het vaststellen van inhoudelijk en financieel beleid en het
                        controleren van de dagelijkse leiding.
                    </p>
                    <a href="">Meer informatie</a>
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
    name: "Management",
}
</script>

<style lang="scss" scoped>
.management-section {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 25px 25px 25px 25px;

    .management-wrapper {
        max-width: 1140px;

        .column {
            width: 50%;

            &.description {

               h2 {
                   margin-top: 0.5rem;
                   margin-bottom: 1rem;
                   font-family: inherit;
                   font-weight: 500;
                   line-height: 1.2;
                   font-size: 2rem;
                   color: #7A7A7A;
               }

                p {
                    font-size: 22px;
                    font-weight: 400;
                    color: #7A7A7A;
                    padding-bottom: 40px;
                    padding-right: 20px;
                    font-family: "Public Sans", Sans-serif;
                }

                a {
                    color: #fff;
                    font-size: 16px;
                    padding: 15px 30px;
                    border-radius: 4px;
                    background-color: #AE5D65;
                    border: solid 2px #AE5D65;
                    transition: all .2s ease-in-out;
                    font-family: "Public Sans", Sans-serif;

                    &:hover {
                        background-color: #fff;
                        color: #AE5D65;
                    }
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

                &.description {
                    padding-bottom: 3rem;
                }
            }
        }
    }
}
</style>
