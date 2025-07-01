<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <header class="header">HEADER</header>
      <main class="main mt-4" id="main-content" tabindex="-1">
        <h2>Frontend Developer (h2)</h2>
        <h3>Requisitos essenciais (h3)</h3>
        <h4>HTML5, CSS3, JavaScript (ES6+) (h4)</h4>
        <h4>Frameworks: React, Vue, Angular... (h4)</h4>
        <h4>Ger. de estado: Redux, Pinia, Vuex (h4)</h4>
        <h4>Componentização e Design System (h4)</h4>
        <h4>Acessibilidade (A11Y) e semântica (h4)</h4>
        <h5>Controle de versão: Git + GitHub/GitLab (h5)</h5>
        <h5>Integração com APIs REST/GraphQL (h5)</h5>
        <h5>Build tools: Vite, Webpack, Rollup... (h5)</h5>
        <h5>Conhecimento em testes: Unitários e E2E (h5)</h5>
        <h3>Requisitos desejáveis (h3)</h3>
        <h3>TypeScript (h3)</h3>
        <h3>CI/CD (GitHub Actions, Vercel...) (h3)</h3>
        <h3>Web performance (Lighthouse, lazy loading...) (h3)</h3>
        <h3>Experiência com SSR (Next.js, Nuxt) (h3)</h3>
        <h3>Bibliotecas de UI (Tailwind, Radix...) (h3)</h3>
        <h3>Frameworks modernos de SSR/SPA (h3)</h3>
      </main>
    </div>

    <aside class="flex flex-col px-8 mt-10">
      <div class="px-4 py-2 bg-amber-200">
        <h2 class="uppercase m-0 p-0">Verificações</h2>
      </div>
      <div class="flex flex-col justify-items-start bg-amber-100">
        <ul>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Uso de skip-link, ir para o conteúdo principal.
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Hierarquia de cabeçalhos correta
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Boas práticas de acessibilidade
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.header {
  font-size: 2rem;
  font-weight: bold;
  color: #07648d;
  border: solid 1px #07648d;
  padding: 0 1rem;
}

.nav {
  background-color: #f0f4f8;
  padding: 1rem;
  margin: 1rem 0;
  border: solid 1px #cccccc;
}

.main {
  padding: 1rem;
  font-size: 1.2rem;
  color: #333;
  border: solid 1px #cccccc;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 100;
  text-decoration: none;
  /* transition: top 0.3s ease; */
}

.skip-link:focus {
  top: 0;
}
</style>