<template>
    <div class="civilization" v-if="civ.banner">
        <div class="civ-name">{{ civ.name }}</div>
        <img class="civ-banner" :src="civ.banner" />
        <div class="civ-info">
            <table style="width: 100%">
                <tr>
                    <th>Introduced in:</th>
                    <td>{{ civ.expansion }}</td>
                </tr>
                <tr>
                    <th>Focus:</th>
                    <td>{{ civ.army_type }}</td>
                </tr>
                <tr>
                    <th>Unique Tech:</th>
                    <td>
                        <div
                            class="info-content"
                            v-for="(tech, index) in civ.unique_tech"
                            :key="index"
                        >
                            {{ tech.name }}
                        </div>
                    </td>
                </tr>
            </table>
            <div class="civ-unique-unit">
                <div
                    class="unique-unit-content"
                    v-for="(unit, index) in civ.unique_unit"
                    :key="index"
                >
                    <img class="unique-unit-img" :src="unit.img" />
                    <div class="unique-unit-name">{{ unit.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Civilization",
    props: {
        civ: Object,
    },
};
</script>

<style lang="scss" scoped>
.civilization {
    border: 1px solid white;
    border-collapse: collapse;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
    height: 350px;
    text-align: center;
    width: 204px;

    &:hover {
        transform: scale(1.03);
    }

    .civ-name {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
    }

    .civ-banner {
        align-self: center;
        margin: 20px;
        height: 104px;
        width: 104px;
    }

    .civ-info {
        font-size: 12px;

        table {
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            margin-bottom: 20px;
        }

        .civ-unique-unit {
            display: flex;
            justify-content: start;

            .unique-unit-content:not(:last-child) {
                margin-right: 5px;
            }

            .unique-unit-img {
                height: 25px;
                width: 25px;
            }
        }
    }
}
</style>
