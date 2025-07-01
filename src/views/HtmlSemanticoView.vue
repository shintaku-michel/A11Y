<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
  <div class="my-8">
    <h1 class="text-2xl font-bold">1. Uso inadequado de HTML semântico</h1>
    <p class="mb-4">O HTML perde seu significado estrutural e interpretativo quando elementos semânticos são
      ignorados, prejudicando usuários que usam leitores de tela, navegação por teclado e outros recursos assistivos.
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" target="_blank"
        class="alc-link flex gap-1">
        WCAG - Referências de semântica apropriada
      </a>
    </p>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Exemplo de código com falta de semântica</h2>
      <div class="grid grid-cols-1 xl:grid-cols-3 mb-4">
        <ul class="ul-custom">
          <li>Títulos feitos com marcação incorreta, falta de <strong>h1, h2, h3...</strong></li>
          <li>Nível de heading <strong>h*</strong> quebrado</li>
        </ul>
        <ul class="ul-custom">
          <li>Layout sem landmarks ou uso incorreto</li>
          <li>Listas feitas com <strong>div</strong></li>
        </ul>
        <ul class="ul-custom">
          <li>Botão feito com <strong>div</strong> ou <strong>span</strong></li>
          <li>Uso de tabela para criação de layouts</li>
        </ul>
      </div>
    </div>

    <!--CÓDIGO ERRADO -->
    <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
      <div class="flex flex-col">
        <CodeHighlight language="html" :code="`
    <!DOCTYPE html>
    <html lang='en'>
      <head>...</head>
  
      <div class='header'><span>Título da aplicação</span></div>
      
      <div class='nav'>
        <div><a href='#'>Seuso</a></div>
        <div><a href='#'>Acessibilidade</a></div>
        <div><a href='#'>UX/UI</a></div>
        <div><a href='#'>Frontend</a></div>
      </div>
  
      <div class='main'>
        <h1>Conteúdo Principal</h1>
        <h3>Dicas de HTML semântico</h3>
        <p>Conteúdo relacionado ao títilo da seção...</p>
        <span onclick='abrirModal()'>Abrir modal</span>
      </div>
      
      <div class='footer'>
        <p>&copy; 2025 Seuso - Seção de Acessibilidade e Experiência do Usuário</p>
      </div>
    </html>
          `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="/src/assets/icons/g-close.svg" alt="" class="h-6 w-6">
              Errado
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/html-semantic-error" class="alc-button inline-block">
            Testar código
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-col">
        <!--CÓDIGO CERTO -->
        <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
    <!DOCTYPE html>
    <html lang='pt-BR'>
      <head>...</head>
      <header class='header'><span>Título da aplicação</span></header>
      <nav class='nav'>
        <ul>
          <li><a href='#'>Seuso</a></li>
          <li><a href='#'>Acessibilidade</a></li>
          <li><a href='#'>UX/UI</a></li>
          <li><a href='#'>Frontend</a></li>
        </ul>
      </nav>
      <main class='main'>
        <h1>Conteúdo Principal</h1>
        <section>
          <h2>Dicas de HTML semântico</h2>
          <p>Conteúdo relacionado ao títilo da seção...</p>
          <button type='button' onclick='abrirModal()'>Abrir modal</button>
        </section> 
      </main>
      <footer class='footer'>
          <p>&copy; 2025 Seuso - Seção de Acessibilidade e Experiência do Usuário</p>
      </footer>   
    </html>
          `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
              <span>Certo</span>
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/html-semantic-good" class="alc-button inline-block">
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
.link-navVertical {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: inherit;
}

.blur-code {
  filter: blur(4px);
  transition: filter 0.3s ease;
}

.ul-custom {
  list-style-type: disc;
  /* bolinha sólida */
  padding-left: 20px;
  /* espaço para a bolinha aparecer */
}
</style>