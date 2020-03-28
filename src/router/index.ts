import Vue from "vue";
import VueRouter from "vue-router";
import { RedisStorage } from '@/services/sessionService'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirecTo: '/main'
  },{
    path: "/login",
    name: "Login",
    component: () => 
      import("../views/Login.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(!RedisStorage.getter('token') && to.name != 'Login') {
    next('/login')
    return
  } else {
    next()
  }
});

export default router;
