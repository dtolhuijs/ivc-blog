<template>
    <section>
        <nav-bar/>

        <project-summary/>
        <local-projects/>
        <national-projects/>
        <european-projects/>

        <footer-section/>
    </section>
</template>

<script>
import NavBar from "../Components/NavBar.vue";
import FooterSection from "../Components/Footer.vue";
import ProjectSummary from "./Projects/ProjectSummary.vue";
import LocalProjects from "./Projects/LocalProjects.vue";
import NationalProjects from "./Projects/NationalProjects.vue";
import EuropeanProjects from "./Projects/EuropeanProjects.vue";

export default {
    name: "Organization",

    components: {
        EuropeanProjects,
        NationalProjects,
        LocalProjects,
        NavBar,
        FooterSection,
        ProjectSummary,
    }
}
</script>
