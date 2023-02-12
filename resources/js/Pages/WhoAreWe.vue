<template>
    <section>
        <nav-bar/>
            <banner/>
        <footer-section/>
    </section>
</template>

<script>
import HeaderSection from "../Components/HeaderSection.vue";
import FooterSection from "../Components/Footer.vue";
import NavBar from "../Components/NavBar.vue";
import Banner from "./WhoAreWe/Banner.vue";

export default {
    name: "WhoAreWe",

    components: {
        Banner,
        NavBar,
        FooterSection,
        HeaderSection
    }
}
</script>
