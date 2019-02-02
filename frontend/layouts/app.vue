<template>
  <v-app light>
    <v-navigation-drawer
      v-if="authenticated"
      v-model="drawer"
      persistent
      enable-resize-watcher
      app
    >
      <nav-menu />
    </v-navigation-drawer>
    <tool-bar :drawer="drawer" @toggleDrawer="drawer = !drawer" />
    <v-content>
      <v-container fluid>
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
    <feedback-message />
    <page-footer />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import NavMenu from '~/components/NavMenu'
import ToolBar from '~/components/ToolBar'
import FeedbackMessage from '~/components/FeedbackMessage'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    'nav-menu': NavMenu,
    'tool-bar': ToolBar,
    'feedback-message': FeedbackMessage,
    'page-footer': PageFooter
  },
  data() {
    return {
      drawer: true
    }
  },
  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
