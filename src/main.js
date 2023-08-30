import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFinalModal from 'vue-final-modal'

const app = createApp(App)
app.use(VueFinalModal())
app.use(router)

app.mount('#app')
