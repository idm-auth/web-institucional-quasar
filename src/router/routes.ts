import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/InstitutionalLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'why-use', component: () => import('pages/WhyUsePage.vue') },
      { path: 'how-to-use', component: () => import('pages/HowToUsePage.vue') },
      { path: 'how-to-use/sidecar', component: () => import('pages/HowToUseSidecarPage.vue') },
      { path: 'how-to-use/ingress', component: () => import('pages/HowToUseIngressPage.vue') },
      { path: 'privacy', component: () => import('pages/PrivacyPage.vue') },
      { path: 'terms', component: () => import('pages/TermsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
