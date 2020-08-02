import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vIndex from '../components/v-index';
import vAbout from '../components/v-about';
import vContacts from '../components/v-contacts';
import vPrices from '../components/v-prices';

let router = new Router( {
    routes: [
        {
            path: '/',
            name: 'index',
            component: vIndex,
        },
        {
            path: '/about',
            name: 'about',
            component: vAbout,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: vContacts,
        },
        {
            path: '/prices',
            name: 'prices',
            component: vPrices,
        }
    ]
})

export default router;