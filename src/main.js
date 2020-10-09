// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueFormulate from '@braid/vue-formulate'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueFormulate)

  // Set Head
  head.htmlAttrs = { lang: 'fr' }
  // const socialMediaMeta = [
  //   // Twitter Card
  //   {key:'twitter:card', property: 'twitter:card', content: 'summary'},
  //   {key:'twitter:title', property: 'twitter:title', content: `L'Incubateur des Territoires`},
  //   {key:'twitter:description', property: 'twitter:description', content: `Une mission de l'Agence nationale de la cohesion des territoires`},
  //   // image must be an absolute path
  //   {key:'twitter:image', property: 'twitter:image', content: `${ROOT_PATH}/logoIncubateur.svg`},
  //   // Facebook OpenGraph
  //   {key:'og:title', property: 'og:title', content: `L'Incubateur des Territoires`},
  //   {key:'og:site_name', property: 'og:site_name', content: `L'Incubateur des Territoires`},
  //   {key:'og:type', property: 'og:type', content: 'website'},
  //   {key:'og:image', property: 'og:image', content: `${ROOT_PATH}/logoIncubateur.svg`},
  //   {key:'og:description', property: 'og:description', content: `Une mission de l'Agence nationale de la cohesion des territoires`}
  // ]

  // head.meta = head.meta.concat(socialMediaMeta)
}
