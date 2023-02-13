<template>
    <section>
        <div class="goal">
            <div class="goal-wrapper flex m-auto">
                <div class="column goal-text">
                    <h2>Doelstelling</h2>
                    <p>Het Internationaal Vrouwen Centrum stelt zich ten doel een bijdrage te leveren aan het
                        emancipatie – en integratieproces van (migranten)vrouwen in Den Helder.
                        Tevens draagt zij bij aan het verkrijgen van een gelijkwaardige positie van migrantenvrouwen
                        in de Nederlandse samenleving met behoud van eigen cultuur. Het IVC wil de wederzijdse
                        integratie bevorderen.
                    </p>
                </div>

                <div class="column goal-image">
                    <img src="../../../images/banner.jpg" alt="women group">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Goal",
}
</script>

<style lang="scss" scoped>
    .goal {
        padding: 25px 25px 25px 25px;
        background-color: #F6F6F6;

        .goal-wrapper {
            max-width: 1140px;

            .column {
                width: 50%;
                padding: 10px;

                &.goal-text {
                    padding: 25px;

                    h2 {
                        margin-top: 0.5rem;
                        margin-bottom: 1rem;
                        line-height: 1.2;
                        color: #7A7A7A;
                        font-family: "Public Sans", Sans-serif;
                        font-size: 2rem;
                        font-weight: 400;
                    }

                    p {
                        color: #7A7A7A;
                        font-family: "Public Sans", Sans-serif;
                        font-size: 22px;
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
