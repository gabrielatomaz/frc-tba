<template>
        <div>
        <div class="columns">
            <div class="column">
                <Button text="Robots" :event="loadRobots" :loading="loading" />
            </div>
            <div class="column is-one-fifth" v-if="robots">
                <Button :event="close" icon="times" />
            </div>
        </div>
        <div v-if="robots">
            <ul>
                <li v-for="robot in robots" :key="robot.key">
                    {{ robot.year }} - {{ robot.robot_name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import Button from './Button'

export default {
    name: 'RobotsCard',

    components: { Button },

    props: {
        number: Number,
    },

    data() {
        return {
            robots: null,
            loading: false,
        }
    },
    
    watch: {
        number() {
            this.robots = null
        },
    },

    methods: {
        async loadRobots() {
            this.loading = true

            this.robots = await theBlueAllianceService.robots(this.number)

            this.loading = false
        },

        close() {
            this.robots = null
        },
    },
}
</script>