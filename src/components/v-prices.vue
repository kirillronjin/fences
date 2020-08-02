<template>
    <div class="v-prices">
        <vue-headful
                :title="title"
                description="Static description"
        />
        <v-header/>
        <div class="prices-content">
            <div class="page_title">
                Цены
            </div>
        </div>
        <v-footer/>
    </div>
</template>

<script>
    import vueHeadful from 'vue-headful'
    import VHeader from "./v-header";
    import vFooter from './v-footer'
    export default {
        name: "v-prices",
        components: {
            VHeader,
            vueHeadful,
            vFooter
        },
        data() {
            return {
                title: 'Цены',
            };
        },
    }
</script>

<style>
    .v-prices {

    }
    .prices-content {
        font-size:30px;
        height: 600px;
        background: url("../images/body-background.jpg");
        background-size: contain;
    }
    .page_title {
        color: #ffffff
    }
</style>