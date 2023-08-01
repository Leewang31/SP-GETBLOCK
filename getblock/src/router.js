import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Page/Home'
import Introduction from './components/Page/introduction'
import History from './components/Page/History'
import Patent from './components/Page/Patent'
import Organization from "@/components/Page/Organization";
import Characteristics from './components/Page/Characteristics';
import Difference from './components/Page/Defference';
import TestCertification from './components/Page/TestCertification';
import WayToApply from './components/Page/WayToApply';
import Applications from './components/Page/Appliciations';
import Inquiry from './components/Page/Inquiry';

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
    {
        path: "/characteristics",
        component: Characteristics,
    },
    {
        path: "/difference",
        component: Difference,
    },
    {
        path: "/test_certification",
        component: TestCertification,
    },
    {
        path: "/way_to_apply",
        component: WayToApply,
    },
    {
        path: "/applications",
        component: Applications,
    },
    {
        path: "/inquiry",
        component: Inquiry,
    },
    {
        path: "/introduction",
        component: Introduction,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;