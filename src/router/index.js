
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'

const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category')
const Cart=()=>import('../views/cart/Cart.vue')
const Profile=()=>import('../views/profile/Profile.vue')
const Detail=()=>import('../views/detail/Detail.vue')


const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        name:'Home'
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
    ]

import {createRouter,createWebHistory} from 'vue-router'

export const router=createRouter({
    history:createWebHistory(),
    routes
})





// const router =new VueRouter({
//     routes,
//     mode:'history'
// })