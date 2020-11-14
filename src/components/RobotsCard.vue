<template>
        <div>
        <div class="columns">
            <div class="column">
                <button class="button is-outlined is-fullwidth"  v-on:click="loadRobots()">Robôs</button>
            </div>
            <div class="column is-one-fifth" v-if="robots">
                <button class="button is-outlined is-fullwidth"  v-on:click="close()"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div v-if="robots">
            <ul>
                <li v-for="robot in robots" :key="robot.key">
                    {{ robot.robot_name }} - {{ robot.year }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'

export default {
    name: 'RobotsCard',

    props: {
        number: String,
    },

    data() {
        return {
            robots: null,
        }
    },

    methods: {
        async loadRobots() {
            this.robots = await theBlueAllianceService.robots(this.number)
        },

        close() {
            this.robots = null
        },
    },
}
</script>