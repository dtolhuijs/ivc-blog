<template>
    <section>
        <div class="mission">
            <div class="mission-wrapper flex m-auto">
                <div class="mission-container">
                    <div class="mission-text">
                        <h3>
                            Beloningsbeleid bestuur
                        </h3>
                        <p>
                            <span>De stichting wordt bestuurd door een bestuur en een directie.</span>
                            <br>
                            <span> 1. Het bestuur van de stichting bestaat uit onbezoldigde vrijwilligers</span>
                            <br>
                            <span> 2. De directie van de stichting bestaat uit 1 directeur
                                die bezoldigd wordt conform CAO Sociaal Werk
                            </span>
                        </p>

                        <h3>Het bestuur</h3>

                        <ul>
                            <li>
                                <span>Controleert en beoordeelt de directeur;</span>
                            </li>
                            <li>
                                <span>stelt begroting en werkplan vast;</span>
                            </li>
                            <li>
                                <span>neemt kennis van periodieke voortgangsrapportages;</span>
                            </li>
                            <li>
                                <span>stelt beleidsplannen, jaarverslagen en jaarrekeningen vast;</span>
                            </li>
                            <li>
                                <span>neemt kennis van inhoudelijke beleidsontwikkelingen.</span>
                            </li>
                        </ul>

                        <p>
                            Het bestuur van het IVC kent maximaal 7 bestuursleden. Bestuursleden worden geworven op grond
                            van relevante kennis en/of vaardigheden op gebied van het op afstand besturen van een
                            professionele organisatie. De directeur is gemandateerd om op te treden als werkgever
                            en bestuurder in de zin van de CAO.
                        </p>

                        <h3>Het bestuur van IVC bestaat uit:</h3>
                        <ul>
                            <li>A. Houtkooper (voorzitter)</li>
                            <li>M.M.G. van den Broek (secretaris)</li>
                            <li>D.M. Kok (penningmeester)</li>
                            <li>C.M. Borst- Bruijstens (alg. bestuurslid)</li>
                            <li>P.R. Moltmaker (alg. bestuurslid)</li>
                        </ul>

                        <h3>Directie</h3>
                        <ul>
                            <li>De leiding van het IVC is sinds 01-01-2002 in handen van Marlies Pfann, directeur.</li>
                        </ul>
                        <p class="font-black">
                            <a href="../../../images/files/Financieel-jaarverslag-2021.pdf" download>
                                <strong>Klik hier om onze jaarrekening 2021 (.pdf) te downloaden.</strong>
                            </a><br>
                            <a href="../../../images/files/Jaarverslag_2021.pdf" download>
                                <strong>Klik hier om het jaarverslag van 2021 (.pdf) te downloaden.</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "OrganizationStyle",
}
</script>

<style lang="scss" scoped>
.mission {
    margin-top: 50px;
    margin-bottom: 50px;

    .mission-wrapper {
        max-width: 903px;
        text-align: center;

        .mission-container {
            columns: 1;
            font-family: "Public Sans", Sans-serif;
            font-size: 22px;
            font-weight: 400;
            padding: 10px;

            .mission-text {
                padding: 25px 25px 25px 25px;
                background-color: #F6F6F6;

                h3 {
                    text-align: left;
                    font-size: 1.75rem;
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
                    color: #7A7A7A;
                    margin-bottom: .9rem;
                    font-size: medium;
                }


                ul {
                    list-style: disc;
                    margin-left: 2rem;
                    text-align: left;
                    font-family: "Public Sans", Sans-serif;
                    font-weight: 400;
                    color: #7A7A7A;
                    font-size: medium;
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
