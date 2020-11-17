<template>
    <div class="notification is-danger is-light">
    <button class="delete" @click="close()"></button>
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'ErrorMessage',

    props: {
        message: {
            type: String,
            required: true,
        },
    },

    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style>

</style>