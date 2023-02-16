<template>
    <section>
        <div class="vacancies-section">
            <div class="banner-wrapper block m-auto p-2">
                <h2>Vacatures</h2>
            </div>
            <div class="description-wrapper flex m-auto">
                <div class="column description-text">
                    <p>
                        Het IVC is een vrijwilligersorganisatie. Onze vrijwilligers zijn actief als manager, teacher,
                        coach, taaltrainer, medewerker facilitaire dienst, baliemedewerker, administrator, pr medewerker,
                        bestuurslid, activiteitenbegeleider, gastvrouw, of vertrouwenspersoon. Door het vrijwilligerswerk
                        bevorderen vrouwen hun deskundigheid door training, kennisoverdracht en doen zij werkervaring op.
                    </p>
                    <p>
                        Het IVC is een erkend werk- leerbedrijf. Naast vrijwilligers leiden wij ook vakkrachten op.
                    </p>
                    <p>
                        <em>
                            Zou u graag iets anders willen doen bij ons centrum dat niet tussen de vacatures staat?
                            Neem contact met ons op en dan gaan we graag een oriënterend gesprek met u aan.
                        </em>
                    </p>
                </div>

                <div class="column description-image">
                    <img src="../../../images/banner.jpg" alt="women group">
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
.vacancies-section {
    padding: 100px 0 0;

    .banner-wrapper {
        max-width: 1140px;

        h2 {
            font-size: 2rem;
            margin: 25px 0 0 0;
            padding: 25px 25px 25px 25px;
            color: #000000;
            font-family: "Public Sans", Sans-serif;

        }
    }

    .description-wrapper {
        max-width: 1140px;

        .column {
            width: 50%;
            padding: 10px;

            &.description-text {
                padding: 25px;

                p {
                    color: #7A7A7A;
                    font-family: "Public Sans", Sans-serif;
                    font-size: 20px;
                    font-weight: 400;
                    margin-top: 0;
                    margin-bottom: 0.9rem;
                }
            }

            & img {
                border-style: solid;
                border-width: 10px 10px 10px 10px;
                border-color: #FFFFFF;
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
