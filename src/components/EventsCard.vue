<template>
    <div>
        <div class="columns">
            <div class="column">
                <Button text="Events" :event="loadEvents" :loading="loading" />
            </div>
            <div class="column is-one-fifth" v-if="events">
                <Button :event="close" icon="times" />
            </div>
        </div>
        <div v-if="events">
            <TheBlueAllianceResponseList :list="mapEvents" />
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import { TheBlueAllianceResponseList } from './'
import Button from './Button'

export default {
    name: 'EventsCard',

    components: { 
        Button,
        TheBlueAllianceResponseList,
    },

    props: {
        number: Number,
    },

    data() {
        return {
            events: null,
            loading: false,
        }
    },

    computed: {
        mapEvents() {
            return this.events
                .map(({ 
                    year,
                    name,
                    city,
                    country,
                    first_event_id 
                }) => ({
                    key: first_event_id,
                    year,
                    text: name,
                    address: {
                        country,
                        city,
                    },
                }))
        },
    },

    watch: {
        number() {
            this.events = null
        },
    },

    methods: {
        async loadEvents() {
            this.loading = true

            this.events = await theBlueAllianceService.events(this.number)

            this.loading = false
        },

        close() {
            this.events = null
        },
    },
}
</script>