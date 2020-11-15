<template>
    <div>
        <div class="columns">
            <div class="column">
                <Button text="Awards" :event="loadAwards" :loading="loading" />
            </div>
            <div class="column is-one-fifth" v-if="awards">
                <Button :event="close" icon="times" />
            </div>
        </div>
        <div v-if="awards">
            <TheBlueAllianceResponseList :list="mapAwards" />
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import { TheBlueAllianceResponseList } from './'
import Button from './Button'

export default {
    name: 'AwardsCard',

    components: { 
        TheBlueAllianceResponseList,
        Button,
    },

    props: {
        number: Number,
    },

    data() {
        return {
            awards: null,
            loading: false,
        }
    },
    
    computed: {
        mapAwards() {
            return this.awards.
                map(({
                    year,
                    name,
                    event_key,
                    award_type,
                    recipient_list,
                 }) => ({
                    key: award_type + event_key,
                    text: `${name} ${this.showAwardee(recipient_list)}`,
                    year,
                }))
        }
    },

    watch: {
        number() {
            this.awards = null
        },
    },

    methods: {
        async loadAwards() {
            this.loading = true

            this.awards = await theBlueAllianceService.awards(this.number)

            this.loading = false
        },

        showAwardee(recipientList) {
            const awardee = recipientList.map(({ awardee }) => awardee)

            return awardee[0] ? `(${awardee})` : ''
        },

        close() {
            this.awards = null
        },
    },

}
</script>