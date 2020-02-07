import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const _import = file => () => import('./components/' + file);
let layout = _import('Layout.vue');
export default new VueRouter({
    routes: [
        {
            path: '/', component: layout, children: [
                { path:'/Dashboard', component: _import('Dashboard.vue') }
            ]
        }
    ]
});
