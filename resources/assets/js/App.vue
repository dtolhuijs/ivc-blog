<template>
    <section>
        <header-section/>
        <home-page/>
    </section>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import HeaderSection from "./components/HeaderSection.vue";
export default {
    name: "App",

    components: {
        HeaderSection,
        HomePage,
    }
}
</script>
