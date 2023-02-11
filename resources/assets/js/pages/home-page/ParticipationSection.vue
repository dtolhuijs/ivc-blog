<template>
    <div class="participation-steps-section">
        <div class="participation-container flex justify-center items-center m-auto">
            <div class="participation-text">
                <h2>De Participatieladder</h2>
                <p>
                    Het IVC werkt met het IVC Participatieladder Model (IPM), een wetenschappelijk gevalideerd model
                    met Europese erkenning. Met behulp van dit model helpen wij vrouwen zichzelf te ontwikkelen.
                    Stijgen op de ladder, dus persoonlijke groei, staat hierbij centraal.
                </p>
                <a>Lees meer</a>
            </div>

            <div class="ladder-image">
                <img src="../../../images/ladder3.png" alt="participatie ladder">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ParticipationSection",
}
</script>

<style lang="scss" scoped>
    .participation-steps-section {
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        margin-top: 75px;
        margin-bottom: 50px;
        padding: 75px 0 50px 0;
        background-color: #AE5D65;

        .participation-container {
            max-width: 1140px;

            .participation-text {
                padding: 0 30px 30px 30px;
                margin-top: -100px;
                width: 50%;

                h2 {
                    color: #FFFFFF;
                    font-family: "Roboto", Sans-serif;
                    font-size: 45px;
                    font-weight: 600;
                    padding: 0px 0px 25px 0px;
                }
                p {
                    color: #FFFFFF;
                    font-family: "Roboto", Sans-serif;
                    font-size: 22px;
                    font-weight: 400;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                }

                a {
                    fill: #000000;
                    color: #000000;
                    background-color: #FFFFFF;
                    font-size: 16px;
                    padding: 15px 30px;
                    border-radius: 4px;
                }
                @media only screen and (max-width: 985px) {
                    margin-top: 0;
                }
            }

            .ladder-image {
                img {
                    height: auto;
                    width: 500px;
                    max-width: 100%;
                    border: none;
                    border-radius: 0;
                    -webkit-box-shadow: none;
                    padding: 30px 30px 30px 0;
                    box-shadow: none;
                }
            }
        }
        @media only screen and (max-width: 767px) {
            display: none;
        }
    }
</style>
