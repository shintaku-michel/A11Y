<template>
  <div class="bg-black my-2 mr-4 h-full">
    <h2 class="text-xl font-bold text-white px-2 border-b pb-4">
      <slot name="title">
        {{ title }}
      </slot>
    </h2>

    <pre class="custom-style">
      <code ref="codeRef" :class="`language-${language}`"></code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { onMounted, ref, watch } from 'vue'

// Props
const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'html'
  },
  title: {
    type: String,
    default: 'Exemplo de código'
  }
})

// Referência do <code>
const codeRef = ref<HTMLElement | null>(null)

// Função que aplica o highlight
const applyHighlight = () => {
  if (codeRef.value) {
    codeRef.value.textContent = props.code
    hljs.highlightElement(codeRef.value)
  }
}

// Executa na montagem
onMounted(() => {
  applyHighlight()
})

// Observa mudanças em code ou language e reaplica
watch(() => [props.code, props.language], () => {
  applyHighlight()
})
</script>

<style scoped>
pre {
  display: block;
  font-family: monospace;
  unicode-bidi: isolate;
  white-space: pre;
}

pre.custom-style {
  padding: 0;
  background-color: #000000;
  overflow-x: auto;
  box-sizing: border-box;
  width: -webkit-fill-available;
  display: inline-flex;
}

.hljs {
  margin: 0 !important;
  padding: 0 !important;
  background: black;
}

pre code.hljs {
  display: block;
  overflow-x: auto;
  width: inherit;
}
</style>
