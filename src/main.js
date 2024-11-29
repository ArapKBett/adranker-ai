// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/main.css'; // Import global styles

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
