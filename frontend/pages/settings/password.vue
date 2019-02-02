<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">
          {{ $t('your_password') }}
        </h5>
      </v-card-title>
      <v-card-text>
        <!-- Password -->
        <password-input
          ref="password"
          v-validate="'required|min:8'"
          :label="$t('password')"
          :form="form"
          :hint="$t('password_length_hint')"
          :v-errors="errors"
          :value.sync="form.password"
          @eye="eye = $event"
        />

        <!-- Password Confirmation -->
        <password-input
          v-validate="'required|confirmed:password'"
          :form="form"
          :hide="eye"
          :label="$t('confirm_password')"
          :v-errors="errors"
          :value.sync="form.password_confirmation"
          data-vv-as="password"
          hide-icon="true"
          name="password_confirmation"
        />

        <!-- <form-feedback :form="form" :text="$t('password_updated')"></form-feedback> -->
      </v-card-text>
      <v-card-actions>
        <submit-button :flat="true" :form="form" :label="$t('update')" />
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import Form from 'vform'

export default {
  name: 'PasswordView',
  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    }),
    eye: true
  }),

  methods: {
    async update() {
      if (await this.formHasErrors()) return

      this.$emit('busy', true)

      await this.form.patch('/settings/password')

      this.form.reset()
      this.$emit('busy', false)

      this.$store.dispatch('message/responseMessage', {
        type: 'success',
        text: this.$t('password_updated')
      })
    }
  }
}
</script>
