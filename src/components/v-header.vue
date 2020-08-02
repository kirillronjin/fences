<template>
    <div class="v-header">
        <div class="title">Пёс Семён</div>
        <nav class="navigation">

            <router-link class='link' :to="{name: 'index'}">
                <div>Главная</div>
            </router-link>
            <router-link class='link' :to="{name: 'about'}">
                <div>О нас</div>
            </router-link>
            <router-link class='link' :to="{name: 'contacts'}">
                <div>Контакты</div>
            </router-link>
            <router-link class='link' :to="{name: 'prices'}">
                <div>Цены</div>
            </router-link>
        </nav>
    </div>
</template>

<script>

    export default {
        name: "v-header",
        methods: {

        },

    }
</script>

<style>
    .v-header {
        background: #2c3e50;
        position: sticky;
        top: 0;
        border: #ffea7e 1px solid;
        right: 0;
    }
    .navigation {
        display: flex;
        text-align: center;
        justify-content: space-around;
        background: #2c3e50;
        color: #ffffff;
        font-size: 20px;
        vertical-align: center;
        padding: 5px;
    }

    .title {
        padding: 5px;
        color: #ffea7e;
        font-size: 30px;
        border-bottom: #ffea7e 1px solid;
    }
    .link {
        color: #ffffff;
        text-decoration: none;
        padding: 3px;
    }
    .link:hover {
        color: #ffea7e
    }
    .router-link-exact-active {
        color: #ffea7e;
        box-shadow: inset 0 0 2px #ffea7e;
    }

</style>