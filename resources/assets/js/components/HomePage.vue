<template>
    <section>
        <mission-section></mission-section>
        <activities-section></activities-section>
    </section>
</template>

<script>
import MissionSection from "../home-page-sections/MissionSection.vue";
import ActivitiesSection from "../home-page-sections/ActivitiesSection.vue";

export default {
    name: "HomePage",
    components: { MissionSection, ActivitiesSection }
}
</script>
