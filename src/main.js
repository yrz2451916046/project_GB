// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/plugins/font-awesome/css/font-awesome.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/iCheck/flat/blue.css'
import 'admin-lte/plugins/morris/morris.css'
import 'admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.css'
import 'admin-lte/plugins/datepicker/datepicker3.css'
import 'admin-lte/plugins/daterangepicker/daterangepicker-bs3.css'
import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/adminlte.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
