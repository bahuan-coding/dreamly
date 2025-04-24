<template>
  <div v-if="showVerification">
    <UModal v-model="isOpen" :ui="{ background: 'bg-gray-900' }" :prevent-close="true">
      <UCard :ui="{
        background: 'bg-gray-900',
        border: 'border border-gray-800',
        ring: '',
        divide: 'divide-gray-800',
        body: { padding: 'p-6' }
      }">
        <template #header>
          <div class="flex justify-center mb-4">
            <h2 class="text-2xl font-bold text-white">Verificação de Idade</h2>
          </div>
        </template>
        
        <div class="text-center space-y-6">
          <UIcon name="i-heroicons-exclamation-triangle" class="text-accent-400 w-16 h-16 mx-auto" />
          
          <div class="space-y-3">
            <p class="text-lg font-medium">Conteúdo para maiores de 18 anos</p>
            <p class="text-gray-400">
              O Dreamly contém conteúdo sensível destinado apenas a adultos. Ao continuar, você confirma que tem pelo menos 18 anos de idade.
            </p>
          </div>
          
          <div class="flex flex-col gap-3 mt-8">
            <UButton
              size="lg"
              color="accent"
              block
              @click="confirmAge"
            >
              Tenho 18 anos ou mais
            </UButton>
            
            <UButton
              size="lg"
              color="white"
              variant="ghost"
              block
              @click="rejectAge"
            >
              Sair do site
            </UButton>
          </div>
          
          <p class="text-xs text-gray-500 mt-4">
            Ao acessar este site, você concorda com nossos <NuxtLink to="/termos" class="text-accent-400 hover:underline">Termos de Uso</NuxtLink> e <NuxtLink to="/privacidade" class="text-accent-400 hover:underline">Política de Privacidade</NuxtLink>.
          </p>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(true)
const showVerification = ref(false)

// Check if age has been verified previously
const checkAgeVerification = () => {
  const verified = localStorage.getItem('age-verified')
  if (!verified) {
    showVerification.value = true
    isOpen.value = true
  }
}

// Confirm age and save to localStorage
const confirmAge = () => {
  localStorage.setItem('age-verified', 'true')
  isOpen.value = false
  showVerification.value = false
}

// Redirect to external site if age requirements not met
const rejectAge = () => {
  window.location.href = 'https://www.google.com'
}

onMounted(() => {
  checkAgeVerification()
})
</script> 