<template>
    <section>
        <mission-section/>
        <activities-section/>
        <slide-show-section/>
        <participation-section/>
        <sign-up-section/>
        <counter-section/>
        <partner-section/>
    </section>
</template>

<script>
import MissionSection from "./home-page/MissionSection.vue";
import ActivitiesSection from "./home-page/ActivitiesSection.vue";
import SlideShowSection from "./home-page/SlideShowSection.vue";
import ParticipationSection from "./home-page/ParticipationSection.vue";
import SignUpSection from "./home-page/SignUpSection.vue";
import CounterSection from "./home-page/CounterSection.vue";
import PartnerSection from "./home-page/PartnerSection.vue";

export default {
    name: "HomePage",

    components: {
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
