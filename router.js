import { createRouter, createWebHashHistory } from 'vue-router';
import myHome from './views/myHome.vue';
import myProjects from './views/myProjects.vue';

const routes = [
    { path: '/', component: myHome },
    { path: '/projects', component: myProjects }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
