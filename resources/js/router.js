import Router from 'vue-router'
import Vue from 'vue'
import store from './store/store'
import auth from './middlewares/auth'

import Home from './views/Home'
import Lectures from './views/Lectures'
import Faq from './views/Faq'
import Login from './views/Login'
import Register from './views/Register'
import notFound from "./views/notFound"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
    },
        {
            path: '/lectures',
            name: 'lectures',
            component: Lectures
    },
        {
            path: '/faq',
            name: 'faq',
            component: Faq
    },
        {
            path: '/login',
            name: 'login',
            component: Login
    },
        {
            path: '/register',
            name: 'register',
            component: Register
    },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Dashboard'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/edit-profile',
            name: 'edit-profile',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/EditProfile'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/show-lectures',
            name: 'show-lectures',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/ShowLectures'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/users',
            name: 'users',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Users'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/partners',
            name: 'partners',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Partners'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/team',
            name: 'team',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Team'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/admin-faq',
            name: 'admin-faq',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Faq'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/reference',
            name: 'reference',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Reference'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/documents',
            name: 'documents',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Documents'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '/settings',
            name: 'settings',
            component: () =>
                import(/* webpackChunkName: "administration" */ './views/admin/Settings'),
            meta: {
                middleware: auth,
            }
    },
        {
            path: '*',
            name: '404',
            component: notFound
    }
    ]
});

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;
        return (...parameters) => {
            context.next(...parameters);
            const nextMiddleware = nextFactory(context, middleware, index + 1);
            subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

            const context = {
                from,
                next,
                router,
                to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);
        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

export default router;
