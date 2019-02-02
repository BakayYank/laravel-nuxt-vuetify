<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <progress-bar :show="form.busy" />
        <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">
              {{ $t('reset_password') }}
            </h3>
          </v-card-title>
          <v-card-text>
            <!-- Email -->
            <email-input
              v-validate="'required|email'"
              :form="form"
              :label="$t('email')"
              :v-errors="errors"
              :value.sync="form.email"
              name="email"
            />

            <!-- Password -->
            <password-input
              v-validate="'required|min:8'"
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
          </v-card-text>
          <v-card-actions>
            <submit-button :flat="true" :form="form" :label="$t('reset_password')" />
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Form from 'vform'

export default {
  name: 'ResetView',
  layout: 'app',
  metaInfo() {
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    eye: true
  }),

  methods: {
    async reset() {
      if (await this.formHasErrors()) return

      this.form.token = this.$route.params.token

      const response = await this.form.post('/password/reset')

      // Login user if reset successful.
      const { data } = await this.form.post('/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: false
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      this.$store.dispatch('message/responseMessage', {
        type: 'success',
        text: response.data.status
      })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
