import Vue from 'vue'
// import Icon from './Icon'
import { HasError, AlertError, AlertSuccess } from 'vform'
import EmailInput from './form/EmailInput'
import PasswordInput from './form/PasswordInput'
import ProgressBar from './ProgressBar'
import SubmitButton from './form/SubmitButton'
import TextInput from './form/TextInput'

// Vue.component(Icon.name, Icon)
Vue.component(EmailInput.name, EmailInput)
Vue.component(ProgressBar.name, ProgressBar)
Vue.component(PasswordInput.name, PasswordInput)
Vue.component(SubmitButton.name, SubmitButton)
Vue.component(TextInput.name, TextInput)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
