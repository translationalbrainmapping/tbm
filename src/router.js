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
    { path: '/',     name: 'Home', component: Home, meta: { side: 'left' } },
    { path: '/team', name: 'Team', component: Team, meta: { side: 'full' } },
    { path: '/news', name: 'News', component: News, meta: { side: 'full' } },
    { path: '/show/frontal',   name: 'Frontal',   component: Frontal,   meta: { side: 'right' } },
    { path: '/show/parietal',  name: 'Parietal',  component: Parietal,  meta: { side: 'left'  } },
    { path: '/show/occipital', name: 'Occipital', component: Occipital, meta: { side: 'right' } },
    { path: '/show/temporal',  name: 'Temporal',  component: Temporal,  meta: { side: 'left'  } },
  ]
})
