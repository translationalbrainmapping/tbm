import Vue    from 'vue'
import Router from 'vue-router'

// Static Pages
import Home    from '@/views/Home.vue'
import Team    from '@/views/Team.vue'
import News    from '@/views/News.vue'
import Explore from '@/views/Explore.vue'
import PatientResources from '@/views/PatientResources.vue'

// Brain Regions
import LeftInferiorFrontalGyrus       from '@/views/regions/LIFG.vue'
import LeftInferiorParietalLobule     from '@/views/regions/LIPL.vue'
import LeftInferiorTemporalGyrus      from '@/views/regions/LITG.vue'
import LeftMiddleSuperiorFrontalGyrus from '@/views/regions/LMSFG.vue'
import LeftSuperiorTemporalGyrus      from '@/views/regions/LSTG.vue'
import RightPreCentralGyrus           from '@/views/regions/RPCG.vue'
import RightSuperiorTemporalGyrus     from '@/views/regions/RSTG.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Static Site Pages
    { path: '/',     name: 'Home', component: Home, meta: { side: 'left' } },
    { path: '/team', name: 'Team', component: Team, meta: { side: 'full' } },
    { path: '/news', name: 'News', component: News, meta: { side: 'full' } },
    { path: '/explore', name: 'Explore', component: Explore, meta: { side: 'full' } }, // Used to create immersive explore experience
    { path: '/resources-for-patients', name: 'PatientResources', component: PatientResources, meta: { side: 'full' } },

    // Brain Regions
    { path: '/regions/lifg',  name: 'LeftInferiorFrontalGyrus',       component: LeftInferiorFrontalGyrus,       meta: { side: 'right' } },
    { path: '/regions/lipl',  name: 'LeftInferiorParietalLobule',     component: LeftInferiorParietalLobule,     meta: { side: 'left'  } },
    { path: '/regions/litg',  name: 'LeftInferiorTemporalGyrus',      component: LeftInferiorTemporalGyrus,      meta: { side: 'right' } },
    { path: '/regions/lmsfg', name: 'LeftMiddleSuperiorFrontalGyrus', component: LeftMiddleSuperiorFrontalGyrus, meta: { side: 'left'  } },
    { path: '/regions/lstg',  name: 'LeftSuperiorTemporalGyrus',      component: LeftSuperiorTemporalGyrus,      meta: { side: 'right' } },
    { path: '/regions/rpcg',  name: 'RightPreCentralGyrus',           component: RightPreCentralGyrus,           meta: { side: 'left'  } },
    { path: '/regions/rstg',  name: 'RightSuperiorTemporalGyrus',     component: RightSuperiorTemporalGyrus,     meta: { side: 'right' } },
  ]
})
