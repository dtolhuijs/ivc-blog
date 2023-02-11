<template>
    <section>
        <mission-section/>
        <activities-section/>
        <slide-show-section/>
        <participation-section/>
    </section>
</template>

<script>
import MissionSection from "./home-page/MissionSection.vue";
import ActivitiesSection from "./home-page/ActivitiesSection.vue";
import SlideShowSection from "./home-page/SlideShowSection.vue";
import ParticipationSection from "./home-page/ParticipationSection.vue";

export default {
    name: "HomePage",

    components: {
        ParticipationSection,
        MissionSection,
        ActivitiesSection,
        SlideShowSection
    }
}
</script>
