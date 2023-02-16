<template>
    <section>
        <nav-bar/>

        <banner/>
        <notice/>
        <vacancies-section/>
        <notice/>

        <footer-section/>
    </section>
</template>

<script>
import NavBar from "../Components/NavBar.vue";
import FooterSection from "../Components/Footer.vue";
import Banner from "./Vacancies/Banner.vue";
import VacanciesSection from "./Vacancies/VacanciesSection.vue";
import Notice from "./Vacancies/Notice.vue";

export default {
    name: "Vacancies",

    components: {
        Notice,
        Banner,
        NavBar,
        FooterSection,
        VacanciesSection,
    }
}
</script>
