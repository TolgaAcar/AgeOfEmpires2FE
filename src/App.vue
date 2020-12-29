<template>
    <Main />
</template>

<script>
import Main from "./components/Main.vue";

export default {
    name: "App",
    components: {
        Main,
    },
};
</script>

<style lang="scss">
#app {
    color: white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin-top: 60px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: #383838;
    background-image: url("https://i.hizliresim.com/jdAsk5.jpg");
}
</style>
