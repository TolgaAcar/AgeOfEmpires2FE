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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    margin-top: 60px;
}

body {
    background-image: url("https://i.hizliresim.com/jdAsk5.jpg");
    background-color: #383838;
}
</style>
