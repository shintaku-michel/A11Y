<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
  <div class="my-8">

  </div>
  <h1 class="text-2xl font-bold">7. Não fornecer Skip links</h1>
  <p>Sem um skip link (“link de pular para o conteúdo”), usuários que navegam com o teclado são forçados a passar por
    todo o menu, cabeçalho, ícones e navegação repetitiva toda vez que acessam uma nova página — o que é extremamente
    frustrante e ineficiente.</p>

  <div class="mt-4">
    <h2 class="text-xl font-bold">Links de apoio</h2>
    <ul class="flex flex-wrap gap-x-4 mb-4">
      <li>
        <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=241#bypass-blocks"
          target="_blank">
          1) Blocos de desvio Skip links
        </a>
      </li>
      <li>
        <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Techniques/general/G1.html" target="_blank">
          2) Skip links para o conteúdo principal
        </a>
      </li>
      <li>
        <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Techniques/general/G124.html" target="_blank">
          3) Skip links para cada área do conteúdo
        </a>
      </li>
      <li>
        <a class="alc-link" href="hhttps://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11.html" target="_blank">
          4) Skip links com ARIA landmarks
        </a>
      </li>
    </ul>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
    <div class="flex flex-col">
      <CodeHighlight language="html" :code="`
    <body>
      <header>
        <nav>
          <!-- Menu -->
        </nav>
      </header>
      <main>
        <h1>Conteúdo Principal</h1>
        <p>Bem-vindo ao site...</p>
      </main>
    </body>
      `">
        <template #title>
          <div class="flex flex-row items-center gap-2">
            <img src="/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Errado
          </div>
        </template>
      </CodeHighlight>

      <div class="mt-2">
        <RouterLink to="/example/skip-links-error" class="alc-button inline-block">
          Testar código
        </RouterLink>
      </div>
    </div>

    <div class="flex flex-col">
      <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
    <body>
      <a href='#conteudo' 
        class='skip-link'>Pular para o conteúdo principal
      </a>
      <header>
        <nav>
          <!-- Menu -->
        </nav>
      </header>
      <main id='conteudo' tabindex='-1'>
        <h1>Conteúdo Principal</h1>
        <p>Bem-vindo ao site...</p>
      </main>
    </body>
    `">
        <template #title>
          <div class="flex flex-row items-center gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Certo
          </div>
        </template>
      </CodeHighlight>

      <div class="mt-2">
        <RouterLink to="/example/skip-links-good" class="alc-button inline-block">
          Testar código
        </RouterLink>
        <button class="alc-button alc-button--secondary ml-2" @click="mostrarCodigo = !mostrarCodigo">
          {{ mostrarCodigo ? 'Ocultar código' : 'Mostrar código' }}
        </button>
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
