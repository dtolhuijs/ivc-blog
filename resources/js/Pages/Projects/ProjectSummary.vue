<template>
    <section>
        <div class="project-section">
            <div class="banner-wrapper block m-auto p-2">
                <h2>Projecten en samenwerkingen</h2>
            </div>

            <div class="project-summary flex m-auto">

                <div class="column summary">
                    <p>
                        Het Internationaal Vrouwen Centrum werkt samen met organisaties en bedrijven om haar
                        doelstellingen te bereiken. Op deze pagina leest u meer over deze samenwerkingen en over
                        onze verschillende projecten, die zowel een lokale als internationale impact hebben.
                    </p>
                </div>

                <div class="column list">
                    <div class="list-content">
                        <a href="#local-projects">Lokale Projecten</a>

                        <a href="#national-projects">Landelijke projecten</a>

                        <a href="#european-projects">Europese projecten</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProjectSummary",
}
</script>

<style lang="scss" scoped>
.project-section {
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

    .project-summary {
        max-width: 1140px;

        .column {
            width: 50%;
            padding: 10px;

            &.summary {
                padding: 25px 25px 25px 25px;

                p {
                    font-family: "Public Sans", Sans-serif;
                    font-size: 20px;
                    font-weight: 400;
                    color: #7A7A7A;
                    margin-top: 0;
                    margin-bottom: 0.9rem;
                }
            }

            &.list {
                .list-content {
                    background-color: #F3F3F3;
                    padding: 10px;

                    a {
                        display: block;
                        text-align: center;
                        color: #fff;
                        font-size: 18px;
                        padding: 10px 40px;
                        border: solid 2px #AE5D65;
                        background-color: #AE5D65;
                        transition: all .2s ease-in-out;
                        font-family: "Public Sans", Sans-serif;

                        &:not(:last-of-type) {
                            margin-bottom: 10px;
                        }
                        &:hover {
                            background-color: #fff;
                            color: #AE5D65;
                        }
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

</style>
