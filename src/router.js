import Vue from 'vue'
import Router from 'vue-router'

// Static Pages
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import News from '@/views/News.vue'

// Popups
import Frontal from '@/views/popups/Frontal.vue'
import Parietal from '@/views/popups/Parietal.vue'
import Occipital from '@/views/popups/Occipital.vue'
import Temporal from '@/views/popups/Temporal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/team', name: 'Team', component: Team },
    { path: '/news', name: 'News', component: News },
    { path: '/show/frontal', name: 'Frontal', component: Frontal },
    { path: '/show/parietal', name: 'Parietal', component: Parietal },
    { path: '/show/occipital', name: 'Occipital', component: Occipital },
    { path: '/show/temporal', name: 'Temporal', component: Temporal },
  ]
})
