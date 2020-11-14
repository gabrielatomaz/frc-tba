<template>
    <div class="mt-4">
        <div class="columns is-mobile is-centered">
            <div class="column is-two-fifths">
                <div class="field">
                    <p class="control has-icons-left">
                        <input 
                            class="input" 
                            type="text" 
                            placeholder="Digite o número do seu time"
                            v-model="number"
                        />
                        <span class="icon is-small is-left">
                        <i class="fas fa-robot"></i>
                        </span>
                    </p>
                </div>
            </div>
            <button :class="['button', 'is-outlined', 'mt-3', loading ? 'is-loading' : '']"
                v-on:click="loadTeamInfos()"
            >
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="columns is-mobile is-centered">
            <div class="column is-half">
                <div class="card">
                    <div class="card-content">
                        <div class="content" v-if="!team">
                            <img class="image" src="../assets/robot.png" />
                        </div>
                        <div class="content" v-if="team">
                            <p class="title">{{ team.nickname }} - {{ team.team_number }}</p>
                            {{ team.city }}, {{ team.state_prov }} - {{team.country }}
                        </div>
                    </div>
                </div>
                <div class="card mt-2" v-if="team">
                    <div class="card-content">
                        <div class="column is-full">
                            <AwardsCard :number="number" />
                        </div>
                        <div class="column is-full">
                            <EventsCard :number="number" />
                        </div>
                        <div class="column is-full">
                            <RobotsCard :number="number" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import AwardsCard from './AwardsCard'
import EventsCard from './EventsCard'
import RobotsCard from './RobotsCard'

export default {
    name: 'TeamCard',

    components: { 
        AwardsCard,
        EventsCard,
        RobotsCard,
    },

    data() {
        return {
            number: '',
            team: null,
            loading: false,
        }
    },

    methods: {
        async loadTeamInfos() {
            this.loading = true

            this.team = await theBlueAllianceService.team(this.number)

            this.loading = false
        },
    },
}
</script>

<style scoped>
.card-content {
    width: 100%;
}

</style>
