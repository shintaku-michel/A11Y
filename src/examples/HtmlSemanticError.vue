<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <div class='header'>HEADER</div>
      <div class='nav'>
        <div>
          <RouterLink to="/">Seuso</RouterLink>
        </div>
        <div>
          <RouterLink to="/">Acessibilidade</RouterLink>
        </div>
        <div>
          <RouterLink to="/">UI/UX</RouterLink>
        </div>
        <div>
          <RouterLink to="/">Frontend</RouterLink>
        </div>
      </div>

      <div class='main'>
        <h1>Conteúdo Principal (h1)</h1>
        <h3 class="title">Dicas de HTML semântico (h3)</h3>
        <p>Conteúdo relacionado ao títilo da seção...</p>
        <span class="btn-custom mt-2" onclick='abrirModal()'>Abrir modal de exemplo</span>
      </div>

      <div class='footer'>
        <p>© 2025 Seuso - Seção de Acessibilidade e Experiência do Usuário</p>
      </div>
    </div>

    <div class="flex flex-col px-8 mt-10">
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
            Landmarks corretos - (Header, Nav, Main e Footer)
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Cabeçalhos ordenados corretamente
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Lista feita com <span class="text-red-800 ml-1">&lt;div&gt;</span>
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
            Botão feito com div ou span
          </li>
        </ul>
      </div>
    </div>
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

.title {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.625rem;
  line-height: 2rem;
  font-weight: 500;
}

.footer {
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1rem;
  color: #333;
  border: solid 1px #cccccc;
}

.btn-custom {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #07648d;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-custom:hover {
  background-color: #064f7a;
}
</style>