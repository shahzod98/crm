import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import Leads from '../views/dashboard/Leads.vue'
import AddLead from '../views/dashboard/AddLead.vue'
import SingUp from '../views/SingUp.vue'
import LogIn from '../views/LogIn.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/sing-up',
        name: 'SingUp',
        component: SingUp
    },
    {
        path: '/log-in',
        name: 'LogIn',
        component: LogIn
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/dashboard/my-account',
        name: 'MyAccount',
        component: MyAccount,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/dashboard/leads',
        name: 'Leads',
        component: Leads,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/dashboard/leads/add',
        name: 'AddLead',
        component: AddLead,
        meta: {
            requireLogin: true
        }
    },
    // {
    //   path: '/log-in',
    //   name: 'login',
    //   component: () => import('../views/LogIn.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next('/log-in')
    } else if (to.name === 'LogIn' && store.state.isAuthenticated) {
        next('/dashboard')
    }else {
        next()
    }
})

export default router
