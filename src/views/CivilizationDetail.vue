<template>
    <div class="civilization-detail">
        <div class="civ-name">{{ civilization.name }}</div>
        <div class="civ-container">
            <div class="civ-banner-wrapper">
                <img class="civ-banner" :src="civilization.banner" />
                <div class="civ-expansion">{{ civilization.expansion }}</div>
            </div>
            <div class="civ-info">
                <div class="civ-army-type">{{ civilization.army_type }}</div>
                <div class="civ-bonuses">
                    Civilization Bonus:
                    <div
                        class="civ-bonus civ-info-list"
                        v-for="(
                            bonus, index
                        ) in civilization.civilization_bonus"
                        :key="index"
                    >
                        &#183; {{ bonus }}
                    </div>
                </div>
                <div class="civ-team-bonus">
                    Team bonus:
                    <div class="civ-team-bonus-value civ-info-list">
                        &#183; {{ civilization.team_bonus }}
                    </div>
                </div>
            </div>
            <div class="civ-uniques">
                <div class="unique-technologies">
                    Unique Technologies:
                    <div
                        class="unique-tech"
                        v-for="(tech, index) in civilization.unique_tech"
                        :key="index"
                    >
                        &#183; {{ tech.name }}
                    </div>
                </div>
                <div class="unique-units">
                    Unique Units:
                    <div
                        class="unique-unit"
                        v-for="(unit, index) in civilization.unique_unit"
                        :key="index"
                    >
                        <img class="unique-unit-img" :src="unit.img" />
                        <div class="unique-unit-name">{{ unit.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import api from "../module/api/api";

export default {
    name: "CivilizationDetail",
    data() {
        return {
            civilization: [],
        };
    },
    beforeMount() {
        const route = useRoute();
        const civId = route.params.civId;
        const query = `civilizations/${civId}`;

        api.fetchData(query).then((data) => (this.civilization = data));
    },
};
</script>

<style lang="scss" scoped>
.civilization-detail {
    border: 1px solid white;
    border-radius: 8px;
    margin: 0 10%;
    padding: 0 2%;

    .civ-name {
        font-size: 30px;
        font-weight: bold;
        margin: 20px 2%;
    }

    .civ-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .civ-banner-wrapper {
        align-self: center;
        margin-bottom: 10px;
        text-align: center;
    }

    .civ-info {
        margin: 10px 0;

        .civ-info-list {
            margin-left: 30px;
            margin-top: 5px;
        }
    }

    .civ-info > div {
        margin-bottom: 10px;
    }

    .civ-uniques {
        margin: 10px 0;

        .unique-technologies {
            .unique-tech {
                margin-left: 30px;
                margin-top: 5px;
            }
        }

        .unique-units {
            margin-top: 10px;

            .unique-unit {
                align-items: center;
                display: flex;
                margin: 10px 30px;

                .unique-unit-img {
                    height: 60px;
                    margin-right: 10px;
                    width: 60px;
                }
            }
        }
    }
}
</style>