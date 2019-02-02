<template>
  <div>
    <v-text-field
      v-model="_value"
      :browser-autocomplete="browserAutocomplete"
      :class="errorClass"
      :counter="counter"
      :error-messages="errorMessages"
      :hint="hint"
      :label="label"
      :name="name"
      :prepend-icon="prepend"
    />
    <has-error :form="form" :field="name" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',

  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    // eslint-disable-next-line
    hint: {
      type: String
    },
    vErrors: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    prepend: {
      type: String,
      default: ''
    },
    counter: {
      type: [Boolean, Number, String],
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    // eslint-disable-next-line
    browserAutocomplete: String
  },

  computed: {
    errorMessages() {
      return this.vErrors.collect(this.name)
    },
    errorClass() {
      return this.form.errors.has(this.name) && ' input-group--error error--text'
    },
    _value: {
      get() {
        return this.value
      },
      set(value) {
        value = value || ''
        this.$emit('update:value', value.trim())
        this.$emit('input', value.trim())
      }
    }
  }
}
</script>
<style scoped>
    .invalid-feedback {
        color: #ff5252;
        margin-top: -20px;
    }
</style>
