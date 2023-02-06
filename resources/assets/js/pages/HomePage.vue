<template>
    <section>
        <mission-section/>
        <activities-section/>
        <slide-show-section/>
    </section>
</template>

<script>
import MissionSection from "./home-page/MissionSection.vue";
import ActivitiesSection from "./home-page/ActivitiesSection.vue";
import SlideShowSection from "./home-page/SlideShowSection.vue";

export default {
    name: "HomePage",

    components: {
        MissionSection,
        ActivitiesSection,
        SlideShowSection
    }
}
</script>
