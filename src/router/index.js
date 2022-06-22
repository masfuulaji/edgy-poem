import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/components/layouts/Empty.vue"),
        children: [
            {
                path: "",
                name: "landing",
                component: () => import("@/views/web/landing/index.vue"),
            },
        ],
    },
    {
        path: "/admin",
        component: () => import("@/components/layouts/Empty.vue"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: () => import("@/components/layouts/Admin.vue"),
                children: [
                    {
                        path: "",
                        name: "dashboard.index",
                        component: () =>
                            import("@/views/admin/dashboard/index.vue"),
                    },
                ],
            },
            {
                path: "category",
                name: "category",
                component: () => import("@/components/layouts/Admin.vue"),
                children: [
                    {
                        path: "",
                        name: "category.index",
                        component: () =>
                            import("@/views/admin/category/index.vue"),
                    },
                ],
            },
            {
                path: "user",
                name: "user",
                component: () => import("@/components/layouts/Admin.vue"),
                children: [
                    {
                        path: "",
                        name: "user.index",
                        component: () => import("@/views/admin/user/index.vue"),
                    },
                ],
            },
        ],
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/error/test.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/components/layouts/Auth.vue"),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("@/views/error/404.vue"),
        meta: { NotFound: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
