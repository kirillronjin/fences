<template>
    <div class="v-footer">
        <div class="vk">
            <a class="link_vk" href="https://vk.com/lasthitfoma">Мы ВКонтакте</a>
        </div>
        <div class="phone">
            Телефон: 8-999-999-99-99
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-footer"
    }
</script>

<style>
    .v-footer {
        background: #2c3e50;
        color: #ffffff;
        position: fixed; /* Фиксированное положение */
        left: 0; bottom: 0; /* Левый нижний угол */
        width: 100%; /* Ширина слоя */

        display: flex;
        text-align: center;
        justify-content: space-around;
        font-size: 15px;
        vertical-align: center;
        padding: 5px;
    }
    .link_vk {
        color: #ffffff;
        text-decoration: underline;
    }
    .link_vk:hover {
        color: #ffea7e
    }
</style>