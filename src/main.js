import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import {format} from 'date-fns';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;

import router from './Router.js';

import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

// HTTP connexion to the API
const tokenAuth = localStorage.getItem('token');

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://trouble-stars.test/graphql',

  headers: {
    accept: 'application/json',
    Authorization: tokenAuth ? `Bearer ${tokenAuth}` : null,
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// VueSweetalert2
Vue.use(VueSweetalert2);

// Vue filter
Vue.filter('dateFormat', function(value) {
  return format(new Date(value), 'DD-MM-YYYY H:mm:ss');
});

new Vue({
  render: h => h(App),
  router,
  apolloProvider,
}).$mount('#app');
