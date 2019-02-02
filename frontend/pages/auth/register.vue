<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <progress-bar :show="form.busy" />
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">
              {{ $t('register') }}
            </h3>
          </v-card-title>
          <v-card-text>
            <!-- Name -->
            <text-input
              v-validate="'required|max:30'"
              :form="form"
              :label="$t('name')"
              :v-errors="errors"
              :value.sync="form.name"
              browser-autocomplete="name"
              counter="30"
              name="name"
            />

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
              ref="password"
              v-validate="'required|min:8'"
              :form="form"
              :hint="$t('password_length_hint')"
              :label="$t('password')"
              :v-errors="errors"
              :value.sync="form.password"
              browser-autocomplete="new-password"
              name="password"
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
              browser-autocomplete="new-password"
              data-vv-as="password"
              hide-icon="true"
              name="password_confirmation"
            />
          </v-card-text>

          <v-card-actions>
            <submit-button :form="form" :label="$t('register')" />
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Form from 'vform'

export default {
  layout: 'app',
  name: 'RegisterView',
  metaInfo() {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    eye: true
  }),

  methods: {
    async register() {
      if (await this.formHasErrors()) return

      // Register the user.
      const { data } = await this.form.post('/register')

      // Log in the user.
      const { data: { token } } = await this.form.post('/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', { token })

      // Update the user.
      await this.$store.dispatch('auth/updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
