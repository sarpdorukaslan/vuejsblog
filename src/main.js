// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSweetAlert from 'vue-sweetalert'
import App from './App'

import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import router from './router'

Vue.config.productionTip = false
Vue.use(VueQuillEditor)
Vue.use(ElementUI)
Vue.use(VueSweetAlert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
