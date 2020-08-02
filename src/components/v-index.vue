<template>
    <div class="v-index">
            <vue-headful
                    :title="title"
                    description="Static description"
            />
        <v-header/>
        <div class="index-content">
            <div class="page_title">
                 Главная
            </div>
        </div>
        <v-footer/>
    </div>
</template>

<script>
    import vHeader from './v-header'
    import vFooter from './v-footer'
    import vueHeadful from 'vue-headful'
    export default {
        name: "v-index",
        components: {
            vHeader,
            vueHeadful,
            vFooter
        },
        data() {
            return {
                title: 'Главная',
            };
        },
    }
</script>

<style>
    .v-index {

    }
    .index-content {
        font-size:30px;
        height: 600px;
        background: url("../images/body-background.jpg");
        background-size: contain;
    }
    .page_title {
        color: #ffffff
    }

</style>