<template>
    <div class="mt-4">
        <div class="columns is-mobile is-centered">
            <div class="column is-two-fifths">
                <InputIcon type="text" @model="getNumber" placeholder="Digite o número do seu time" icon="robot" />
            </div>
            <Button 
                :event="loadTeamInfos"
                :loading="loading" 
                icon="search" 
                class="mt-3" 
                :fullWidth="false" 
            />
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
            </div>
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import { Button, InputIcon } from './index'

export default {
    name: 'TeamCard',

    components: { 
        Button,
        InputIcon,
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

            this.$emit('team', this.team)
        },

        getNumber(value) {
            this.number = value
        },
    },
}
</script>

<style scoped>
.card-content {
    width: 100%;
}

</style>
