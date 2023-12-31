import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import AboutView from "../views/AboutView.vue";
import legalMentionsView from "../views/LegalMentionsView.vue";
import privacyPolicyView from "../views/PrivacyPolicyView.vue";
import cookiesGestionView from "../views/CookiesGestionView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
   {
      path: "/",
      name: "home",
      component: HomeView,
   },
   {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
   },
   {
      path: "/project/:id",
      name: "project",
      component: ProjectsView,
   },
   {
      path: "/about",
      name: "about",
      component: AboutView,
   },
   {
      path: "/legal-mentions",
      name: "legal-mentions",
      component: legalMentionsView,
   },
   {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: privacyPolicyView,
   },
   {
      path: "/cookies-gestion",
      name: "cookies-gestion",
      component: cookiesGestionView,
   },
   {
      path: "/contact",
      name: "contact",
      component: ContactView,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
