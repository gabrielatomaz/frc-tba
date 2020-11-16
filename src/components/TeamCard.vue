<template>
    <div>
        <div class="columns is-mobile is-centered">
            <div class="column is-two-fifths">
                <InputIcon type="text" @model="getNumber" placeholder="Insert your team number" icon="robot" />
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
                <ErrorMessage 
                    v-if="showErrorMessage"
                    message="I'm sorry, I couldn't find a team with this number."
                    @close="close" 
                />
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
import { InputIcon, ErrorMessage } from './index'
import Button from './Button'

export default {
    name: 'TeamCard',

    components: { 
        Button,
        InputIcon,
        ErrorMessage,
    },

    data() {
        return {
            number: '',
            team: null,
            loading: false,
            showErrorMessage: false,
        }
    },

    methods: {
        async loadTeamInfos() {
            this.loading = true

            try {
                this.team = await theBlueAllianceService.team(this.number)
                
                this.$emit('team', this.team)
            } catch (error) {
                this.showErrorMessage = true
            }
            
            this.loading = false
        },

        getNumber(value) {
            this.number = value
        },

        close() {
            this.showErrorMessage = false
        },
    },
}
</script>

<style scoped>
.card-content {
    width: 100%;
}

</style>
