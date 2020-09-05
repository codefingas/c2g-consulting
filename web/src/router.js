import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import * as Cookies from "js-cookie";
import NotFoundPage from "./views/404Page";
import LandingPage from "./views/LandingPage";
import Home from "./views/HomePage";

Vue.use(VueRouter);

let firebaseConfig = {
    apiKey: `${process.env.VUE_APP_API_KEY}`,
    authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `${process.env.VUE_APP_DB_URL}`,
    projectId: `${process.env.VUE_APP_PROJECT_ID}`,
    appId: `${process.env.VUE_APP_PROJECT_ID}`,
    storageBucket: `${process.env.VUE_APP_STORAGE_BUCKET}`,
};

firebase.initializeApp(firebaseConfig);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingPage,
    meta: {
      requiresAuth: false,
      noSignedInAuth: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
      noSignedInAuth: true,
    },
  },
  {
    path: "*",
    name: "404page",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.noSignedInAuth && to.meta.requiresAuth) {
    let loggedInUser = Cookies.get("c2g-consulting");
    if (loggedInUser) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
