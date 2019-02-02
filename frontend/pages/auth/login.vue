<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <progress-bar :show="busy" />
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">
              {{ $t('login') }}
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
              prepend="person_outline"
            />

            <!-- Password -->
            <password-input
              v-validate="'required|min:8'"
              :label="$t('password')"
              :v-errors="errors"
              :form="form"
              :value.sync="form.password"
              prepend="lock_outline"
            />

            <!-- Remember Me -->
            <v-checkbox
              v-model="remember"
              :label="$t('remember_me')"
              color="primary"
              type="checkbox"
              value="true"
            />

            <submit-button :block="true" :form="form" :label="$t('login')" />
          </v-card-text>
          <v-card-actions>
            <router-link :to="{ name: 'register' }">
              {{ $t('register') }}
            </router-link>
            <v-spacer />
            <router-link :to="{ name: 'password.request' }">
              {{ $t('forgot_password') }}
            </router-link>
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
  name: 'LoginView',
  metaInfo() {
    return { title: this.$t('login') }
  },
  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    eye: true,
    remember: false,
    busy: false
  }),

  methods: {
    async login() {
      if (await this.formHasErrors()) return

      // Submit the form.
      const { data } = await this.form.post('/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })
      this.busy = true
      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
