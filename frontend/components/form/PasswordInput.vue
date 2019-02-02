<template>
  <div>
    <v-text-field
      v-model="_value"
      browser-autocomplete="current-password"
      :append-icon="icon"
      :class="errorClass"
      :counter="counter"
      :error-messages="errorMessages"
      :hint="hint"
      :label="label"
      :name="name"
      :prepend-icon="prepend"
      :type="_eye ? 'password' : 'text'"
      @click:append="toggleVisibility"
    />
    <has-error :form="form" :field="name" />
  </div>
</template>

<script>
// import i18n from '~/plugins/vue-i18n'
import TextInput from './TextInput'

export default {
  name: 'PasswordInput',
  extends: TextInput,

  props: {
    name: {
      type: String,
      default: 'password'
    },
    label: {
      type: String,
      default: ''
    },
    hideIcon: {
      type: [Boolean, String],
      default: false
    },
    hide: {
      type: [Boolean, String],
      default: null
    }
  },

  data() {
    return {
      eye: true
    }
  },

  computed: {
    icon() {
      if (this.hideIcon) {
        return ''
      } else if (this.eye) {
        return 'visibility'
      }
      return 'visibility_off'
    },
    _eye() {
      if (this.hide !== null) {
        return this.hide
      }
      return this.eye
    }
  },

  watch: {
    eye() {
      this.$emit('eye', this.eye)
    }
  },

  methods: {
    toggleVisibility() {
      this.eye = !this.eye
      this.$emit('eye', this.eye)
    }
  }
}
</script>
