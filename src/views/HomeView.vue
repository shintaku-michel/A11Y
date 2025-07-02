<script setup lang="ts">
</script>

<template>
  <div class="my-8">
    <h1>Pilares de acessibilidade</h1>
    <p class="mb-10">
      Os pilares de acessibilidade reúnem práticas e ferramentas essenciais para tornar a web mais inclusiva
      e utilizável por todas as pessoas. Eles englobam a verificação automática; a navegação por teclado e os leitores
      de
      tela. Juntos, esses pilares ajudam a construir interfaces mais justas, eficientes e em conformidade
      com as diretrizes de acessibilidade como a <a href="https://www.w3.org/TR/WCAG21/" target="_blank"
        class="alc-link">WCAG</a>, <a href="http://www.abntcolecao.com.br/mpf/default.aspx?T=9BC37A821F0D"
        target="_blank" class="alc-link">NBR 17225</a> e <a href="https://emag.governoeletronico.gov.br/"
        target="_blank" class="alc-link">eMAG</a>.</p>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 items-stretch mt-4">
    <div class="alc-card">
      <div class="alc-card__header">
        Verificação automática
      </div>
      <div class="alc-card__body">
        <p>
          São ferramentas que escaneiam sites ou sistemas para encontrar problemas de acessibilidade, como
          textos ou elementos com cores sem contraste, imagens sem descrição ou campos sem rótulo, entre outros. Elas
          ajudam a identificar e corrigir esses problemas de forma mais rápida, mas não conseguem detectar 100% das
          falhas, sendo ainda indispensáveis os testes manuais.
        </p>
        <p class="mt-4">
          Os mais utilizados são:
          <a href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=pt"
            target="_blank" class="alc-link"> Axe DevTools
          </a>,
          <a href="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt"
            target="_blank" class="alc-link"> Lighthouse
          </a>e
          <a href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=pt"
            target="_blank" class="alc-link"> WAVE
          </a>.
        </p>
      </div>
    </div>

    <div class="alc-card">
      <div class="alc-card__header">
        Navegação por teclado
      </div>
      <div class="alc-card__body">
        <p>É o método utilizado por pessoas que não podem ou preferem não usar o mouse, incluindo pessoas com
          deficiências
          motoras, visuais ou com limitações temporárias.</p>
        <p>
          Garantir uma navegação eficiente por teclado é fundamental para acessibilidade e está entre
          os requisitos das diretrizes WCAG.
        </p>

        <a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G202" target="_blank"
          class="alc-link flex gap-2 mt-4">
          <img src="/src/assets/icons/g-new-window.svg" alt="" class="h-6 w-6">
          Saiba mais sobre navegação por teclado
        </a>
      </div>
    </div>

    <div class="alc-card">
      <div class="alc-card__header">
        Leitores de tela
      </div>
      <div class="alc-card__body">
        <p>São tecnologias assistivas utilizadas por pessoas cegas ou com baixa visão para navegar, compreender e
          interagir com conteúdos digitais.</p>

        <ul class="ul-custom mt-2">
          <li>NVDA (Windows, gratuito)</li>
          <li>JAWS (Windows, pago)</li>
          <li>VoiceOver (macOS, iOS, gratuito)</li>
          <li>TalkBack (Android)</li>
        </ul>

        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/at.html" target="_blank"
          class="alc-link flex gap-2 mt-4">
          <img src="/src/assets/icons/g-new-window.svg" alt="" class="h-6 w-6">
          Saiba mais sobre leitores de tela
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ul-custom {
  list-style-type: disc;
  /* bolinha sólida */
  padding-left: 20px;
  /* espaço para a bolinha aparecer */
}
</style>
