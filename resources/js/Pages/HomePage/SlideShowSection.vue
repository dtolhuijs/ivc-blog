<template>
    <div class="slider-section">
        <div class="flex justify-center items-center">
            <h2 class="testimonies-title">Zij gingen jou voor:</h2>
        </div>
        <VueSlickCarousel v-bind="settings" ref="carousel">
            <div class="h-auto text-dark text-center text-4xl p-6">
               <img class="slide-img" src="../../../images/slider/ashley.png" alt="Ashley image">
                <p class="slider-text">
                    "Een paar jaar geleden kwam ik na een burn-out bij het IVC terecht als vrijwilliger.
                    Bij het IVC kon ik op eigen tempo en met mijn eigen kwaliteiten een bijdrage leveren aan het PR team.
                    Inmiddels werk ik weer (bijna) fulltime in de non-profit sector en doe ik daarnaast nog steeds
                    vrijwilligerswerk voor het IVC (waaronder het maken van deze website!)."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Ashley</p>
                    <p class="position">Vrijwilliger</p>
                </div>
            </div>
            <div class="h-auto text-dark text-center text-4xl p-6">
                <img class="slide-img" src="../../../images/slider/Anneke.png" alt="Anneke image">
                <p class="slider-text">
                    "Ik ben hier bij het IVC gekomen toen ik mijn baan kwijtraakte als marinebioloog.
                    Ik heb deelgenomen aan activiteiten, vrijwilligerswerk en de competentietraining,
                    die mij allemaal inzicht gaven in mijn kwaliteiten en wat ik leuk vond. Uiteindelijk heb ik weer
                    een nieuwe baan gevonden."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Anneke</p>
                    <p class="position">Deelnemer</p>
                </div>
            </div>
            <div class="h-auto text-dark text-center text-4xl p-6">
                <img class="slide-img" src="../../../images/slider/Niela.png" alt="Niela image">
                <p class="slider-text">
                    "Ook ik deed mee aan de empowerment training op het IVC en ik deed vrijwilligerswerk als begeleider
                    bij de ontmoetingsbijeenkomst. Ik vond het moeilijk om een betaalde baan te vinden.
                    Dankzij de training "Klaar voor de Start" is het mij gelukt om te ontdekken wat de beer op
                    de weg was en deze te overwinnen. Nu werk ik met veel plezier in een supermarkt en ben ik de kostwinner thuis."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Niela</p>
                    <p class="position">Deelnemer</p>
                </div>
            </div>
            <div class="h-auto text-dark text-center text-4xl p-6">
                <img class="slide-img" src="../../../images/slider/Jacky.png" alt="Jacky image">
                <p class="slider-text">
                    "Ik liep stage bij het IVC voor mijn studie Social Work. Ik kreeg de kans om mij hier te
                    ontwikkelen als sociaal werker door alle verantwoordelijkheden die ik hier kreeg en ik maakte
                    kennis met diverse culturen en cultuurelementen. Ik ben warm ontvangen, voelde me op mijn gemak,
                    en kan daardoor mijn opleiding met succes afronden."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Jacky</p>
                    <p class="position">Stagiaire</p>
                </div>
            </div>
            <div class="h-auto text-dark text-center text-4xl p-6">
                <img class="slide-img" src="../../../images/slider/Khadija2.png" alt="Khadija image">
                <p class="slider-text">
                    "Ik ben hoogopgeleid in mijn land van herkomst. In Nederland moest ik een nieuwe taal leren.
                    Dat kan ik hier bij het IVC,  omdat ik vrijwilligerswerk doe en zo met veel mensen in contact kom.
                    Ik voel me erg gewaardeerd en ik vind het heel leuk."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Khadija</p>
                    <p class="position">Deelnemer</p>
                </div>
            </div>
            <div class="h-auto text-dark text-center text-4xl p-6">
                <img class="slide-img" src="../../../images/slider/Varduhi.png" alt="Varduhi image">
                <p class="slider-text">
                    "Wat betekent het IVC voor mij? Dat is heel veel. Omdat ik mezelf kan ontwikkelen door deel
                    te nemen aan het managementteam en het volgen van trainingen. Daardoor heb ik mijn juridische
                    kant ontwikkeld."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Varduhi</p>
                    <p class="position">Deelnemer</p>
                </div>
            </div>
            <div class="h-auto text-dark text-center text-4xl p-6">
                <img class="slide-img" src="../../../images/slider/marlies.jpg" alt="Marlies image">
                <p class="slider-text">
                    "We hebben alle vrouwen iets te bieden. We zijn er voor autochtone en allochtone vrouwen.
                    Voor jonge vrouwen en oudere vrouwen. Voor vrouwen zonder opleiding tot en met universitair
                    opgeleid. Het is onze missie álle vrouwen te empoweren naar financiële onafhankelijkheid en
                    sociale zelfredzaamheid."
                </p>
                <div class="slider-subtitles">
                    <p class="name">Marlies</p>
                    <p class="position">Directeur</p>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Slider',
    components: { VueSlickCarousel },
    data() {
        return {
            arrows: false,
            settings: {
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnFocus: true,
                pauseOnHover: false,
                arrows: true,
                edgeFriction: 0.35,
                infinite: true,
                speed: 500,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "initialSlide": 1,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "dots": true
                        }
                    }
                ]
            },
        };
    },
    mounted() {
        const elements = document.getElementsByClassName("slick-arrow");
        Array.from(elements).forEach((element) => {
            element.addEventListener("click", function (e) {
                const sliderElement = document.getElementsByClassName("slick-slide");
                if (sliderElement.length > 0) {
                    sliderElement[0].focus();
                }
            });
            element.addEventListener("mouseover", function (e) {
                const sliderElement = document.getElementsByClassName("slick-slide");
                if (sliderElement.length > 0) {
                    sliderElement[0].focus();
                }
            });
            element.addEventListener("mouseleave", function (e) {
                const sliderElement = document.getElementsByClassName("slick-slide");
                if (sliderElement.length > 0) {
                    sliderElement[0].blur();
                }
            });
        });
    },
}
</script>

<style lang="scss" scoped>
    .slider-section {
        padding: 0 0 50px 0;
        max-width: 1140px;
        margin: 0 auto;

        .testimonies-title {
            margin: 0 50px 50px 50px;
            padding: 0;
            font-size: 2rem;
            font-family: "Public Sans", Sans-serif;
        }

        .slide-img {
            width: 180px;
            height: 180px;
            border-radius: 100px;
            margin: 0 auto;
        }
        .slider-text {
            font-family: "Public Sans", Sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5rem;
            margin-top: 25px;
            color: #7A7A7A;
            font-style: italic;
        }

        .slider-subtitles {
            margin-top: 25px;
            font-size: 1rem;
            font-family: "Public Sans", Sans-serif;
            font-style: italic;
            color: #000000;

            .name {
                font-weight: 700;
            }
            .position {
                font-weight: 400;
                margin-top: -16px;
            }
        }
    }
</style>
