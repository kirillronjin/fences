<template>
    <div class="v-contacts">
        <vue-headful
                :title="title"
                description="Static description"
        />
        <v-header/>
        <div class="contacts-content">
            <div class="page_title">
                Контакты
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
        name: "v-contacts",
        components: {
            VHeader,
            vueHeadful,
            vFooter
        },
        data() {
            return {
                title: 'Контакты',
            };
        },
    }
</script>

<style>
    .v-contacts {

    }
    .contacts-content {
        font-size:30px;
        height: 600px;
        background: url("../images/body-background.jpg");
        background-size: contain;
    }
    .page_title {
        color: #ffffff
    }
</style>