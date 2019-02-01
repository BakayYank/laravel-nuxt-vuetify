<template>
  <v-app>
    <transition name="page" mode="out-in">
      <nuxt></nuxt>
    </transition>
    <feedback-message></feedback-message>
  </v-app>
</template>

<script>
  import FeedbackMessage from '~/components/FeedbackMessage'

  export default {
    name: 'default-layout',
    components: {
      'feedback-message': FeedbackMessage
    }
  }
</script>
