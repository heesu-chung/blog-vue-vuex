// import VueRouter from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import ViewPost from "../pages/ViewPost.vue";
import CreatePost from "../pages/CreatePost.vue";
import PostList from "../pages/PostList.vue";
import CategoryList from "../pages/CategoryList.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/view-post/:post",
        name: "ViewPost",
        component: ViewPost,
        props: true,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
    },
    {
        path: "/posts",
        name: "PostList",
        component: PostList,
    },
    {
        path: "/categoryList/:category",
        name: "CategoryList",
        component: CategoryList,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    },
});

export default router;
