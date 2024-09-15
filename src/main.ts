// import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { ViteSSG } from 'vite-ssg';
import VueClickAway from 'vue3-click-away';
import { I18nOptions } from 'vue-i18n';
import { loadLocalData } from '@/utils/common-util';

import App from './App.vue';
import { routesList } from './router';
import { useCounterStore } from '@/stores/counter';
import AppConfig from '@/constants';
import { ko, en, setLanguage, setupI18n } from '@/lang';
// import routes from 'virtual:generated-pages'

if (typeof window !== 'undefined') import('./pwa');

// i18n 설정
let lang = loadLocalData(AppConfig.KEYS.LANG);
if (!lang) {
  setLanguage(Intl.DateTimeFormat().resolvedOptions().locale);
  lang = loadLocalData(AppConfig.KEYS.LANG);
}
const i18nConfig: I18nOptions = {
  legacy: false,
  missingWarn: false,
  fallbackWarn: false,
  warnHtmlMessage: false,
  fallbackLocale: 'en',
  locale: lang ? lang : 'en',
  messages: {
    ko,
    en,
  },
};
const i18n = setupI18n(i18nConfig);

export const createApp = ViteSSG(App, { routes: routesList }, ({ app, router, routes, isClient, initialState }) => {
  const pinia = createPinia();
  app.use(pinia).use(VueClickAway).use(i18n);

  //@ts-ignore
  if (import.meta.env.SSR) initialState.pinia = pinia.state.value;
  else pinia.state.value = initialState.pinia || {};

  router.beforeEach((to, from, next) => {
    const store = useCounterStore(pinia);
    // if (!store.ready)
    //   // perform the (user-implemented) store action to fill the store's state
    //   store.initialize()
    next();
  });
});

// const app = createApp()

// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')
