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
          <h2 id='region1'>Dicas de uso adequado de skip-links</h2>
          <div>
            <p>Sem um skip link (“link de pular para o conteúdo”), usuários que navegam com o teclado são forçados a
              passar por todo o menu, cabeçalho, ícones e navegação repetitiva toda vez que acessam uma nova página —
              o que é extremamente frustrante e ineficiente.
            </p>
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
            Link de pular para o conteúdo
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