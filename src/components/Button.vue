<template>
        <button 
            :class="['button', 'is-outlined', isFullWidth, isLoading]"
            @click="event"
            v-html="text || hasIcon"
        />
</template>

<script>
export default {
    name: 'Button',
    
    props: {
        text: { 
            type: String,
        },
        event: {
            type: Function,
            required: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
        },
        fullWidth: {
            type: Boolean,
            default: true,
        },
    },

    computed: {
        isLoading() {
            return this.loading ? 'is-loading' : ''
        },

        isFullWidth() {
            return this.fullWidth ? 'is-fullwidth' : ''
        },

        hasIcon() {
            return this.icon ? `<i class="fas fa-${this.icon}"></i>` : ''
        },
    },
}
</script>

<style>

</style>