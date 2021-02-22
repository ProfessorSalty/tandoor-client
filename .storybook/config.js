import Vue from 'vue'
import { configure } from '@storybook/vue'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

Vue.use(BootstrapVue)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

function loadStories() {
  const req = require.context('../.stories', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}
configure(loadStories, module)
