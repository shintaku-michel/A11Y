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
          <h2 id='region1'>Dicas de uso adequado de imagens</h2>
          <div>
            <h3>Imagens informativas</h3>
            <p class="flex flex-row items-center gap-2 mt-4">
              <img src="/src/assets/icons/g-phone.svg" alt="Telefone:" class="h-6 w-6"> 0123 456 7890
            </p>
            <p class="flex flex-row items-center gap-2 my-4">
              <img src="/src/assets/icons/g-fax.svg" alt="Fax:" class="h-6 w-6"> 0123 456 7891
            </p>
            <p class="flex flex-row items-center justify-center gap-4">
              <img src="/src/assets/images/dog.jpg" alt="Imagem com cão-guia com sininho na coleira"
                class="border h-20 w-20">
              <span>Cães-guia fora de serviço costumam usar uma campainha.
                Seu toque ajuda o dono cego a rastrear a localização do cão.</span>
            </p>
          </div>

          <div class="mt-8">
            <h3>Imagens decorativas</h3>
            <div class="flex flex-row items-center gap-4">
              <img src="/src/assets/images/dog-s.jpg" alt="" class="border h-20 w-20">
              <p><strong>O cão adormecido</strong>: "Deixe os cães adormecidos" é um provérbio que significa "não
                provoque problemas. Se algo que poderia ser problemático estiver quieto, então deixe-o em paz".</p>
            </div>
            <div class="flex flex-row items-center gap-4 mt-4">
              <img src="/src/assets/images/bg-header.png" alt="" class="border h-20 w-20">
            </div>
          </div>
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
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Imagem informativa sem descrição
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Imagem decorativa com descrição
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