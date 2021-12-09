import { createApp } from 'vue'
import App from './App.vue'

import { store } from './store.js'
// import { router } from './router'




var app = createApp(App)
// app.use(router) //routerの情報を読込んでいる。
app.use(store)
app.mount('#app') //index.htmlに結局すべて反映される。index.htmlの中のid="app"にマウントされる。
