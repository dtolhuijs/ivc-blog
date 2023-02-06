<template>
    <header>
        <nav-bar/>
        <banner-image/>
    </header>
</template>

<script>
import BannerImage from "./BannerImage.vue";
import NavBar from "./NavBar.vue";

export default {
    name: "HeaderSection",

    components: {
        NavBar,
        BannerImage,
    }
}
</script>

