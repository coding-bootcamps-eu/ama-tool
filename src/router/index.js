import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Team.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/login.vue"),
  },
  {
    path: "/askquestion",
    name: "AskQuestion",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Questions/AskQuestion.vue"
      ),
  },
  {
    path: "/questionlist",
    name: "QuestionList",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Questions/QuestionList.vue"
      ),
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Footer/Imprint.vue"),
  },
  {
    path: "/privacypolicies",
    name: "PrivacyPolicies",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Footer/PrivacyPolicies.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
