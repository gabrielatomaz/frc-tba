<template>
    <div>
        <div class="columns">
            <div class="column">
                <button class="button is-outlined is-fullwidth"  v-on:click="loadEvents()">Eventos</button>
            </div>
            <div class="column is-one-fifth" v-if="events">
                <button class="button is-outlined is-fullwidth"  v-on:click="close()"><i class="fas fa-times"></i></button>
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

export default {
    name: 'EventsCard',

    props: {
        number: String,
    },

    data() {
        return {
            events: null,
        }
    },

    methods: {
        async loadEvents() {
            this.events = await theBlueAllianceService.events(this.number)
        },

        close() {
            this.events = null
        },
    },
}
</script>