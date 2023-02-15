<template>
    <section>
        <div class="video">
            <div class="video-wrapper flex m-auto">
                <iframe class="elementor-video" frameborder="0" allowfullscreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title="Internationaal Vrouwen Centrum in Den Helder"
                        src="https://www.youtube.com/embed/U08OahoYw4c?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fivcdenhelder.nl&amp;widgetid=1"
                >
                </iframe>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "VideoSection",
}
</script>

<style lang="scss" scoped>
    .video {
        padding: 50px 50px 0 50px;

        .video-wrapper {
            max-width: 1140px;

            iframe {
                max-width: 100%;
                width: 100%;
                height: 600px;

                @media only screen and (max-width: 800px) {
                    height: 360px;
                }
            }
        }
    }
</style>
