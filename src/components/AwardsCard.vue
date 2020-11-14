<template>
    <div>
        <div class="columns">
            <div class="column">
                <Button text="Prêmios" :event="loadAwards" :loading="loading" />
            </div>
            <div class="column is-one-fifth" v-if="awards">
                <button class="button is-outlined is-fullwidth"  v-on:click="close()"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div v-if="awards">
            <ul>
                <li v-for="award in awards" :key="award.event_key + award.award_type">
                    {{ award.name }} {{ showAwardee(award) }} - {{ award.year }} 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import Button from './Button'

export default {
    name: 'AwardsCard',

    components: { Button },

    props: {
        number: String,
    },

    data() {
        return {
            awards: null,
            loading: false,
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

        showAwardee(award) {
            const { recipient_list } = award

            const awardee = recipient_list.map(({ awardee }) => awardee)

            return awardee[0] ? `(${awardee})` : ''
        },

        close() {
            this.awards = null
        },
    },

}
</script>