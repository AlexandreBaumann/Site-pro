import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
// ICONES
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons'
// ICONES

config.autoAddCss = false

// ICONES
library.add(faComments, faGlobe, faSearch)
// ICONES

Vue.component('font-awesome-icon', FontAwesomeIcon)
