import AltImageError from '@/examples/AltImageError.vue'
import AltImageGood from '@/examples/AltImageGood.vue'
import ContrastError from '@/examples/ContrastError.vue'
import ContrastGood from '@/examples/ContrastGood.vue'
import FocoNaoVisivelError from '@/examples/FocoNaoVisivelError.vue'
import FocoNaoVisivelGood from '@/examples/FocoNaoVisivelGood.vue'
import FormularioSemRotuloError from '@/examples/FormularioSemRotuloError.vue'
import FormularioSemRotuloGood from '@/examples/FormularioSemRotuloGood.vue'
import HierarquiaCabecalhoError from '@/examples/HierarquiaCabecalhoError.vue'
import HierarquiaCabecalhoGood from '@/examples/HierarquiaCabecalhoGood.vue'
import HtmlSemanticError from '@/examples/HtmlSemanticError.vue'
import HtmlSemanticGood from '@/examples/HtmlSemanticGood.vue'
import SkipLinksError from '@/examples/SkipLinksError.vue'
import SkipLinksGood from '@/examples/SkipLinksGood.vue'
import AcessibilidadeDigitalView from '@/views/AcessibilidadeDigitalView.vue'
import BaixoContraste from '@/views/BaixoContrasteView.vue'
import ContatoView from '@/views/ContatoView.vue'
import FocoNaoVisivel from '@/views/FocoNaoVisivelView.vue'
import FormularioSemRotulo from '@/views/FormularioSemRotuloView.vue'
import HierarquiaTitulosView from '@/views/HierarquiaTitulosView.vue'
import HomeView from '@/views/HomeView.vue'
import HtmlSemanticoView from '@/views/HtmlSemanticoView.vue'
import ImagemSemAlt from '@/views/ImagensSemAltView.vue'
import SairView from '@/views/SairView.vue'
import SkipLinks from '@/views/SkipLinksView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  /* history: createWebHistory(import.meta.env.BASE_URL), */
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'view' }
    },
    {
      path: '/view/acessibilidade-digital',
      name: 'acessibilidade-digital-view',
      component: AcessibilidadeDigitalView,
      meta: { layout: 'view' }
    },
    {
      path: '/view/html-semantico',
      name: 'html-semantico-view',
      component: HtmlSemanticoView,
      meta: { layout: 'view' }
    },
    {
      path: '/view/hierarquia-titulos',
      name: 'hierarquia-titulos-view',
      component: HierarquiaTitulosView,
      meta: { layout: 'view' }
    },
    {
      path: '/view/baixo-contraste',
      name: 'baixo-contraste-view',
      component: BaixoContraste,
      meta: { layout: 'view' }
    },
    {
      path: '/view/imagem-sem-alt',
      name: 'imagem-sem-alt-view',
      component: ImagemSemAlt,
      meta: { layout: 'view' }
    },
    {
      path: '/view/foco-nao-visivel',
      name: 'foco-nao-visivel-view',
      component: FocoNaoVisivel,
      meta: { layout: 'view' }
    },
    {
      path: '/view/formulario-sem-rotulo',
      name: 'formulario-sem-rotulo-view',
      component: FormularioSemRotulo,
      meta: { layout: 'view' }
    },
    {
      path: '/view/skip-links',
      name: 'skip-links-view',
      component: SkipLinks,
      meta: { layout: 'view' }
    },
    {
      path: '/view/sair',
      name: 'sair-view',
      component: SairView,
      meta: { layout: 'view' }
    },
    {
      path: '/view/contato',
      name: 'contato-view',
      component: ContatoView,
      meta: { layout: 'view' }
    },
    {
      path: '/example/html-semantic-error',
      name: 'html-semantico-error',
      component: HtmlSemanticError,
      meta: { layout: 'example' }
    },
    {
      path: '/example/html-semantic-good',
      name: 'html-semantico-good',
      component: HtmlSemanticGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/contrast-error',
      name: 'contrast-error',
      component: ContrastError,
      meta: { layout: 'example' }
    },
    {
      path: '/example/contrast-good',
      name: 'contrast-good',
      component: ContrastGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/alt-image-error',
      name: 'alt-image-error',
      component: AltImageError,
      meta: { layout: 'example' }
    },
    {
      path: '/example/alt-image-good',
      name: 'alt-image-good',
      component: AltImageGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/foco-nao-visivel-error',
      name: 'foco-nao-visivel-error',
      component: FocoNaoVisivelError,
      meta: { layout: 'example' }
    },
    {
      path: '/example/foco-nao-visivel-good',
      name: 'foco-nao-visivel-good',
      component: FocoNaoVisivelGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/formulario-sem-rotulo-good',
      name: 'formulario-sem-rotulo-good',
      component: FormularioSemRotuloGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/formulario-sem-rotulo-error',
      name: 'formulario-sem-rotulo-error',
      component: FormularioSemRotuloError,
      meta: { layout: 'example' }
    },
    {
      path: '/example/hierarquia-cabecalho-good',
      name: 'hierarquia-cabecalho-good',
      component: HierarquiaCabecalhoGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/hierarquia-cabecalho-error',
      name: 'hierarquia-cabecalho-error',
      component: HierarquiaCabecalhoError,
      meta: { layout: 'example' }
    },
    {
      path: '/example/skip-links-good',
      name: 'skip-links-good',
      component: SkipLinksGood,
      meta: { layout: 'example' }
    },
    {
      path: '/example/skip-links-error',
      name: 'skip-links-error',
      component: SkipLinksError,
      meta: { layout: 'example' }
    }
  ],
})

export default router
