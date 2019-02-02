<template>
  <v-card>
    <v-card-title primary-title class="grey lighten-4">
      <h3 class="headline mb-0">
        {{ $t('home') }}
      </h3>
    </v-card-title>
    <v-divider />
    <v-card-text>
      {{ $t('you_are_logged_in') }}  <h3> layout = app</h3>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'HomeView',
  layout: 'app',
  metaInfo() {
    return { title: this.$t('home') }
  }
}
</script>
