<template>
    <section>
        <nav-bar/>

        <banner/>
        <goal/>
        <participation-section/>
        <slide-show-section/>
        <footer-section/>
    </section>
</template>

<script>
import HeaderSection from "../Components/HeaderSection.vue";
import FooterSection from "../Components/Footer.vue";
import NavBar from "../Components/NavBar.vue";
import Banner from "./WhoAreWe/Banner.vue";
import Goal from "./WhoAreWe/Goal.vue";
import ParticipationSection from "./HomePage/ParticipationSection.vue";
import SlideShowSection from "./HomePage/SlideShowSection.vue";
export default {
    name: "WhoAreWe",

    components: {
        Goal,
        Banner,
        NavBar,
        FooterSection,
        HeaderSection,
        ParticipationSection,
        SlideShowSection
    }
}
</script>
