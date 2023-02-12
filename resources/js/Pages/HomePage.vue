<template>
    <section>
        <header-section/>
        <mission-section/>
        <activities-section/>
        <slide-show-section/>
        <participation-section/>
        <sign-up-section/>
        <counter-section/>
        <partner-section/>
        <footer-section/>
    </section>
</template>

<script>
import MissionSection from "./HomePage/MissionSection.vue";
import ActivitiesSection from "./HomePage/ActivitiesSection.vue";
import SlideShowSection from "./HomePage/SlideShowSection.vue";
import ParticipationSection from "./HomePage/ParticipationSection.vue";
import SignUpSection from "./HomePage/SignUpSection.vue";
import CounterSection from "./HomePage/CounterSection.vue";
import PartnerSection from "./HomePage/PartnerSection.vue";
import HeaderSection from "../Components/HeaderSection.vue";
import FooterSection from "../Components/Footer.vue";

export default {
    name: "HomePage",

    components: {
        FooterSection,
        HeaderSection,
        PartnerSection,
        CounterSection,
        SignUpSection,
        ParticipationSection,
        MissionSection,
        ActivitiesSection,
        SlideShowSection
    }
}
</script>
