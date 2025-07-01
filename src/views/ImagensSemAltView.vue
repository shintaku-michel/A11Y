<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
    <div class="my-8">
        <h1 class="text-2xl font-bold">3. Imagens sem texto alternativo</h1>
        <p>O atributo alt (texto alternativo) fornece uma descrição textual da imagem para leitores de tela e
            navegadores que não podem exibir imagens. Quando omitido ou mal utilizado, quebra a experiência para
            usuários com deficiência visual, impactando a acessibilidade e a conformidade com a regras da WCAG 2.2
            conforme as referências abaixo.
        </p>

        <div class="mt-4">
            <h2 class="text-xl font-bold">Links de apoio</h2>
            <ul class="flex flex-wrap gap-x-4 mb-4">
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/informative/" target="_blank">
                        1) Imagens informativas
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/decorative/" target="_blank">
                        2) Imagens decorativas (W3C)
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/functional/" target="_blank">
                        3) Imagens funcionais
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/textual/" target="_blank">
                        4) Imagens de textos
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/complex/" target="_blank">
                        5) Imagens complexas
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/complex/" target="_blank">
                        6) Imagens de mapas
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/tips/" target="_blank">
                        7) Dicas de uso
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/tutorials/images/decision-tree/" target="_blank">
                        8) Árvore de decisão alt em imagens
                    </a>
                </li>
            </ul>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
            <div class="flex flex-col">
                <CodeHighlight language="html" :code="`
            <p><img src='phone.png' alt=''> 0123 456 7890</p>
            <p><img src='fax.png' alt=''> 0123 456 7891</p>
            <p>
                <img src='dog.jpg' alt=''>
                Cães-guia fora de serviço costumam usar uma campainha.
                Seu toque ajuda o dono cego a rastrear a localização do cão.
            </p>
            <p>
                <img src='sleepingdog.jpg' alt='Cachorrinho dormindo'>
                <strong>O cachorrinho adormecido</strong>
            </p>
            <div>
                <img src='header_bg.png' alt='Background do topo do site'>
            </div>
            `">
                    <template #title>
                        <div class="flex flex-row items-center gap-2">
                            <img src="/assets/icons/g-close.svg" alt="" class="h-6 w-6">
                            Errado
                        </div>
                    </template>
                </CodeHighlight>

                <div class="mt-2">
                    <RouterLink to="/example/alt-image-error" class="alc-button inline-block">
                        Testar código
                    </RouterLink>
                </div>
            </div>


            <div class="flex flex-col">
                <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
            <!-- Imagens informativas -->
            <p><img src='phone.png' alt='Telefone:'> 0123 456 7890</p>
            <p><img src='fax.png' alt='Fax:'> 0123 456 7891</p>
            <p>
                <img src='dog.jpg' alt='Cachorro com um sino preso à coleira'>
                Cães-guia fora de serviço costumam usar uma campainha.
                Seu toque ajuda o dono cego a rastrear a localização do cão.
            </p>
            <!-- Imagens decorativas -->
            <p>
                <img src='sleepingdog.jpg' alt=''>
                <strong>O cachorrinho adormecido</strong>
            </p>
            <div>
                <img src='header_bg.png' alt=''>
            </div>
            `">
                    <template #title>
                        <div class="flex flex-row items-center gap-2">
                            <img src="/assets/icons/g-check.svg" alt="" class="h-6 w-6">
                            Certo
                        </div>
                    </template>
                </CodeHighlight>

                <div class="mt-2">
                    <RouterLink to="/example/alt-image-good" class="alc-button inline-block">
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
