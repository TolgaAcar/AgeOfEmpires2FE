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

<style scoped>
.civ-list-title {
    font-size: 2.5em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: center;
}

.civilization-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
