<template>
    <section>
        <nav-bar/>

        <banner/>
        <goal/>
        <slide-show-section/>

        <footer-section/>
    </section>
</template>

<script>
import Goal from "./WhoAreWe/Goal.vue";
import Banner from "./WhoAreWe/Banner.vue";
import NavBar from "../Components/NavBar.vue";
import FooterSection from "../Components/Footer.vue";
import HeaderSection from "../Components/HeaderSection.vue";
import SlideShowSection from "./HomePage/SlideShowSection.vue";

export default {
    name: "WhoAreWe",

    components: {
        Goal,
        Banner,
        NavBar,
        HeaderSection,
        FooterSection,
        SlideShowSection,
    }
}
</script>
