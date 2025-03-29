import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

const domain = import.meta.env.VITE_DOMAIN;
const clientId = import.meta.env.VITE_CLIENTID;

const app = createApp(App);

app.use(
  createAuth0({
    domain: domain,
    clientId: clientId,
    authorizationParams: {
      redirect_uri: "http://localhost:5173/"
    }
  })
);

app.mount('#app');