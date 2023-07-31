import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faGreaterThan } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faGreaterThan)

import './global.css'
import './reset.css'

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
