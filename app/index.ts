import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import { router } from '@/router'
import { store } from '@/store'
import App from '@/App'

export function createApp() {
  sync(store, router)

  const app: any = new Vue({
    router,
    store,
    render: (h: any) => h(App)
  } as any)

  return { app, router, store }
}
