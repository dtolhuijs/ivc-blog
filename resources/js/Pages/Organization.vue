<template>
    <section>
        <nav-bar/>
            <organization-section/>
            <organization-style/>
        <footer-section/>
    </section>
</template>

<script>
import NavBar from "../Components/NavBar.vue";
import FooterSection from "../Components/Footer.vue";
import OrganizationSection from "./Organization/OrganizationSection.vue";
import OrganizationStyle from "./Organization/OrganizationStyle.vue";

export default {
    name: "Organization",

    components: {
        OrganizationStyle,
        NavBar,
        FooterSection,
        OrganizationSection,
    }
}
</script>

