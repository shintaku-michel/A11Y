<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

const minutosInput = ref<number>(0)
const tempoRestante = ref<number>(0)
const finalizado = ref<boolean>(false)
const inputRef = ref<HTMLInputElement | null>(null)
const liveMessage = ref<string>('') // para leitores de tela

let intervalo: ReturnType<typeof setInterval> | null = null

const minutosFormatados = computed(() =>
  String(Math.floor(tempoRestante.value / 60)).padStart(2, '0')
)

const segundosFormatados = computed(() =>
  String(tempoRestante.value % 60).padStart(2, '0')
)

function iniciarCronometro(): void {
  if (intervalo) clearInterval(intervalo)

  tempoRestante.value = minutosInput.value * 60
  finalizado.value = false

  liveMessage.value = `Cronômetro iniciado: ${tempoRestante.value} segundos`

  intervalo = setInterval(() => {
    if (tempoRestante.value > 0) {
      tempoRestante.value--

      // Só anuncia se ainda houver tempo após decrementar
      if (tempoRestante.value > 0 && tempoRestante.value % 10 === 0) {
        liveMessage.value = `Faltam ${tempoRestante.value} segundos`
      }
    } else {
      clearInterval(intervalo!)
      finalizado.value = true
      liveMessage.value = 'Tempo esgotado'
    }
  }, 1000)
}

function zerarCronometro(): void {
  if (intervalo) clearInterval(intervalo)

  tempoRestante.value = 0
  minutosInput.value = 0
  finalizado.value = false

  liveMessage.value = 'Cronômetro zerado'

  // Opcional: focar novamente no input
  inputRef.value?.focus()
}

onBeforeUnmount(() => {
  if (intervalo) clearInterval(intervalo)
})
</script>

<template>
  <div class="sr-only" aria-live="polite">{{ liveMessage }}</div>

  <div class="flex flex-col justify-end overflow-hidden">
    <div class="bg-gray-100 border-amber-500">
      <h2 class="px-4 mb-2 text-2xl">Cronômetro</h2>
      <div class="flex flex-row px-4 gap-4 items-end mb-8 border-t border-blue-500 pt-8">
        <alc-field label="Minutos" aria-label="Incluir minutos">
          <input name="minutos" type="number" v-model.number="minutosInput" min="0" class="border p-1 rounded w-20"
            ref="inputRef" />
        </alc-field>
        <button @click="iniciarCronometro" class="alc-button h-10 w-full" aria-label="Iniciar cronômetro">
          <span>Iniciar</span>
        </button>
        <button @click="zerarCronometro" class="alc-button alc-button--secondary h-10 w-full"
          aria-label="zerar cronômetro">
          <span>Zerar</span>
        </button>
        <button @click="sairCronometro" class="alc-button h-10 w-full" aria-label="Sair cronômetro">
          <span>Sair</span>
        </button>
      </div>

      <div
        class="border mt-4 mx-4 p-24 mb-4 text-9xl font-mono text-center h-full flex items-center justify-center rounded"
        :class="{ 'text-red-700': finalizado }">
        {{ minutosFormatados }}:{{ segundosFormatados }}
      </div>

      <div v-if="finalizado" class="text-center text-red-700 font-semibold mt-2">
        Tempo esgotado
      </div>
    </div>
  </div>
</template>

<style scoped>
.alc-link-custom {
  text-decoration: none;
}
</style>
