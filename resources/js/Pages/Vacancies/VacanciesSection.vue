<template>
    <section>
        <div class="vacancies-section flex m-auto">
            <div class="content-wrapper">
                <div class="news-card">
                    <img src="../../../images/vacancies/food.jpeg" alt="" class="news-card__image">
                    <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">Internationaal Koken en Ontmoeten</h2>
                        <div class="news-card__post-date">Jan 29, 2023</div>
                        <div class="news-card__details-wrapper">
                            <p class="news-card__excerpt">
                                Het IVC is op zoek naar enthousiaste vrijwilligers die de bijeenkomst willen begeleiden.
                                Het is de bedoeling dat degene die kookt ook over haar cultuur vertelt en samen met de
                                andere deelnemers gerechten uit het land van herkomst bereiden. De bijeenkomsten zijn op dinsdag van 11:30 tot 14:30.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="news-card">
                    <img src="../../../images/vacancies/computer-help.jpeg" alt="" class="news-card__image">
                    <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">Computercursus docent</h2>
                        <div class="news-card__post-date">Jan 29, 2018</div>
                        <div class="news-card__details-wrapper">
                            <p class="news-card__excerpt">
                                Heeft u verstand van computers en vindt u het leuk om uw kennis van de basisvaardigheden
                                van de computer te delen? Het IVC is op zoek naar een vrijwilliger die de computercursus
                                kan geven. Functie eisen: zeer ervaren met computer programma en Microsoft Office.
                                De computercursus wordt op donderdag van 13:00 tot 15:00 gegeven.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="news-card">
                    <img src="../../../images/vacancies/balie.jpeg" alt="" class="news-card__image">
                    <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">Baliemedewerker</h2>
                        <div class="news-card__post-date">Jan 29, 2018</div>
                        <div class="news-card__details-wrapper">
                            <p class="news-card__excerpt">
                                Het IVC is op zoek naar enthousiaste vrijwilligers die ons balieteam kunnen komen versterken.
                                Lijkt het u leuk om op een betrokken manier met de deelnemers te werken, en licht
                                administratieve werkzaamheden uit te voeren? Meld u dan nu aan als vrijwilliger voor de balie.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="news-card">
                    <img src="../../../images/vacancies/bike.jpeg" alt="" class="news-card__image">
                    <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">Fietscursus docent</h2>
                        <div class="news-card__post-date">Jan 29, 2018</div>
                        <div class="news-card__details-wrapper">
                            <p class="news-card__excerpt">
                                Vindt u de afwisseling van binnen en buiten werken fijn? En wilt u de deelnemers iets
                                praktisch leren waardoor zij zelfstandiger worden? Dit is zowel een leerzame als
                                sociale activiteit. Het IVC is op zoek naar enthousiaste vrijwilligers die de
                                fietscursus willen begeleiden.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="news-card">
                    <img src="../../../images/vacancies/pr-team.jpeg" alt="" class="news-card__image">
                    <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">PR Team</h2>
                        <div class="news-card__post-date">Jan 29, 2018</div>
                        <div class="news-card__details-wrapper">
                            <p class="news-card__excerpt">
                                Het IVC is altijd op zoek naar vrijwilligers die het pr-team willen versterken.
                                Dit team is verantwoordelijk voor de promotie van berichten intern en buiten het IVC in
                                media als analoog en digitaal. Kunt u het IVC bekend maken en anderen enthousiast
                                maken over het centrum? Bent u niet bang om te spreken en kunt u actief meedenken?
                                Meld u dan aan voor het PR-Team!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="news-card">
                    <img src="../../../images/vacancies/children.jpeg" alt="" class="news-card__image">
                    <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">Kinderopvang</h2>
                        <div class="news-card__post-date">Jan 29, 2018</div>
                        <div class="news-card__details-wrapper">
                            <p class="news-card__excerpt">
                                Wilt u graag met kinderen werken en helpen het IVC bereikbaar te houden voor moeders?
                                Het IVC is op zoek naar enthousiaste vrijwilligers voor de kinderopvang.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "VacanciesSection",
}
</script>

<style lang="scss" scoped>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Public Sans", Sans-serif;
}

.content-wrapper {
    margin: 0 auto;
    max-width: 1140px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 0.5rem;

    .news-card {
        border: 0px solid aqua;
        margin: 0.5rem;
        position: relative;
        height: 12rem;
        overflow: hidden;
        border-radius: 0.5rem;
        flex: 1;
        min-width: 290px;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(44, 44, 44, 0.7) 80%);
            z-index: 0;
        }

        .news-card__card-link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .news-card__image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition: transform 3s ease;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: relative;
            z-index: -1;
        }

        .news-card__text-wrapper {
            position: absolute;
            bottom: 0rem;
            padding: 1rem;
            color: white;
            transition: background-color 1.5s ease;

            .news-card__title {
                transition: color 1s ease;
                margin-bottom: .5rem;
            }

            .news-card__post-date {
                font-size: .7rem;
                margin-bottom: .5rem;
                color: #CCC;
            }

            .news-card__details-wrapper {
                max-height: 0;
                opacity: 0;
                transition: max-height 1.5s ease, opacity 1s ease;

                .news-card__excerpt {
                    font-weight: 300;
                }

                .news-card__read-more {
                    background: black;
                    color: #bbb;
                    display: block;
                    padding: 0.4rem 0.6rem;
                    border-radius: 0.3rem;
                    margin-top: 1rem;
                    border: 1px solid #444;
                    font-size: 0.8rem;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    text-decoration: none;
                    width: 7rem;
                    margin-left: auto;
                    position: relative;
                    z-index: 5;

                }
            }
        }
    }

    @media (min-width: 900px) {

        .news-card {
            height: 20rem
        }
    }

    @media (min-width: 900px) {
        .news-card:hover .news-card__details-wrapper {
            max-height: 20rem;
            opacity: 1;
        }
        .news-card:hover .news-card__text-wrapper {
            background-color: rgba(0, 0, 0, 0.6);
        }
        .news-card:hover .news-card__title {
            color: #ffabb2;
            font-weight: bold;
            font-size: 20px;
        }
        .news-card:hover .news-card__image {
            transform: scale(1.2);
            z-index: -1;
        }
    }
}
</style>
