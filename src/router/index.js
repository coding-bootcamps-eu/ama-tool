import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/askquestion",
    name: "AskQuestion",
    component: () =>
      import(
        /* webpackChunkName: "askquestion" */ "../views/Questions/AskQuestion.vue"
      ),
  },
  {
    path: "/questionlist",
    name: "AllQuestions",
    component: () =>
      import(
        /* webpackChunkName: "AllQuestions" */ "../views/Questions/AllQuestions.vue"
      ),
    children: [
      {
        path: "",
        name: "QuestionList",
        component: () =>
          import(
            /* webpackChunkName: "Questionlist" */ "../views/Questions/QuestionList.vue"
          ),
      },
      {
        path: "/questionlist/:questionKey",
        name: "details",
        component: () =>
          import(
            /* webpackChunkName: "QuestionDestails" */ "../views/Questions/QuestionDetails.vue"
          ),
      },
    ],
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: () =>
      import(/* webpackChunkName: "Imprint" */ "../views/Footer/Imprint.vue"),
  },
  {
    path: "/privacypolicies",
    name: "PrivacyPolicies",
    component: () =>
      import(
        /* webpackChunkName: "PrivacyPolicies" */ "../views/Footer/PrivacyPolicies.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
