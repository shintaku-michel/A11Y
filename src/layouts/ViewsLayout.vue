<script setup lang="ts">
import { AlcHeader, AlcNavPanel, AlcSkipLink } from 'alcance-vue-library';
import { RouterView } from 'vue-router';
import navVertical from '../components/NavVertical.vue';
</script>

<template>
  <alc-header description="Acessibilidade em desenvolvimento Frontend" home-url="/" name="SEUSO A11Y">
    <alc-environment-label env="prototype"></alc-environment-label>
    <alc-skip-link anchor="main-content">conteúdo principal</alc-skip-link>
    <alc-skip-to-nav></alc-skip-to-nav>
    <div slot="support">
      <alc-header-action icon-name="question-circle" variant="button">Ajuda</alc-header-action>
      <alc-header-action icon-name="envelope" url="/contato" variant="link">Contato</alc-header-action>
    </div>
    <div slot="fixed">
      <alc-dropdown>
        <alc-header-notifications slot="trigger" notifications="2"></alc-header-notifications>
        <div class="example">
          <p>
            O Alcance não define como exibir detalhes de notificações.
            Pode ser usando um dropdown, "Notificações" pode ser um link para uma outra página,
            ou outra forma adequada ao contexto de uso.
          </p>
        </div>
      </alc-dropdown>
    </div>
    <div slot="user">
      <alc-user-menu logout-url='/view/sair' name="Shin" registration-number="P_991311"
        img-src="https://avatars.githubusercontent.com/u/12748346?v=4">
        Frontend Developer
      </alc-user-menu>
    </div>
  </alc-header>

  <div class="alc-layout">
    <alc-nav-panel>
      <nav-vertical />
    </alc-nav-panel>

    <main class="container-fluid" id="main-content">
      <div class="px-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
