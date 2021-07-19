import { createApp } from 'vue';
import App from './app/layout/App.vue';
import './app/layout/style.scss';
import components from './components';

const vueApplication = createApp(App);

components.forEach((component) => {
  vueApplication.component(component.name, component);
});

vueApplication
  .mount('#app');
