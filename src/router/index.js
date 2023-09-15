import { createRouter, createWebHistory } from 'vue-router'
import CustomerCrud from '../components/CustomerCrud.vue'
import CustomerLists from '../components/CustomerLists.vue'
import CustomerEditForm from '@/components/CustomerEditForm.vue';
import HomePage from '@/components/HomePage.vue';
import AdminLogin from '@/components/AdminLogin.vue';
 import DashBoard from '@/components/DashBoard.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  

  { path: '/adminlogin', name: 'AdminLogin',component: AdminLogin },
 
   { path: '/dash',name:'DashBoard', component: DashBoard },
  {
    path: '/customer-crud',
    name: 'CustomerCrud',
    component: CustomerCrud
  },
  {
    path: '/customer-lists',
    component: CustomerLists,
    name: 'customer-lists'
  },
    {
    path: '/customer/edit/:id', // Use a dynamic route parameter to pass the customer ID
    name: 'customer-edit',
    component: CustomerEditForm,
  },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
