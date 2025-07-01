<script setup lang="ts">
import { AlcNav } from 'alcance-vue-library';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <alc-nav>
      <span data-alc-label>
        Menu
      </span>
      <ul>
        <li>
          <RouterLink to="/" class="link-navVertical">Página inicial</RouterLink>
        </li>
        <li>
          <RouterLink to="/view/acessibilidade-digital" class="link-navVertical">Acessibilidade Digital</RouterLink>
        </li>
      </ul>
    </alc-nav>
  </div>
</template>

<style scoped>
.link-navVertical {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #07648d;
}

.link-navVertical:hover {
  color: #000000;
}
</style>