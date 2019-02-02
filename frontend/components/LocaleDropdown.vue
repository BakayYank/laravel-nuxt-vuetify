<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat>
      {{ locales[locale] }}
    </v-btn>

    <v-list>
      <v-list-tile v-for="(value, key) in locales" :key="key" @click.prevent="setLocale(key)">
        {{ value }}
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
