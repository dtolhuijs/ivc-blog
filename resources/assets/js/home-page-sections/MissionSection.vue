<template>
    <section>
        <div class="mission-section">
            <div class="flex justify-center items-center">
                <img src="../../images/marlies-150x150.jpg" alt="Marlies Pfann">
            </div>
            <div class="flex justify-center items-center">
                <p class="mission-text">
                    ’Het is onze missie vrouwen te empoweren naar sociale zelfredzaamheid en financiële onafhankelijkheid!’’
                </p>
            </div>
            <div class="flex justify-center items-center">
                <p class="mission-title">Marlies Pfann</p>
            </div>
            <div class="flex justify-center items-center">
                <p class="mission-subtitle">
                    Directeur van het IVC
                </p>
            </div>
        </div>
        <div class="mission-section video-section">
            <div class="video-container flex justify-center items-center m-auto">
                <p class="text-video">
                    Het Internationaal Vrouwen Centrum stelt zich ten doel een bijdrage te leveren aan het emancipatie
                    – en integratieproces van (migranten)vrouwen in Den Helder. Tevens draagt zij bij aan het verkrijgen
                    van een gelijkwaardige positie van migrantenvrouwen in de Nederlandse samenleving met behoud van
                    eigen cultuur. Het IVC wil de wederzijdse integratie bevorderen.
                </p>
                <div class="video">
                    <iframe class="elementor-video" frameborder="0" allowfullscreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Internationaal Vrouwen Centrum in Den Helder"
                            src="https://www.youtube.com/embed/U08OahoYw4c?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fivcdenhelder.nl&amp;widgetid=1"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MissionSection",
}
</script>

<style lang="scss" scoped>
    .mission-section {
        margin-top: 100px;
        margin-bottom: 50px;
        padding: 0 0 50px 0;

        img {
            filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
            border-radius: 218px 218px 218px 218px;
            margin-bottom: 20px;
        }

        .mission-text {
            text-align: center;
            color: #AE5D65;
            font-family: "Roboto", Sans-serif;
            font-size: 23px;
            font-weight: 600;
            font-style: italic;
            letter-spacing: 0.5px;
            padding-bottom: 1rem;
            width: 52%;
            max-width: 52%;
        }

        .mission-title {
            text-align: center;
            color: #000000;
            font-family: "Sacramento", Sans-serif;
            font-size: 47px;
            font-weight: 400;
        }

        .mission-subtitle {
            font-family: "Public Sans", Sans-serif;
        }

        &.video-section {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 0;
            margin-bottom: 0;
            background-color: #D8D0CD7D;
            padding: 75px 25px 75px 25px;

            .video-container {
                max-width: 932px;
                gap: 30px;

                .text-video {
                    text-align: center;
                    color: #000000;
                    font-family: "Roboto", Sans-serif;
                    font-size: 19px;
                    font-weight: 400;
                    font-style: normal;
                    letter-spacing: 0.5px;
                    max-width: 50%;
                }

                .video {
                    max-width: 100%;
                    iframe {
                        height: 260px;
                        width: 500px;
                        max-width: 100%;
                    }
                }

                @media only screen and (max-width: 800px) {
                  flex-wrap: wrap;

                    .text-video {
                        max-width: 100%;
                    }
                }
            }
        }
    }
</style>
