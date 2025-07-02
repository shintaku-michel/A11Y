<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
  <div class="my-8">
    <h1 class="text-2xl font-bold">2. Uso incorreto de cores (Baixo contraste)</h1>
    <p>Pessoas com baixa visão ou daltonismo podem ter dificuldade de leitura do seu conteúdo.</p>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Links de apoio</h2>
      <ul class="flex flex-wrap gap-x-4 mb-4">
        <li>
          <a class="alc-link" href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank">
            1) Entendendo o Contraste Mínimo (W3C)
          </a>
        </li>
        <li>
          <a class="alc-link" href="https://ux.camara.leg.br/alcance/?path=/docs/estilos-cores--documenta%C3%A7%C3%A3o"
            target="_blank">
            2) Alcance - Estilos e Cores
          </a>
        </li>
        <li>
          <a class="alc-link" href="https://webaim.org/resources/contrastchecker" target="_blank">
            3) WebAIM - Contrast Checker
          </a>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
      <div class="flex flex-col">
        <CodeHighlight language="html" :code="`
        <!-- Contraste em texto normal -->
        <p class='text-gray-400'>Texto normal</p>
        <!-- Contraste em texto grande -->
        <p class='text-gray-400'>Texto grande</p>
        <!-- Contraste em objetos gráficos -->
        <img src='/assets/icons/g-rocket-contrast-error.svg'
        alt='' class='h-6 w-6'>
        `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="@/assets/icons/g-close.svg" alt="" class="h-6 w-6">
              Errado
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/contrast-error" class="alc-button inline-block">
            Testar código
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-col">
        <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
        <!-- Contraste em texto normal -->
        <p class='text-gray-500'>Texto normal</p>
        <!-- Contraste em texto grande -->
        <p class='text-gray-500'>Texto grande</p>
        <!-- Contraste em objetos gráficos -->
        <img src='/assets/icons/g-rocket-contrast-good.svg'
        alt='' class='h-6 w-6'>
      `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="@/assets/icons/g-check.svg" alt="" class="h-6 w-6">
              Certo
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/contrast-good" class="alc-button inline-block">
            Testar código
          </RouterLink>
          <button class="alc-button alc-button--secondary ml-2" @click="mostrarCodigo = !mostrarCodigo">
            {{ mostrarCodigo ? 'Ocultar código' : 'Mostrar código' }}
          </button>
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
