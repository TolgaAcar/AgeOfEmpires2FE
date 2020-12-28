<template>
    <div class="main">
        <div class="header-img-wrapper">
            <img class="header-img" src="../assets/title.jpg" />
        </div>
        <Civilization-List />
    </div>
</template>

<script>
import CivilizationList from "./CivilizationList.vue";

export default {
    name: "Main",
    components: {
        CivilizationList,
    },
};
</script>

<style scoped>
.header-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img {
    max-width: 100%;
    height: auto;
}
</style>
