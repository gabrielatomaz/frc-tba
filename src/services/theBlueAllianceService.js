import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_THE_BLUE_ALLIANCE_URL,
    headers: { "X-TBA-Auth-Key": process.env.VUE_APP_THE_BLUE_ALLIANCE_KEY },
})

const TEAM_FRC_BASE = 'team/frc'

export default {
    async team(number) {
        const { data } = await http(`${TEAM_FRC_BASE}${number}/simple`)

        return data
    },

    async awards(number) {
        const { data } = await http(`${TEAM_FRC_BASE}${number}/awards`)

        return data
    },

    async events(number) {
        const { data } = await http(`${TEAM_FRC_BASE}${number}/events`)

        return data
    },

    async robots(number) {
        const { data } = await http(`${TEAM_FRC_BASE}${number}/robots`)

        return data
    }
}
  