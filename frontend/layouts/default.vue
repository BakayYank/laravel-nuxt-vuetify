<template>
  <v-app>
    <transition name="page" mode="out-in">
      <nuxt />
    </transition>
    <feedback-message />
  </v-app>
</template>

<script>
import FeedbackMessage from '~/components/FeedbackMessage'

export default {
  name: 'DefaultLayout',
  components: {
    'feedback-message': FeedbackMessage
  }
}
</script>
