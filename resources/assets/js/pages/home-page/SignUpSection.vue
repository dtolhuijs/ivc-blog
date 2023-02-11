<template>
    <div class="sign-up-section">
        <div class="sign-up-container justify-center items-center m-auto">
            <div class="form-wrapper">
                <div class="form-container">
                    <div class="form-body">
                        <img src="../../../images/hands.jpg" alt="holding hands">
                        <h3 class="form-title">Vrijwilliger worden?</h3>
                        <p class="form-text">
                            Bij het Internationaal Vrouwen Centrum hebben we verschillende functies waarbij jij je kunt
                            inzetten om anderen te helpen én je jouw kwaliteiten verder kunt ontwikkelen. Word vrijwilliger
                            en draag bij aan de empowerment van vrouwen!
                        </p>
                        <a class="learn-more">Lees verder</a>
                    </div>
                </div>
            </div>
            <div class="form-wrapper">
                <div class="form-container">
                    <div class="form-body">
                        <img src="../../../images/computers.jpeg" alt="Computers">
                        <h3 class="form-title">Blijf op de hoogte</h3>
                        <p class="form-text">
                            Schrijf je voor onze nieuwsbrief:
                        </p>
                        <news-letter-section/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewsLetterSection from "../../components/NewsLetterSection.vue";

export default {
    components: {
        NewsLetterSection
    }
}
</script>

<style lang="scss">
.sign-up-section {
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: 0;
    margin-bottom: 100px;
    padding: 100px 0 0 0;
    background-color: #FFFFFF;

    .sign-up-container {
        max-width: 1140px;
        display: table;

        .form-wrapper {
            width: 50%;
            display: table-cell;

            .form-container {
                padding: 10px;

                .form-body {
                    padding: 25px 25px 25px 25px;
                    background-color: #D8D0CD7D;

                    img {
                        margin-bottom: 15px;
                        width: 100%;
                    }

                    h3.form-title {
                        color: #000000;
                        font-family: "Roboto", Sans-serif;
                        font-weight: 600;
                        font-size: 1.75rem;
                        margin-top: 0.5rem;
                        margin-bottom: 1rem;
                    }
                    p.form-text {
                        color: #000000;
                        font-family: "Public Sans", Sans-serif;
                        margin-bottom: 20px;
                        font-weight: 400;
                    }

                    a.learn-more {
                        display: inline-block;
                        line-height: 1;
                        background-color: #AE5D65;
                        font-family: "Public Sans", Sans-serif;
                        font-size: 15px;
                        padding: 12px 24px;
                        border-radius: 3px;
                        color: #fff;
                        fill: #fff;
                        text-align: center;
                        -webkit-transition: all .3s;
                        -o-transition: all .3s;
                        transition: all .3s;
                    }

                    .form-fields {
                        input {
                            width: 100%;
                            max-width: 100%;
                            border: 1px solid #818a91;
                            background-color: #FFFFFF;
                            border-radius: 3px;
                            color: #373a3c;
                            padding: 0.5rem 1rem;
                            margin-bottom: 10px;
                            vertical-align: middle;
                            -webkit-box-flex: 1;
                            -ms-flex-positive: 1;
                            flex-grow: 1;
                        }

                        button {
                            width: 100%;
                            max-width: 100%;
                            background-color: #AE5D65;
                            color: #FFFFFF;
                            font-family: "Roboto", Sans-serif;
                            font-weight: 500;
                            font-size: 15px;
                            padding: 12px 24px;
                            border-radius: 3px;
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;

            .form-wrapper {
                width: 100%;
            }
        }
    }
}
</style>
