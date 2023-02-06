<template>
    <div class="mission-section">
        <div class="flex justify-center items-center">
            <img src="../../../images/marlies-150x150.jpg" alt="Marlies Pfann">
        </div>
        <div class="flex justify-center items-center">
            <p class="mission-text">
                ’Het is onze missie vrouwen te empoweren naar sociale zelfredzaamheid en financiële onafhankelijkheid!’’
            </p>
        </div>
        <div class="flex justify-center items-center">
            <p class="mission-title">Marlies Pfann</p>
        </div>
        <div class="flex justify-center items-center">
            <p class="mission-subtitle">
                Directeur van het IVC
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MissionSection",
}
</script>

<style lang="scss" scoped>
    .mission-section {
        margin-top: 100px;
        margin-bottom: 50px;
        padding: 0 0 50px 0;

        img {
            filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
            border-radius: 218px 218px 218px 218px;
            margin-bottom: 20px;
        }

        .mission-text {
            text-align: center;
            color: #AE5D65;
            font-family: "Roboto", Sans-serif;
            font-size: 23px;
            font-weight: 600;
            font-style: italic;
            letter-spacing: 0.5px;
            padding-bottom: 1rem;
            width: 52%;
            max-width: 52%;
        }

        .mission-title {
            text-align: center;
            color: #000000;
            font-family: "Sacramento", Sans-serif;
            font-size: 47px;
            font-weight: 400;
        }
    }
</style>
