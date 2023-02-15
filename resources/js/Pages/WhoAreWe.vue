<template>
    <section>
        <nav-bar/>

        <banner/>
        <goal/>
        <video-section/>
        <mission/>
        <participation-section/>
        <management/>
        <slide-show-section/>

        <footer-section/>
    </section>
</template>

<script>
import Goal from "./WhoAreWe/Goal.vue";
import Banner from "./WhoAreWe/Banner.vue";
import Mission from "./WhoAreWe/Mission.vue";
import NavBar from "../Components/NavBar.vue";
import Management from "./WhoAreWe/Management.vue";
import VideoSection from "./WhoAreWe/VideoSection.vue";
import FooterSection from "../Components/Footer.vue";
import HeaderSection from "../Components/HeaderSection.vue";
import SlideShowSection from "./HomePage/SlideShowSection.vue";
import ParticipationSection from "./HomePage/ParticipationSection.vue";

export default {
    name: "WhoAreWe",

    components: {
        Goal,
        Banner,
        NavBar,
        Mission,
        Management,
        VideoSection,
        HeaderSection,
        FooterSection,
        SlideShowSection,
        ParticipationSection
    }
}
</script>
