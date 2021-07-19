import { createApp } from 'vue';
import App from './app/layout/App.vue';
import './app/layout/style.scss';
import components from './components';
import directives from './app/directives';
import router from './app/router';

const vueApplication = createApp(App);

components.forEach((component) => {
  vueApplication.component(component.name, component);
});

directives.forEach((directive) => {
  vueApplication.directive(directive.name, directive.directive);
});

vueApplication
  .use(router)
  .mount('#app');
