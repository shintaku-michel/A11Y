<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
  <div class="my-8">
    <h1 class="text-2xl font-bold">6. Hierarquia incorreta de títulos</h1>
    <p>
      Quando os níveis de títulos (h1 a h6) são usados fora de ordem ou sem estrutura lógica, usuários de tecnologias
      assistivas (como leitores de tela) têm dificuldade de navegar, entender a organização da página e compreender a
      importância relativa das seções.
    </p>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Links de apoio</h2>
      <ul class="flex flex-wrap gap-x-4 mb-4">
        <li>
          <a class="alc-link" href="https://www.w3.org/WAI/tutorials/page-structure/headings/" target="_blank">
            1) Headings
          </a>
        </li>
        <li>
          <a class="alc-link"
            href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements"
            target="_blank">
            2) Títulos de seção
          </a>
        </li>
        <li>
          <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12.html" target="_blank">
            3) Uso avançado role=heading aria-level=n
          </a>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
      <div class="flex flex-col">
        <CodeHighlight language="html" :code="`
    <body>
      <h2>Frontend Developer</h2>
      <h3>Requisitos essenciais</h3>
        <h4>HTML5, CSS3, JavaScript (ES6+)</h4>
        <h4>Frameworks: React, Vue, Angular...</h4>
        <h4>Gerenciamento de estado: Redux, Pinia, Vuex</h4>
        <h4>Componentização e Design System</h4>
        <h4>Acessibilidade (A11Y) e semântica</h4>
        <h5>Controle de versão: Git + GitHub/GitLab</h5>
        <h5>Integração com APIs REST/GraphQL</h5>
        <h5>Build tools: Vite, Webpack, Rollup...</h5>
        <h5>Conhecimento em testes: Unitários e E2E</h5>
      <h3>Requisitos desejáveis</h3>
        <h3>TypeScript</h3>
        <h3>CI/CD (GitHub Actions, Vercel...)</h3>
        <h3>Web performance (Lighthouse, lazy loading...)</h3>
        <h3>Experiência com SSR (Next.js, Nuxt)</h3>
        <h3>Consumo de bibliotecas de UI (Tailwind, Radix...)</h3>
        <h3>Experiência com frameworks modernos de SSR/SPA</h3>
    <body>
      `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="@/assets/icons/g-close.svg" alt="" class="h-6 w-6">
              Errado
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/hierarquia-cabecalho-error" class="alc-button inline-block">
            Testar código
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-col">
        <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
    <body>
      <h1>Frontend Developer – Requisitos</h1>
      <section aria-labelledby='region1'>
        <h2 id='region1'>Requisitos essenciais</h2>
        <section><h3>HTML5, CSS3, JavaScript (ES6+)</h3></section>
        <section><h3>Frameworks: React, Vue, Angular...</h3></section>
        <section><h3>Ger. de estado: Redux, Pinia, Vuex</h3></section>
        <section><h3>Componentização e Design System</h3></section>
        <section><h3>Acessibilidade (A11Y) e semântica</h3></section>
        <section><h3>Controle de versão: Git + GitHub/GitLab</h3></section>
        <section><h3>Integração com APIs REST/GraphQL</h3></section>
        <section><h3>Build tools: Vite, Webpack, Rollup...</h3></section>
        <section><h3>Conhecimento em testes: Unitários e E2E</h3></section>
      </section>
      <section aria-labelledby='region2'>
        <h2 id='region2'>Requisitos desejáveis</h2>
        <section><h3>TypeScript</h3></section>
        <section><h3>CI/CD (GitHub Actions, Vercel...)</h3></section>
        <section>
          <h3>Web performance (Lighthouse, lazy loading...)</h3>
        </section>
        <section><h3>Experiência com SSR (Next.js, Nuxt)</h3></section>
        <section><h3>Bibliotecas de UI (Tailwind, Radix...)</h3></section>
        <section><h3>Frameworks modernos de SSR/SPA</h3></section>
      </section>
    </body>
      `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="@/assets/icons/g-check.svg" alt="" class="h-6 w-6">
              Certo
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/hierarquia-cabecalho-good" class="alc-button inline-block">
            Testar código
          </RouterLink>
          <button class="alc-button alc-button--secondary ml-2" @click="mostrarCodigo = !mostrarCodigo">
            {{ mostrarCodigo ? 'Ocultar código' : 'Mostrar código' }}
          </button>
          <a href="https://relogioonline.com.br/" target="_blank" class="ml-8 alc-link">
            Abrir cronômetro
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blur-code {
  filter: blur(4px);
  transition: filter 0.3s ease;
}
</style>
