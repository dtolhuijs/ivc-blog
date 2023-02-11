<template>
    <section>
        <header-section/>
        <home-page/>
        <footer-section/>
    </section>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/Footer.vue";
export default {
    name: "App",

    components: {
        HeaderSection,
        HomePage,
        FooterSection
    }
}
</script>
