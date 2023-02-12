<template>
    <section>
        <div class="activities-section">
            <div class="flex justify-center items-center">
                <h2 class="activities-title">Activiteiten</h2>
            </div>
            <div class="grid-container flex flex-row justify-center items-center m-auto">
                <div class="card-container grow">
                    <div class="card-wrapper overflow-hidden">
                        <img src="../../../images/activities/img-1.jpg" alt="Sunset in the mountains">
                        <div class="card-title">
                            <a href="">
                                <div class="text-sm mb-2">Sollicitatietraining</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-container grow">
                    <div class="card-wrapper overflow-hidden">
                        <img src="../../../images/activities/img-2.jpg" alt="Sunset in the mountains">
                        <div class="card-title">
                            <a href="">
                                <div class="text-sm mb-2">EVC training: <br>(Bewustwordingscompetentietraining)</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-container grow">
                    <div class="card-wrapper overflow-hidden">
                        <img src="../../../images/activities/img-3.jpg" alt="Sunset in the mountains">
                        <div class="card-title">
                            <a href="">
                                <div class="text-sm mb-2">Pre-EVC training: Sta in je Kracht! Spreek je uit!</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-container flex flex-row justify-center items-center m-auto pt-3">
                <div class="card-container grow">
                    <div class="card-wrapper overflow-hidden">
                        <img src="../../../images/activities/img-4.jpg" alt="Sunset in the mountains">
                        <div class="card-title">
                            <a href="">
                                <div class="text-sm mb-2">Computercursus</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-container grow">
                    <div class="card-wrapper overflow-hidden">
                        <img src="../../../images/activities/img-5.jpg" alt="Sunset in the mountains">
                        <div class="card-title">
                            <a href="">
                                <div class="text-sm mb-2">Conversatielessen Nederlands</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-container grow">
                    <div class="card-wrapper overflow-hidden">
                        <img src="../../../images/activities/img-6.jpg" alt="Sunset in the mountains">
                        <div class="card-title">
                            <a href="">
                                <div class="text-sm mb-2">Interculturele ontmoetingsbijeenkomst</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="more-activities flex flex-row justify-center items-center mt-10">
                <a href="">Klik hier voor meer activiteiten en schrijf je in!</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ActivitiesSection",
}
</script>

<style lang="scss" scoped>
    .activities-section {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 0 0 50px 0;

        .activities-title {
            margin: 50px 50px 50px 50px;
            padding: 0;
            font-size: 2rem;
            font-family: "Public Sans", Sans-serif;
        }

        .grid-container {
            max-width: 1140px;
            gap: 12px;

            .card-container {
                position: relative;

                .card-wrapper {
                    justify-content: center;
                    display: flex;

                    img {
                        width: 400px;
                        height: 300px;
                        object-fit: cover;
                    }

                    .card-title {
                        position: absolute;
                        width: 80%;
                        bottom: 50px;
                        text-align: center;
                        margin: 125px 0px 0px 0px;
                        padding: 15px 15px 5px 15px;
                        background-color: #fff;
                        opacity: .8;
                        transition: all .2s ease-in-out;

                        &:hover {
                            box-shadow: 2px 2px 2px 1px rgba(47, 47, 47, 0.2);
                            animation: zoom-in-zoom-out 1s ease;
                        }
                    }

                    @keyframes zoom-in-zoom-out {
                        0% {
                            transform: scale(1, 1);
                        }
                        50% {
                            transform: scale(1.1, 1.1);
                        }
                        100% {
                            transform: scale(1, 1);
                        }
                    }
                }
            }

            @media only screen and (max-width: 800px) {
                flex-wrap: wrap;
            }

            @media only screen and (max-width: 1166px) {
                padding-left: 12px;
                padding-right: 12px;
            }
        }

        .more-activities {
            a {
                font-family: "Roboto", Sans-serif;
                font-weight: normal;
                background-color: #AE5D65;
                padding: 15px;
                font-size: 16px;
                color: #fff;
                border-radius: 4px;
                border: solid 2px #AE5D65;
                transition: all .2s ease-in-out;

                &:hover {
                    background-color: #fff;
                    color: #AE5D65;
                }
            }
        }
    }
</style>
