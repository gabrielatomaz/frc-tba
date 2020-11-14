<template>
    <div class="field">
        <p class="control has-icons-left">
            <input 
                class="input" 
                :type="type" 
                :placeholder="placeholder"
                v-model="model"
                @change="emitValue"
            />
            <span class="icon is-small is-left">
            <i :class="['fas', `fa-${icon}`]"></i>
            </span>
        </p>
    </div>
  
</template>

<script>
export default {
    name: 'InputIcon',

    props: {
        placeholder: {
            type: String,
        },
        type: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        }
    },

    data() {
        return { model: null }
    },

    methods: {
        emitValue() {
            this.$emit('model', this.model)
        },
    },
}
</script>