<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <div>
      <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
      <header class="header">HEADER</header>

      <main class="main mt-4" id="main-content" tabindex="-1">
        <h1>Conteúdo Principal</h1>
        <section aria-labelledby='region1'>
          <h2 id='region1'>Dicas de uso de rótulos em formulário</h2>
          <form action="" class="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
            <div class="flex flex-col">
              <label for="nome">Nome completo
                <span class="text-xs">(obrigatório)</span>
              </label>
              <input id="nome" name="nome" type="text" minlength="10" placeholder="Digite aqui o seu nome" required>
            </div>
            <div>
              <fieldset class="border rounded-sm pb-4 px-4">
                <legend class="px-1">Experiência em desenvolvimento de software</legend>
                <div class="flex gap-8">
                  <div class="flex flex-row gap-2 items-center">
                    <input id="dv-jr" name="dev" type="radio" value="jr" class="h-4 w-4">
                    <label for="dv-jr">Júnior</label>
                  </div>
                  <div class="flex flex-row gap-2 items-center">
                    <input id="dv-pl" name="dev" type="radio" value="pl" class="h-4 w-4">
                    <label for="dv-pl">Pleno</label>
                  </div>
                  <div class="flex flex-row gap-2 items-center">
                    <input id="dv-sr" name="dev" type="radio" value="sr" class="h-4 w-4">
                    <label for="dv-sr">Sênior</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="flex flex-col gap-2">
              <label for="email">
                E-mail
                <span class="text-xs">(obrigatório)</span>
              </label>
              <input type="email" id="email" name="email" aria-describedby="email-ajuda"
                placeholder="Digite aqui o seu e-mail" required>
              <small id="email-ajuda">Usaremos seu e-mail apenas para contato</small>
            </div>

            <div class="flex flex-col gap-2">
              <label for="birthdate">Data de nascimento</label>
              <input id="birthdate" type="datetime-local" name="birthdate" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="webdevelopment">
                Tipo de desenvolvedor
                <span class="text-xs">(obrigatório)</span>
              </label>
              <select id="webdevelopment" class="h-12" required>
                <option value="" disabled selected>Selecione</option>
                <option value="uix">UI/UX Designer</option>
                <option value="a11y">Especialista em Acessibilidade Web</option>
                <option value="dvf">Desenvolvedor Frontend</option>
                <option value="dvb">Desenvolvedor Backend</option>
                <option value="ads">Arquiteto de Software</option>
              </select>
            </div>

            <div class="pt-1.5">
              <fieldset class="border rounded-sm pb-4 px-4">
                <legend class="px-1">Desejo aprender mais sobre?</legend>
                <div class="flex flex-row gap-8 pt-1">
                  <div class="flex flex-row gap-2 items-center">
                    <input id="uxui" type="checkbox" value="uxui" class="h-4 w-4">
                    <label for="uxui">UX/UI</label>
                  </div>
                  <div class="flex flex-row gap-2 items-center">
                    <input id="a11y" type="checkbox" value="a11y" class="h-4 w-4">
                    <label for="a11y">A11Y</label>
                  </div>
                  <div class="flex flex-row gap-2 items-center">
                    <input id="front" type="checkbox" value="front" class="h-4 w-4">
                    <label for="front">Frontend</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="flex flex-col gap-2 md:col-span-2">
              <label for="profile">Perfil profissional</label>
              <textarea id="profile" name="mensagem" rows="2" cols=""
                placeholder="Descreva aqui o seu perfil profissional"></textarea>
            </div>

            <div>
              <button type="submit" class="alc-button alc-button--primary mr-2">Salvar</button>
              <button type="submit" class="alc-button alc-button--secondary">Cancelar</button>
            </div>
          </form>
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
            Uso de skip-link, ir para o conteúdo principal.
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Atributo <span class="font-bold px-1">for</span> da <span class="font-bold px-1">label</span> faz referência
            ao campo com <span class="font-bold px-1">id</span> do <span class="font-bold px-1">input</span>
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Atributo <span class="font-bold px-1">required</span> no elemento <span class="font-bold px-1">input</span>
            para campos obrigatórios
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Campo input, type<span class="font-bold px-1">radio</span> operável por teclado (Espaço, Setas e tab) e
            acessível pelo leitor de tela.
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Atributo ARIA, <span class="font-bold px-1">aria-describedby</span>, para campos descritivos
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Input, <span class="font-bold px-1">date, time e datetime-local</span>, operável por teclado (Enter, Tab,
            Espaço, Setas e Esc) e acessível pelo leitor de tela.
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Campo, <span class="font-bold px-1">Select</span>, operável por teclado (Espaço, Setas e Esc) e
            acessível pelo leitor de tela.
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Campo input, type<span class="font-bold px-1">chekbox</span>, operável por teclado (Tab e Espaço) e
            acessível pelo leitor de tela.
          </li>
          <li class="flex p-2">
            <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
            Todos os campos com <span class="font-bold px-1">outline</span> visível.
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