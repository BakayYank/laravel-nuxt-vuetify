<template>
  <v-layout row justify-center>
    <v-dialog v-if="responseMessage.modal" :value.sync="responseMessage.show" persistent>
      <v-card>
        <v-card-title class="headline white--text" :class="responseMessage.type">
          {{ responseMessage.title }}
        </v-card-title>
        <v-divider />
        <v-card-text>{{ responseMessage.text }}</v-card-text>
        <v-layout row justify-center>
          <v-btn :color="responseMessage.type" flat="flat" @click.native="close">
            {{ $t('ok') }}
          </v-btn>
        </v-layout>
      </v-card>
    </v-dialog>
    <v-snackbar v-else v-model="responseMessage.show" top :color="responseMessage.type">
      {{ responseMessage.text }}
      <v-btn dark flat @click.native="close">
        {{ $t('close') }}
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FeedbackMessage',
  computed: mapGetters({
    responseMessage: 'message/responseMessage'
  }
  ),
  methods: {
    close() {
      this.$store.dispatch('message/clearMessage')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .snack__content
        max-width: 100vw
        min-width: 100vw
</style>
