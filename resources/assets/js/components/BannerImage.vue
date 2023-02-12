<template>
    <!-- Background image -->
    <div class="banner-image relative overflow-hidden bg-no-repeat bg-cover">
        <div class="absolute right-0 bottom-10 left-0 w-full overflow-hidden bg-fixed">
            <div class="flex justify-start items-center h-full">
                <div class="banner-section text-white px-6 md:px-12">

                    <h1 class="text-9xl banner-title">Empower!</h1>

                    <h3 class="banner-subtitle">
                        <strong>Het Internationaal Vrouwen Centrum</strong> zet zich al vanaf 1985 in voor
                        de integratie, participatie en emancipatie van vrouwen in Den Helder.</h3>

                    <button
                        type="button"
                        class="inline-block px-6 rounded"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Lees meer
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Background image -->
</template>

<script>
export default {
    name: "BannerImage"
}
</script>

<style lang="scss" scoped>
.banner-image {
    background-position: 50% 10%;
    background-image: url('../../images/ivc_bghome-scaled.jpg');
    height: 800px;
}
.banner-section {
    .banner-title {
        color: #FFFFFF;
        font-family: "Roboto", Sans-serif;
        font-size: 119px;
        font-weight: 600;

        @media only screen and (max-width: 600px) {
            font-size: 80px;
        }
    }

    .banner-subtitle {
        columns: 1;
        color: #AE5D65;
        font-family: "Roboto", Sans-serif;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        max-width: initial;
        width: 55%;
        padding: 2rem 0;
    }

    button {
        font-family: "Tahoma", Sans-serif;
        font-weight: 600;
        background-color: #AE5D65;
        border: solid 2px #AE5D65;
        padding: 10px 20px;
        transition: all .2s ease-in-out;

        &:hover {
            background-color: #fff;
            color: #AE5D65;
        }
    }
}
</style>
