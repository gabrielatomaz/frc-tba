<template>
  <div id="app">
    <TeamCard @team="team" />
     <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <div class="card mt-2" v-if="number">
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
import { TeamCard, AwardsCard, EventsCard, RobotsCard } from './components/index'

export default {
  name: 'App',

  components: {
    TeamCard,
    AwardsCard,
    EventsCard,
    RobotsCard,
  },

  data() {
    return { number: null, }
  },

  methods: {
    team({ team_number }) {
      this.number = team_number
    },
  },
}
</script>
