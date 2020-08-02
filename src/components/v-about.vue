<template>
    <div class="v-about">
        <vue-headful
                :title="title"
                description="Static description"
        />
        <v-header/>
        <div class="about-content">
            <div class="page_title">
                О нас
            </div>
        </div>
        <v-footer/>
    </div>
</template>

<script>

    import VHeader from "./v-header";
    import vueHeadful from 'vue-headful'
    import vFooter from './v-footer'
    export default {
        name: "v-about",
        components: {
            VHeader,
            vueHeadful,
            vFooter
        },
        data() {
            return {
                title: 'О нас',
            };
        },
    }
</script>

<style>
    .v-about {

    }
    .about-content {
        font-size:30px;
        height: 600px;
        background: url("../images/body-background.jpg");
        background-size: contain;
    }
    .page_title {
        color: #ffffff
    }
</style>