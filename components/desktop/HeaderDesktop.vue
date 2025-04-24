<template>
  <div class="hidden lg:block">
    <UHeader class="bg-gray-900/80 backdrop-blur-sm border-gray-800 sticky top-0 z-50">
      <template #left>
        <NuxtLink to="/" class="font-bold text-xl text-white">
          Dreamly
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-6">
          <UButton
            to="/experiencias"
            variant="ghost"
            color="white"
          >
            Experiências
          </UButton>
          
          <UButton
            to="/sorteios"
            variant="ghost"
            color="white"
          >
            Sorteios Premium
          </UButton>
          
          <UButton
            to="/como-funciona"
            variant="ghost"
            color="white"
          >
            Como Funciona
          </UButton>
          
          <UDivider vertical />
          
          <UButton
            to="/login"
            variant="ghost"
            color="white"
            icon="i-heroicons-user-circle"
          >
            Login
          </UButton>
          
          <UButton
            to="/registro"
            color="accent"
            :ui="{ rounded: 'rounded-full' }"
          >
            Cadastrar
          </UButton>
        </div>
      </template>
    </UHeader>
  </div>
</template>

<script setup>
// Componente específico para desktop
</script> 