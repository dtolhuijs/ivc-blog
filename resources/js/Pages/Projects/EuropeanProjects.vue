<template>
    <section>
        <div id="european-projects">
            <div class="projects-title m-auto">
                <div class="top-title">
                    <h3>
                        Europese projecten
                    </h3>

                    <p>
                        <i>Het Internationaal Vrouwen Centrum Den Helder is partner in twee lopende Europese projecten.
                            Dit zijn Key Action 2 (KA2) projecten vanuit Cinop Erasmus+. Beide projecten zijn in het
                            voorjaar van 2017 van start gegaan.
                        </i>
                    </p>
                </div>
            </div>

            <div class="project-container">
                <div class="project-description flex m-auto">
                    <div class="column project-description">
                        <h3>VINCE</h3>
                        <p>
                            <i>
                                http://vince.eucen.eu
                            </i>
                        </p>
                        <p>
                            VINCE is een ERASMUS+ project dat bedoeld is om trainingsmateriaal te ontwikkelen voor
                            universitair personeel dat werkt in processen van Erkenning van Verworven Competenties (EVC)
                            en Validatie van Niet-formeel en Informeel Leren (VNIL) met migranten- en/of vluchtelingenstudenten.
                        </p>
                        <p>
                            Het doel is om universitair personeel te voorzien van instrumenten om beter voorbereid te
                            zijn op het werken met nieuwkomers die toegang willen krijgen tot het hoger onderwijs (HO)
                            en die meer bewust willen zijn van en geïntegreerd willen worden in de Europese samenleving.
                        </p>

                        <a href="">Lees meer</a>
                    </div>

                    <div class="column image">
                        <div class="image-container">
                            <img src="../../../images/projects/logo_vince.png" alt="local project image">
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="project-description flex m-auto">
                    <div class="column project-description">
                        <h3>ReTraVaSSEV</h3>
                        <p><i>http://skillsforyou.eu</i></p>
                        <p>
                            Retravassev staat voor Recognition, Training and Validation of Soft Skills for
                            Employability of Vulnerable Groups en is een Handleiding voor Soft Skills Training voor
                            trainers die werken met kwetsbare groepen.
                        </p>
                        <p>
                            De belangrijkste doelstelling van het ReTraVaSSEV-project is het aanreiken van relevante en
                            kwalitatief hoogstaande soft skills voor kwetsbare groepen met als doel economische inzetbaarheid,
                            betere sociale integratie en succesvol onderwijs. Op deze manier zal de lokale cohesie worden
                            versterkt en zal de samenleving profiteren van het beschikbare potentieel.
                        </p>

                        <a href="">Lees meer</a>
                    </div>

                    <div class="column image">
                        <div class="image-container">
                            <img src="../../../images/projects/retravassev-1.png" alt="local project image">
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-info-wrapper m-auto">
                <div class="contact-text">
                    <p>
                        Ook samenwerken met het IVC? Neem contact met ons op!<br>
                        T: 0223 – 634216
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "EuropeanProjects",
}
</script>

<style lang="scss">
#european-projects {

    .projects-title {
        max-width: 1140px;

        .top-title {
            margin-bottom: 40px;
            padding: 0 25px;

            h3 {
                color: #AE5D65;
                font-size: 1.75rem;
                font-weight: 800;
                text-align: center;
                font-family: "Public Sans", Sans-serif;
                margin: 30px 0 25px 0;
                padding: 25px 25px 25px 25px;
            }

            p {
                color: #7A7A7A;
                text-align: center;
                font-family: "Public Sans", Sans-serif;
                font-size: 20px;
                font-weight: 600;
                font-style: italic;
                margin-bottom: 0.9rem;
            }
        }
    }

    .contact-info-wrapper {

        .contact-text {
            margin: 50px 0px 50px 0px;
            padding: 25px 25px 25px 25px;

            p {
                text-align: center;
                color: #000000;
                font-family: "Public Sans", Sans-serif;
                font-size: 28px;
                font-weight: 400;
                font-style: italic;
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
