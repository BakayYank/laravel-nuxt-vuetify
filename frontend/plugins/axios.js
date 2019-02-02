import axios from 'axios'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({ app, store, redirect }) => {
  axios.defaults.baseURL = process.env.apiUrl

  if (process.server) {
    return
  }

  // Request interceptor
  axios.interceptors.request.use((request) => {
    request.baseURL = process.env.apiUrl

    const token = store.getters['auth/token']

    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`
    }

    const locale = store.getters['lang/locale']
    if (locale) {
      request.headers.common['Accept-Language'] = locale
    }

    return request
  })

  // Response interceptor
  axios.interceptors.response.use(response => response, (error) => {
    const { status } = error.response || {}

    if (status >= 500) {
      store.dispatch('message/responseMessage', {
        type: 'error',
        text: app.i18n.t('error_alert_text'),
        title: app.i18n.t('error_alert_title'),
        modal: true
      })
    }

    if (status === 401 && store.getters['auth/check']) {
      store.dispatch('message/responseMessage', {
        type: 'warning',
        text: app.i18n.t('token_expired_alert_text'),
        title: app.i18n.t('token_expired_alert_title'),
        modal: true
      })
        .then(async () => {
          await store.dispatch('auth/LOGOUT')

          redirect.push({ name: 'login' })
        })
    }

    return Promise.reject(error)
  })
}
