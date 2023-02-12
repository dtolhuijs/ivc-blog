<template>
    <section>
        <div class="counter-section">
            <div class="counter-wrapper">
                <div class="flex justify-center items-center">
                    <h2 class="counter-title">Het IVC werkt samen met:</h2>
                </div>

                <div class="flex justify-center text-center">
                    <div class="counter p-2.5">
                        <number
                            ref="number1"
                            :from="0"
                            :to="64"
                            :format="theFormat"
                            :duration="5"
                            :delay="1"
                            easing="Power1.easeOut"
                        />
                        <div class="counter-text">Partners</div>
                    </div>

                    <div class="counter p-2.5 text-center">
                        <number
                            ref="number1"
                            :from="0"
                            :to="32"
                            :format="theFormat"
                            :duration="5"
                            :delay="1"
                            easing="Power1.easeOut"
                        />
                        <div class="counter-text">Vrijwilligers</div>
                    </div>

                    <div class="counter p-2.5 text-center">
                        <number
                            ref="number1"
                            :from="0"
                            :to="474"
                            :format="theFormat"
                            :duration="5"
                            :delay="1"
                            easing="Power1.easeOut"
                        />
                        <div class="counter-text">Deelnemers</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)
export default {
    name: "CounterSection",

    // Sets the format of the number
    methods: {
        theFormat(number) {
            return number.toFixed(0);
        },
    }
}
</script>

<style lang="scss" scoped>
    .counter-section {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 0 0 50px 0;
        background-color: #D8D0CD7D;

        .counter-wrapper {
            max-width: 1140px;
            margin: 0 auto;

            .counter-title {
                text-align: center;
                color: #000000;
                font-family: "Roboto", Sans-serif;
                font-weight: 600;
                font-size: 1rem;
                margin: 50px 0 30px 0;
                padding: 0;
            }

            .counter {
                width: 33.333%;

                span {
                    font-family: "Public Sans", Sans-serif;
                    font-size: 45px;
                    font-weight: 600;
                }

                .counter-text {
                    text-align: center;
                    font-family: "Public Sans", Sans-serif;
                    font-size: 19px;
                    font-weight: 400;
                    line-height: 2.5;
                    color: #54595F;
                }
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }
</style>
