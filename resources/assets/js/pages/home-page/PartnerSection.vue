<template>
    <section>
        <div class="partner-section">
            <div class="partner-container flex justify-center items-center m-auto">
                <div class="img-container flex justify-center items-center">
                    <img src="../../../images/partners/UNedu.png" alt="UN logo">
                </div>

                <div class="img-container flex justify-center items-center">
                    <img src="../../../images/partners/gemeente.png" alt="Den Helder gemeente logo">
                </div>

                <div class="img-container flex justify-center items-center">
                    <img src="../../../images/partners/eucom.png" alt="EU logo">
                </div>

                <div class="img-container flex justify-center items-center">
                    <img src="../../../images/partners/eaea.png" alt="Eaea logo">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PartnerSection",
}
</script>

<style lang="scss" scoped>
    .partner-section {
        margin-top: 75px;
        margin-bottom: 75px;

        .partner-container {
            max-width: 1140px;

            .img-container {
                width: 25%;
                padding: 10px;
            }

            @media only screen and (max-width: 800px) {
                flex-wrap: wrap;
                .img-container {
                    width: 50%;
                }
            }
        }
    }
</style>
