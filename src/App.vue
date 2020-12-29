<template>
    <router-link to="/">
        <div class="header-img-wrapper">
            <img class="header-img" src="./assets/title.jpg" />
        </div>
    </router-link>
    <router-view />
</template>

<script>
export default {
    name: "App",
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

.header-img-wrapper {
    align-items: center;
    justify-content: center;
    display: flex;

    .header-img {
        height: auto;
        max-width: 100%;
    }
}

a {
    color: inherit;
    text-decoration: none;
}
</style>
