<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    //import vHeader from './v-header'
    //import VAbout from "./v-about";

    export default {
        name: "v-main-wrapper",
        components: {

        }
    }
</script>

<style>
    .v-main-wrapper {
        width: 100%;
    }
</style>