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

<style lang="scss" scoped>
.header-img-wrapper {
    align-items: center;
    justify-content: center;
    display: flex;

    .header-img {
        height: auto;
        max-width: 100%;
    }
}
</style>
