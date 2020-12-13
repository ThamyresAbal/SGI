import Vue from 'vue'
import App from './App.vue'
import router from './router'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay} from 'swiper/swiper.esm'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
