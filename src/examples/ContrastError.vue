<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
      <header class="header">HEADER</header>

      <main class="main mt-4" id="main-content" tabindex="-1">
        <h1>Conteúdo Principal</h1>
        <section aria-labelledby='region1'>
          <h2 id='region1'>Dicas de uso adequado de cores</h2>
          <p class="mt-4 text-gray-400">Texto normal</p>
          <p class="text-xl font-semibold mt-4 text-gray-400">Texto grande</p>
          <img src="/src/assets/icons/g-rocket-contrast-good.svg" alt="Imagem ilustrativa de contraste com erro"
            class="h-6 w-6 mt-4">
        </section>
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
            Texto normal com baixo contraste
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Texto grande com baixo contraste
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Objeto gráfico com baixo contraste
          </li>
        </ul>

        <div class="p-4 border m-4">
          <h3 class="text-xl m-0">Exemplo apresentado</h3>
          <p class="px-4 mt-2">Foreground (#9CA3AF) text-gray-400</p>
          <p class="px-4">Background (#FFFFFF) bg-white</p>
        </div>
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