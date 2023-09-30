import HomePage from '../components/AppHomePage.vue';
import Calender from '../components/AppCalender.vue';
import Friends from '../components/AppFriends.vue';
import Setting from '../components/AppSettings.vue';
import Location from '../components/AppLocation.vue';
import Type from '../components/AppType.vue';
import Notification from '../components/AppNotification.vue';
import Privacy from '../components/AppPrivacy.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/HomePage', component:HomePage},
        {path:'/Calender', component:Calender},
        {path:'/Friends', component:Friends},
        {path:'/Setting', component:Setting},
        {path:'/Location', component:Location},
        {path:'/Type', component:Type},
        {path:'/Notification', component:Notification},
        {path:'/Privacy', component:Privacy}
    ]
})

export default router