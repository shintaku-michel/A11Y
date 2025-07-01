<script setup lang="ts">
import CodeHighlight from '@/components/CodeHighlight.vue';
import { ref } from 'vue';
const mostrarCodigo = ref(false);
</script>

<template>
    <div class="my-8">
        <h1 class="text-2xl font-bold">4. Foco não visível</h1>
        <p>
            Em muitos sites ou sistemas, ao navegar usando o teclado (Tecla Tab), o foco do teclado é movido entre os
            elementos interativos (como links, botões e campos de formulário), mas nenhum indicativo visual aparece na
            tela
            para mostrar onde o foco está. Qual é o problemas: Quebra e confusão no fluxo de navegação, impede o uso
            completo da aplicação e é uma barreira maior para usuários com deficiência.
        </p>

        <div class="mt-4">
            <h2 class="text-xl font-bold">Links de apoio</h2>
            <ul class="flex flex-wrap gap-x-4 mb-4">
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html"
                        target="_blank">
                        1) 2.4.7 – Foco Visível (AA)
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance"
                        target="_blank">
                        2) 2.4.11 – Aparência do Foco (mínima) (AA) (novo na WCAG 2.2)
                    </a>
                </li>
                <li>
                    <a class="alc-link" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance"
                        target="_blank">
                        3) 2.4.12 – Aparência do Foco (avançado) (AAA)
                    </a>
                </li>
            </ul>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 mb-8">
            <div class="flex flex-col">
                <CodeHighlight language="html" :code="`
        <!-- HTML link, button e input -->
        <a href='#'
            class='text-[#0d7ea2] hover:text-[#074b69]
            focus:outline-none focus:outline-offset-2'>Link personalizado
        </a>
        <button class='bg-[#0d7ea2] text-white rounded hover:bg-[#074b69] 
            px-4 py-2 focus:outline-none focus:outline-offset-2'>
            Botão personalizado
        </button>
        <label id='l-name' for='fn'>First name:</label>
        <div>
            <input type='text' name='fn' class='border border-[#ccc] p-2 rounded
                w-[300px]hover:border-[#0d7ea2] focus:outline-none focus:ring-0
                focus:border-transparent' placeholder='Digite seu primeiro nome' 
                id='i-name' aria-labelledby='l-name' />
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
                    <RouterLink to="/example/foco-nao-visivel-error" class="alc-button inline-block">
                        Testar código
                    </RouterLink>
                </div>
            </div>

            <div class="flex flex-col">
                <CodeHighlight language="html" :class="{ 'blur-code': !mostrarCodigo }" :code="`
        <!-- HTML link, button e input -->
        <a href='#'
            class='text-[#0d7ea2] hover:text-[#074b69] underline
            focus:outline focus:outline-offset-2'>Link personalizado
        </a>
        <button class='bg-[#0d7ea2] text-white rounded hover:bg-[#074b69] 
            px-4 py-2 focus:outline focus:outline-offset-2'>
            Botão personalizado
        </button>
        <label id='l-name' for='fn'>First name:</label>
        <div>
            <input type='text' name='fn' class='border border-[#ccc] p-2 rounded
                w-[300px]hover:border-[#0d7ea2] focus:outline focus:ring-0
                focus:border-transparent' placeholder='Digite seu primeiro nome' 
                id='i-name' aria-labelledby='l-name' />
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
                    <RouterLink to="/example/foco-nao-visivel-good" class="alc-button inline-block">
                        Testar código
                    </RouterLink>
                    <button class="alc-button alc-button--secondary ml-2" @click="mostrarCodigo = !mostrarCodigo">
                        {{ mostrarCodigo ? 'Ocultar código' : 'Mostrar código' }}
                    </button>
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
