<template>
    <section>
        <div id="local-projects">
            <div class="projects-title m-auto">
                <div class="top-title">
                    <h3>
                        Lokale projecten
                    </h3>
                </div>
            </div>

            <div class="project-container">
                <div class="project-description flex m-auto">
                    <div class="column project-description">
                        <h3>Innovatieproject SAMEN staan we sterk in opleiding en zorg!</h3>
                        <p>
                            <i>
                                Aristozorg, Zorggroep Tellus, Woonzorggroep SAMEN, Internationaal Vrouwen Centrum Den Helder,
                                gemeente Den Helder
                            </i>
                        </p>
                        <p>
                            Zorg wordt steeds complexer en urgenter. Dit komt deels door de vergrijzing binnen Europa,
                            deels door een veranderende zorgvraag. Daarnaast is een direct gevolg van de vergrijzing
                            dat er steeds meer werk is dat gedragen wordt door minder mensen; er is een schaarste aan
                            werknemers in diverse branches, zo ook in de zorg. Het IVC werkt samen met zorginstellingen
                            om dit probleem op te lossen. En vrouwen krijgen de kans om aan de slag te gaan binnen een
                            bloeiende sector!
                        </p>

                        <a href="">Lees meer</a>
                    </div>

                    <div class="column image">
                        <div class="image-container">
                            <img src="../../../images/projects/pexels-matthias.jpeg" alt="local project image">
                        </div>
                    </div>
                </div>

                <div class="project-description flex m-auto">
                    <div class="column project-description">
                        <h3>Project ‘Dementie bij ouderen met een migrantenachtergrond’</h3>
                        <p><i>In samenwerking met Geriant.</i></p>
                        <p>
                            In een meerjaren samenwerking hebben Geriant en het IVC de krachten gebundeld in het
                            organiseren van mini-symposia en voorlichtingsbijeenkomsten voor zorginstanties die werken
                            met migranten én voor etnisch–religieuze organisaties in Den Helder. Hierbij werkt het IVC
                            tevens samen met het regionaal Platvorm Relationeel en Eergerelateerd Geweld.
                        </p>

                        <a href="">Lees meer</a>
                    </div>

                    <div class="column image">
                        <div class="image-container">
                            <img src="../../../images/projects/indian-girls.png" alt="local project image">
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="project-description flex m-auto">
                    <div class="column project-description">
                        <h3>Project ‘Armoedebestrijding in Achterstandswijken’</h3>
                        <p><i>In samenwerking met HKN Huisartsen.</i></p>
                        <p>
                            Het uitgangspunt van het gezamenlijk project van HKN – IVC is het in kaart brengen van de
                            problematiek die zorgverleners tegenkomen in achterstandswijken en hoe wij hun daarbij
                            kunnen helpen.
                        </p>

                        <a href="">Lees meer</a>
                    </div>

                    <div class="column image">
                        <div class="image-container">
                            <img src="../../../images/projects/cropped-logo.gif" alt="local project image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LocalProjects",
}
</script>

<style lang="scss">
    #local-projects {

        .projects-title {
            max-width: 1140px;

            .top-title {
                margin-bottom: 20px;

                h3 {
                    color: #AE5D65;
                    font-size: 1.75rem;
                    font-weight: 800;
                    text-align: center;
                    font-family: "Public Sans", Sans-serif;
                    margin: 30px 0 25px 0;
                    padding: 25px 25px 25px 25px;
                }
            }
        }

        .project-container {
            background-color: #F0F0F0;

            .divider {
                background-color: #fff;
                width: 100%;
                padding: 10px;
            }

            .project-description {
                max-width: 1140px;

                .column {
                    width: 50%;
                    padding: 10px;

                    &.project-description {
                        padding: 35px 25px 25px 25px;

                        h3 {
                            color: #000;
                            font-family: "Public Sans", Sans-serif;
                            font-weight: 600;
                            font-size: 1.75rem;
                            padding-bottom: 20px;
                        }

                        p {
                            font-family: "Public Sans", Sans-serif;
                            font-size: 20px;
                            font-weight: 400;
                            color: #7A7A7A;
                            margin-bottom: 0.9rem;
                        }

                        a {
                            display: inline-block;
                            line-height: 1;
                            border: solid 2px #818a91;
                            background-color: #818a91;
                            font-size: 15px;
                            padding: 12px 24px;
                            border-radius: 3px;
                            color: #fff;
                            text-align: center;
                            -webkit-transition: all .3s;
                            -o-transition: all .3s;
                            transition: all .3s;

                            &:hover {
                                background-color: #fff;
                                color: #000;
                            }
                        }
                    }

                    &.image {
                        .image-container {
                            padding: 25px 25px 25px 25px;

                            img {
                                border-style: solid;
                                border-width: 10px 10px 10px 10px;
                                border-color: #FFFFFF;
                            }
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
    }
</style>
