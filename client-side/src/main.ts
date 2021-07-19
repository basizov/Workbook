import { createApp } from 'vue';
import App from './app/layout/App.vue';
import './app/layout/style.scss';
import components from './components';
import router from './app/router';

const vueApplication = createApp(App);

components.forEach((component) => {
  vueApplication.component(component.name, component);
});

vueApplication
  .use(router)
  .mount('#app');
