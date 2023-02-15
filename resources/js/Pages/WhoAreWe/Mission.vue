<template>
    <section>
        <div class="mission">
            <div class="mission-wrapper flex m-auto">
                <div class="mission-container">
                    <div class="mission-text">
                        <h2>
                            <strong>Vanuit de doelstelling komt het IVC tot de volgende kerntaken:</strong>
                        </h2>

                        <p>
                            Het IVC organiseert
                            <a href="https://ivcdenhelder.nl/activiteiten/">
                                <span>cursussen, activiteiten</span>
                            </a> en
                            <a href="https://ivcdenhelder.nl/projecten/">
                                <span>projecten</span>
                            </a>
                            om vrouwen te helpen bij het integratie-, participatie-, emancipatie-, en bewustwordingsproces
                            binnen de Helderse samenleving. Het IVC coacht vrouwen naar verdere opleiding, stage,
                            vrijwilligerswerk en betaald werk.
                        </p>

                        <p>
                            Het IVC organiseert activiteiten en projecten om vooroordelen weg
                            te nemen tussen verschillende migrantengroepen (onderling) en de autochtone bevolking.
                            Wederzijdse integratie is hierbij het doel.
                        </p>

                        <p>Het IVC is een experticecentrum Intercultureel Vakmanschap:</p>

                        <ul>
                            <li>Het heeft een signalerende functie op het gebied van:
                                problemen waar de vrouwen tegenaan lopen (luisterend oor), relationeel, huiselijk en
                                eer gerelateerd geweld.
                            </li>
                            <li>Ook delen we onze kennis door het geven van presentaties,
                                lezingen en projecten waardoor intern en extern taboes en taalbarrières doorbroken worden.
                            </li>
                        </ul>

                        <p>
                            Het IVC werkt samen met andere organisaties en instellingen en vormt een groot netwerk
                            waarvan de resultaten terugstromen naar de deelnemers van het IVC. De netwerken zijn
                            op plaatselijk (Helders), landelijk, Europees en wereldwijd niveau.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Mission",
}
</script>

<style lang="scss" scoped>
    .mission {
        margin-top: 50px;
        margin-bottom: 50px;

        .mission-wrapper {
            max-width: 921px;
            text-align: center;

            .mission-container {
                columns: 1;
                font-family: "Public Sans", Sans-serif;
                font-size: 22px;
                font-weight: 400;
                padding: 10px;

                .mission-text {
                    padding: 50px 100px 100px 100px;
                    background-color: #F6F6F6;

                    h2 {
                        text-align: center;
                        font-size: 2.0rem;
                        margin-top: 0.5rem;
                        margin-bottom: 1rem;
                        font-family: inherit;
                        font-weight: 500;
                        line-height: 1.2;
                        color: #7A7A7A;
                    }

                    p {
                        text-align: left;
                        font-family: "Public Sans", Sans-serif;
                        font-size: 22px;
                        font-weight: 400;
                        color: #7A7A7A;
                        margin-bottom: .9rem;

                        a {
                            color: #000;
                        }
                    }

                    ul {
                        list-style: disc;
                        margin-left: 2rem;
                        text-align: left;
                        font-family: "Public Sans", Sans-serif;
                        font-size: 22px;
                        font-weight: 400;
                        color: #7A7A7A;
                        margin-bottom: .9rem;
                    }

                    @media only screen and (max-width: 800px) {
                        padding: 50px 25px 25px;
                    }
                }
            }
        }
    }
</style>
