<template>
    <ul>
        <li v-for="item in list" :key="item.key">
            {{ item.year }} - {{ item.text }} {{ hasAddress(item) }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TheBlueAllianceResponseList',

    props: {
        list: {
            type: Array,
            required: true,
        },
    },

    methods: {
        hasAddress(item) {
            const { address } = item
            
            if (!address) return

            const { country, city } = address
            
            return `- ${city} (${country})`
        },
    }

}
</script>