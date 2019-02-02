<template>
  <div>
    <v-text-field
      v-model="_value"
      browser-autocomplete="current-password"
      :class="errorClass"
      :counter="counter"
      :error-messages="errorMessages"
      :hint="hint"
      :label="label"
      :name="name"
      :prepend-icon="prepend"
      type="email"
    />
    <has-error :form="form" :field="name" />
  </div>
</template>

<script>
import TextInput from './TextInput'

export default {
  name: 'EmailInput',
  extends: TextInput
}
</script>
