<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
  <div class="my-8">
    <h1 class="text-2xl font-bold">5. Formulário sem rótulos</h1>
    <p>Erros de acessibilidade relacionados a formulários sem rótulos (labels) são comuns e impactam significativamente
      a experiência de pessoas que utilizam leitores de tela ou navegam apenas com o teclado
    </p>

    <div class="mt-4">
      <h2 class="text-xl font-bold">Links de apoio</h2>
      <ul class="flex flex-wrap gap-x-4 mb-4">
        <li>
          <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Techniques/html/H44.html" target="_blank">
            1) Rótulos e controles de formulário
          </a>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
      <div class="flex flex-col">
        <CodeHighlight language="html" :code="`
    <form action='' class='grid grid-cols-1 gap-4 md:grid-cols-2 mt-8'>
      <div class='flex flex-col'>
        <div>Nome completo
          <span class='text-xs'>(obrigatório)</span>
        </div>
        <input id='nome' name='nome' type='text' 
          placeholder='Digite aqui o seu nome'>
      </div>
      <div>
        <fieldset class='border rounded-sm pb-4 px-4'>
          <legend class='px-1'>
            Experiência em desenvolvimento de software
          </legend>
          <div class='flex gap-8'>
            <div class='flex flex-row gap-2 items-center'>
              <input name='dev' type='radio' value='jr' class='h-4 w-4'>
              <label>Júnior</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input name='dev' type='radio' value='pl' class='h-4 w-4'>
              <label>Pleno</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input name='dev' type='radio' value='sr' class='h-4 w-4'>
              <label>Sênior</label>
            </div>
          </div>
        </fieldset>
      </div>
  
      <div class='flex flex-col gap-2'>
        <div>
          E-mail <span class='text-xs'>(obrigatório)</span>
        </div>
        <input type='email' name='email' aria-describedby='email-ajuda' 
          placeholder='Digite aqui o seu e-mail'>
        <small id='email-ajuda'>Usaremos seu e-mail apenas para contato</small>
      </div>
  
      <div class='flex flex-col gap-2'>
        <div>Data de nascimento</div>
        <input type='datetime-local' name='birthdate' />
      </div>
  
      <div class='flex flex-col gap-2'>
        <div>
          Tipo de desenvolvedor <span class='text-xs'>(obrigatório)</span>
        </div>
        <select class='h-12'>
          <option value='empty'>Selecione</option>
          <option value='uix'>UI/UX Designer</option>
          <option value='a11y'>Especialista em Acessibilidade Web</option>
          <option value='dvf'>Desenvolvedor Frontend</option>
          <option value='dvb'>Desenvolvedor Backend</option>
          <option value='ads'>Arquiteto de Software</option>
        </select>
      </div>
  
      <div class='pt-1.5'>
        <fieldset class='border rounded-sm pb-4 px-4'>
          <legend class='px-1'>Desejo aprender mais sobre?</legend>
          <div class='flex flex-row gap-8 pt-1'>
            <div class='flex flex-row gap-2 items-center'>
              <input type='checkbox' value='uxui' class='h-4 w-4'>
              <label>UX/UI</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input type='checkbox' value='a11y' class='h-4 w-4'>
              <label>A11Y</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input type='checkbox' value='front' class='h-4 w-4'>
              <label>Frontend</label>
            </div>
          </div>
        </fieldset>
      </div>
  
      <div class='flex flex-col gap-2 md:col-span-2'>
        <div>Perfil profissional</div>
        <textarea name='mensagem' rows='2' cols=''
          placeholder='Descreva aqui o seu perfil profissional'></textarea>
      </div>
  
      <div>
        <button type='submit' class='alc-button alc-button--primary mr-2'>
          Salvar
        </button>
        <button type='submit' class='alc-button alc-button--secondary'>
          Cancelar
        </button>
      </div>
    </form>
        `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="@/assets/icons/g-close.svg" alt="" class="h-6 w-6">
              Errado
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/formulario-sem-rotulo-error" class="alc-button inline-block">
            Testar código
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-col">
        <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
    <form action='' class='grid grid-cols-1 gap-4 md:grid-cols-2 mt-8'>
      <div class='flex flex-col'>
        <label for='nome'>Nome completo
          <span class='text-xs'>(obrigatório)</span>
        </label>
        <input id='nome' name='nome' type='text' minlength='10' 
          placeholder='Digite aqui o seu nome' required>
      </div>
      <div>
        <fieldset class='border rounded-sm pb-4 px-4'>
          <legend class='px-1'>
            Experiência em desenvolvimento de software
          </legend>
          <div class='flex gap-8'>
            <div class='flex flex-row gap-2 items-center'>
              <input id='dv-jr' name='dev' type='radio' value='jr' 
                class='h-4 w-4'>
              <label for='dv-jr'>Júnior</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input id='dv-pl' name='dev' type='radio' value='pl' 
                class='h-4 w-4'>
              <label for='dv-pl'>Pleno</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input id='dv-sr' name='dev' type='radio' value='sr' 
                class='h-4 w-4'>
              <label for='dv-sr'>Sênior</label>
            </div>
          </div>
        </fieldset>
      </div>
  
      <div class='flex flex-col gap-2'>
        <label for='email'>
          E-mail
          <span class='text-xs'>(obrigatório)</span>
        </label>
        <input type='email' id='email' name='email' 
          aria-describedby='email-ajuda'
          placeholder='Digite aqui o seu e-mail' required>
        <small id='email-ajuda'>Usaremos seu e-mail apenas para contato</small>
      </div>
  
      <div class='flex flex-col gap-2'>
        <label for='birthdate'>Data de nascimento</label>
        <input id='birthdate' type='datetime-local' name='birthdate' />
      </div>
  
      <div class='flex flex-col gap-2'>
        <label for='webdevelopment'>
          Tipo de desenvolvedor
          <span class='text-xs'>(obrigatório)</span>
        </label>
        <select id='webdevelopment' class='h-12' required>
          <option value='' disabled selected>Selecione</option>
          <option value='uix'>UI/UX Designer</option>
          <option value='a11y'>Especialista em Acessibilidade Web</option>
          <option value='dvf'>Desenvolvedor Frontend</option>
          <option value='dvb'>Desenvolvedor Backend</option>
          <option value='ads'>Arquiteto de Software</option>
        </select>
      </div>
  
      <div class='pt-1.5'>
        <fieldset class='border rounded-sm pb-4 px-4'>
          <legend class='px-1'>Desejo aprender mais sobre?</legend>
          <div class='flex flex-row gap-8 pt-1'>
            <div class='flex flex-row gap-2 items-center'>
              <input id='uxui' type='checkbox' value='uxui' class='h-4 w-4'>
              <label for='uxui'>UX/UI</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input id='a11y' type='checkbox' value='a11y' class='h-4 w-4'>
              <label for='a11y'>A11Y</label>
            </div>
            <div class='flex flex-row gap-2 items-center'>
              <input id='front' type='checkbox' value='front' class='h-4 w-4'>
              <label for='front'>Frontend</label>
            </div>
          </div>
        </fieldset>
      </div>
  
      <div class='flex flex-col gap-2 md:col-span-2'>
        <label for='profile'>Perfil profissional</label>
        <textarea id='profile' name='mensagem' rows='2' cols=''
          placeholder='Descreva aqui o seu perfil profissional'></textarea>
      </div>
  
      <div>
        <button type='submit' class='alc-button alc-button--primary mr-2'>
          Salvar
        </button>
        <button type='submit' class='alc-button alc-button--secondary'>
          Cancelar
        </button>
      </div>
    </form>
        `">
          <template #title>
            <div class="flex flex-row items-center gap-2">
              <img src="@/assets/icons/g-check.svg" alt="" class="h-6 w-6">
              Certo
            </div>
          </template>
        </CodeHighlight>

        <div class="mt-2">
          <RouterLink to="/example/formulario-sem-rotulo-good" class="alc-button inline-block">
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
