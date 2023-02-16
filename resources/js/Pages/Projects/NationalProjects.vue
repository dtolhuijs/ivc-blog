<template>
    <section>
        <div id="national-projects">
            <div class="projects-title m-auto">
                <div class="top-title">
                    <h3>
                        Landelijke projecten
                    </h3>
                </div>
            </div>

            <div class="project-container">
                <div class="project-description flex m-auto">
                    <div class="column project-description">
                        <h3>E-learning Intercultureel Vakmanschap</h3>
                        <p>
                            <i>
                                In samenwerking met Kennisplatform Intergratie en Samenleving (KIS)
                            </i>
                        </p>
                        <p>
                            Het Internationaal Vrouwen Centrum heeft meegewerkt aan de e-learning Intercultureel
                            Vakmanschap voor wijkteams in Nederland, van KIS Movisie in Utrecht.
                        </p>

                        <p>
                            <i>Veel sociaal professionals worstelen met de grote diversiteit van hun cliënten.
                                Hoe om te gaan met al die verschillen? Om professionals te ondersteunen heeft KIS een
                                nieuwe e-learningmodule over intercultureel vakmanschap ontwikkeld voor professionals
                                in het sociaal domein.
                            </i>
                        </p>

                        <a href="">Lees meer</a>
                    </div>

                    <div class="column image">
                        <div class="image-container">
                            <img src="../../../images/projects/unnamed-4.jpg" alt="National project image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "NationalProjects",
}
</script>

<style lang="scss">
#national-projects {

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
