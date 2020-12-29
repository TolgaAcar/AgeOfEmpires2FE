<template>
    <div class="home">
        <Civilization-List />
    </div>
</template>

<script>
import CivilizationList from "../components/CivilizationList.vue";

export default {
    name: "Home",
    components: {
        CivilizationList,
    },
};
</script>

<style lang="scss" scoped>
</style>
