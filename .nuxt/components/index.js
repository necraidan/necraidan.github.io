import { wrapFunctional } from './utils'

export { default as Header } from '../../components/Header.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
