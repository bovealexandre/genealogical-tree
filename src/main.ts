import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo, { ApolloProvider } from 'vue-apollo';
// import { createProvider } from './vue-apollo';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(faPlusSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: 'https://timbtrack-genealogical-tree.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.VUE_APP_HASURA_ADMIN_SECRET,
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: (h) => h(App),
});
