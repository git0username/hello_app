import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX'
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: 'index',
        //     components: {
        //         default:HelloWorld,
        //         first:HelloWorld,
        //         second:HelloJSX            
        //     }  // '/' で接続されたら、Helloworldコンポーネントを表示してね。
        // },

        {
            path:'/',
            redirect:'/index/taro'
        },
        {
            path: '/index/:name',
            name: 'index',
            component: HelloWorld,
            props:true
        },
        {
            path:'/jsx/:name',
            name: 'jsx',
            component:HelloJSX,
            props:true        
            },
        
    ],
})