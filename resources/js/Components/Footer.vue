<template>
    <section>
        <footer class="footer-container">
            <div class="footer-wrapper flex justify-center items-center m-auto">
                <div class="left-column column">
                    <img src="../../images/ivc-logo_wit.png" alt="IVC logo">
                    <p>
                        <strong>Internationaal Vrouwen Centrum</strong><br>
                        IJsselmeerstraat 154<br>
                        1784 MA Den Helder<br>
                        Telefoon: 0223 – 634216
                    </p>
                    <p>
                        <strong>Onze openingstijden:</strong><br>
                        Maandag, dinsdag en donderdag:<br>
                        09:00 – 16.00<br>
                        Woensdag en vrijdag:<br>
                        09.00 – 12.30
                    </p>
                </div>

                <div class="middle-column column">
                    <a href="/">Home</a><br><br>
                    <a href="/wie-zijn-wij">Wie zijn wij</a><br><br>
                    <a href="">Activiteiten</a><br><br>
                    <a href="">Actueel</a><br><br>
                    <a href="">Contact</a><br><br>
                    <a href="">Privacyverklaring</a>
                </div>

                <div class="right-column column">
                    <div class="column-wrapper">
                        <p class="subscribe-title">Schrijf je in voor onze nieuwsbrief:</p>

                        <NewsLetterSection/>

                        <p class="social-media">Volg ons op onze socials:</p>

                        <div class="social-icons flex">
                            <a href="https://www.facebook.com/IVCDenHelder/" target="_blank">
                                <img src="../../images/social/facebook-3-48.png" alt="Facebook logo">
                            </a>
                            <a href="https://www.linkedin.com/company/internationaal-vrouwen-centrum/" target="_blank">
                                <img src="../../images/social/linkedin-6-48.png" alt="LinkeIn logo">
                            </a>
                            <a href="https://www.instagram.com/ivcdenhelder/" target="_blank">
                                <img src="../../images/social/instagram-48.png" alt="Instagram logo">
                            </a>
                            <a href="https://www.youtube.com/channel/UCAqmlYAg9bLfFrhr90ifJzw" target="_blank">
                                <img src="../../images/social/youtube.png" alt="Youtube logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="site-footer">
                <div class="copy-right">© Internationaal Vrouwen Centrum Den Helder {{ currentYear }}</div>
            </div>
        </footer>
    </section>
</template>

<script>
import NewsLetterSection from "./NewsLetterSection.vue";

export default {
    name: "FooterSection",
    components: {
        NewsLetterSection
    },

    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
}
</script>

<style lang="scss">

footer.footer-container{
    background-color: #AE5D65;
    margin-top: 0;
    margin-bottom: 0;
    padding: 25px 25px 0 25px;

    .footer-wrapper {
        max-width: 1140px;
        padding-bottom: 25px;

        .column {
            width: 33.333%;

            &.left-column {
                color: #FFFBFB;
                font-family: "Public Sans", Sans-serif;
                font-size: 13px;
                font-weight: 400;
                padding: 30px 20px 20px 20px;

                img, p {
                    margin-bottom: 0.9rem;
                }
            }

            &.middle-column {
                text-align: left;
                color: #FFFFFF;
                font-family: "Public Sans", Sans-serif;
                padding: 30px 20px 20px 20px;

                a {

                    position: relative;
                    color: #fff;
                    text-decoration: none;

                    &:hover {
                        color: #fff;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        display: block;
                        width: 100%;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        background-color: #fff;
                        transform: scaleX(0);
                        transition: transform 0.3s ease;
                    }

                    &:hover::before {
                        transform: scaleX(1);
                    }
                }
            }

            &.right-column {
                padding: 10px 20px 20px 20px;

                .column-wrapper {

                    .subscribe-title,
                    .social-media {
                        color: #FFFFFF;
                        font-family: "Public Sans", Sans-serif;
                        font-weight: 400;
                        margin-bottom: 20px;
                    }

                    .social-media {
                        padding: 30px 0 0 0;
                    }

                    .newsletter-section {

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
                                background-color: #fff;
                                color: #000000;
                                font-family: "Roboto", Sans-serif;
                                font-weight: 500;
                                font-size: 15px;
                                padding: 12px 24px;
                                border-radius: 3px;
                                transition: all .2s ease-in-out;
                                border: solid 2px #fff;

                                &:hover {
                                    background-color: #dc7882;
                                    color: #FFFFFF;
                                }
                            }
                        }
                    }
                }

                .social-icons {

                    a {

                        img {
                            width: 30px;
                            height: 30px;
                            transition: all .2s ease-in-out;

                            &:hover {
                                animation: zoom-in-zoom-out 1s ease;
                            }
                        }

                        &:not(:last-child) {
                            padding-right: 10px;
                        }
                    }

                    @keyframes zoom-in-zoom-out {
                        0% {
                            transform: scale(1, 1);
                        }
                        50% {
                            transform: scale(1.2, 1.2);
                        }
                        100% {
                            transform: scale(1, 1);
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 770px) {
            flex-wrap: wrap;

            .column {
                width: 100%;
            }
        }
    }

    .site-footer {
        padding-top: 1rem;
        padding-bottom: 1rem;
        position: relative;
        background-color: #AE5D65;
        border-top: solid 1px #e8e8e8;
        text-align: center;

        .copy-right {
            color: #FFFFFF;
            font-size: 12px;
            font-family: "Public Sans", Sans-serif;
            font-weight: 100;
        }
    }
}

</style>
