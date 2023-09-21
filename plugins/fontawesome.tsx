import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
// ICONES
import { faComments } from '@fortawesome/free-regular-svg-icons'
import {
  faGlobe,
  faSearch,
  faPhone,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
// ICONES

config.autoAddCss = false

// ICONES
library.add(
  faPhone,
  faEnvelope,
  faComments,
  faGlobe,
  faSearch,
  faChevronLeft,
  faChevronRight
) // ICONES

Vue.component('font-awesome-icon', FontAwesomeIcon)
