<template>
    <div>


                <v-container fluid>
                    <v-layout column align-center>
                        <div class="display-3 grey--text mt-5">
                            {{ title }}
                        </div>
                        <div class="body-2 my-3">
                            <a href="https://laravel.com/docs">Documentation</a>
                            <a href="https://laracasts.com">Laracasts</a>
                            <a href="https://laravel-news.com">News</a>
                            <a href="https://forge.laravel.com">Forge</a>
                            <a href="https://github.com/laravel/laravel">GitHub</a>
                        </div>
                        <img src="/img/v.png" alt="Vuetify.js" class="mt-5">
                        <div class="display-2 grey--text mt-5">
                            Vuetify
                        </div>
                        <div class="body-2 my-3">
                            <a href="https://vuetifyjs.com">Documentation</a>
                            <a href="https://github.com/vuetifyjs/vuetify">GitHub</a>
                        </div>
                    </v-layout>
                </v-container>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'welcome-view',
        layout: 'app',

        metaInfo () {
            return { title: this.$t('home') }
        },

        computed: mapGetters({
            authenticated: 'auth/check'
        }),

        data: () => ({
            title: "lol"
        })
    }
</script>
