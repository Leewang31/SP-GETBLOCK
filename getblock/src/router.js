import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Page/Home'
import Introduction from './components/Page/introduction'
import History from './components/Page/History'
import Patent from './components/Page/Patent'
import Organization from "@/components/Page/Organization";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/introduction",
        component: Introduction,
    },
    {
        path: "/history",
        component: History,
    },
    {
        path: "/patent",
        component: Patent,
    },
    {
        path: "/organization",
        component: Organization,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;