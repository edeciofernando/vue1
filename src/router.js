import Vue from 'vue'
import VueRouter from 'vue-router'

import BoasVindas from './components/BoasVindas.vue'
import CadastroVeiculos from './components/CadastroVeiculos.vue'
import FormCarros from './components/FormCarros.vue'
import FormLogin from './components/FormLogin.vue'
import GraficoCarros from './components/GraficoCarros.vue'
import GraficoCarrosCores from './components/GraficoCarrosCores.vue'
import GraficoCadastros from './components/GraficoCadastros.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: BoasVindas },
        { path: '/cadcarros', component: CadastroVeiculos },
        { path: '/formcarros', component: FormCarros },
        { path: '/grafcarros', component: GraficoCarros },
        { path: '/grafcarroscores', component: GraficoCarrosCores },
        { path: '/grafcadastros', component: GraficoCadastros },
        { path: '/login', component: FormLogin },
    ]
})