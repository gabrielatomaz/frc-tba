<template>
    <div>
        <div class="columns">
            <div class="column">
                <Button text="Eventos" :event="loadEvents" :loading="loading" />
            </div>
            <div class="column is-one-fifth" v-if="events">
                <Button :event="close" icon="times" />
            </div>
        </div>
        <div v-if="events">
            <ul>
                <li v-for="event in events" :key="event.first_event_id">
                    {{ event.name }} - {{ event.city }} ({{ event.country }})
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import theBlueAllianceService from '../services/theBlueAllianceService'
import Button from './Button'

export default {
    name: 'EventsCard',

    components: { Button },

    props: {
        number: String,
    },

    data() {
        return {
            events: null,
            loading: false,
        }
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