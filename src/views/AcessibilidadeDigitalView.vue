<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="my-8">
    <h1>A11Y - Acessibilidade Digital</h1>
    <p class="mb-4">
      A acessibilidade digital é um dos pilares fundamentais na construção de experiências web inclusivas,
      garantindo que
      qualquer pessoa, independentemente de suas limitações físicas, sensoriais ou cognitivas, possa navegar,
      interagir e
      consumir informações na internet de forma autônoma e eficiente. No entanto, ainda é muito comum que
      desenvolvedores frontend cometam erros que comprometem significativamente
      a acessibilidade dos sites e aplicações.
    </p>

    <div class="flex flex-col mt-4">
      <ol class="lista-custom mb-4">
        <li class="py-0.5">
          <RouterLink to="/view/html-semantico" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            01 - Uso inadequado de HTML semântico
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/view/baixo-contraste" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            02 - Baixo contraste de cores
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/view/imagem-sem-alt" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            03 - Imagens sem texto alternativo
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/view/foco-nao-visivel" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            04 - Foco não visível
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/view/formulario-sem-rotulo" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            05 - Formulários sem rótulos
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/view/hierarquia-titulos" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            06 - Hierarquia incorreta de títulos
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/view/skip-links" class="link-custom flex gap-2">
            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            07 - Não fornecer skip links
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            08 - Elementos não acessíveis via teclado
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            09 - Navegação inconsistente
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            10 - Elementos interativos sem semântica
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            11 - Falta de gerenciamento de foco em modais e menus
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            12 - Atualizações dinâmicas não anunciadas
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            13 - Elementos não informativos
          </RouterLink>
        </li>
        <li class="py-0.5">
          <RouterLink to="/" class="link-custom">
            14 - Conteúdo multimídia sem alternativas
          </RouterLink>
        </li>
      </ol>
    </div>
  </div>

</template>

<style scoped>
.link-custom {
  color: #07648d;
  font-size: 1.2rem;
  text-decoration: underline;
}
</style>
