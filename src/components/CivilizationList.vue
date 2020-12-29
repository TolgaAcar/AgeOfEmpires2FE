<template>
    <div class="civilization-list-content">
        <div class="civilization-list">
            <div v-for="civ in civs" :key="civ.id" class="civ-wrapper">
                <Civilization :civ="civ" />
            </div>
        </div>
    </div>
</template>

<script>
import Civilization from "./Civilization.vue";

export default {
    name: "CivilizationList",
    components: {
        Civilization,
    },
    data() {
        return {
            civs: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/civilizations")
            .then((res) => res.json())
            .then((data) => (this.civs = data))
            .catch((err) => console.log(err));
    },
};
</script>

<style lang="scss" scoped>
.civilization-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
