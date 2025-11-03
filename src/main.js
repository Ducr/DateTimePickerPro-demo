import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DateTimePickerPro from 'date-time-picker-pro'

Vue.use(ElementUI)
Vue.use(DateTimePickerPro)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
