// ====================== VUE 3 ======================

import { createApp } from 'vue';
import { router } from './modules/core/application/router';
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app');

// ====================== SVELTE ======================

// import App from './App.svelte';

// const app = new App({
//   target: document.getElementById('app')
// });

// export default app;
