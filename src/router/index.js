// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Campaigns from '@/views/Campaigns.vue';
import CampaignDetail from '@/views/CampaignDetail.vue';
import Budget from '@/views/Budget.vue';
import CreateAd from '@/views/CreateAd.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/campaigns', name: 'Campaigns', component: Campaigns },
  { path: '/campaigns/:id', name: 'CampaignDetail', component: CampaignDetail },
  { path: '/budget', name: 'Budget', component: Budget },
  { path: '/create-ad', name: 'CreateAd', component: CreateAd },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
