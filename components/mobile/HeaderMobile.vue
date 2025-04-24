<template>
  <div class="lg:hidden">
    <UHeader class="bg-gray-900/80 backdrop-blur-sm border-gray-800 sticky top-0 z-50">
      <template #left>
        <NuxtLink to="/" class="font-bold text-xl text-white">
          Dreamly
        </NuxtLink>
      </template>

      <template #right>
        <UButton
          color="white"
          variant="ghost"
          icon="i-heroicons-bars-3"
          @click="isMenuOpen = !isMenuOpen"
        />
      </template>
    </UHeader>
    
    <!-- Menu mobile -->
    <USlideover
      v-model="isMenuOpen"
      :ui="{ background: 'bg-gray-900' }"
      side="right"
    >
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="font-bold text-xl">Menu</h2>
          <UButton
            icon="i-heroicons-x-mark"
            color="white"
            variant="ghost"
            @click="isMenuOpen = false"
          />
        </div>
        
        <nav class="space-y-1">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.to" 
            :to="item.to"
            class="flex items-center py-3 px-4 hover:bg-gray-800 rounded-lg text-white transition-colors"
            @click="isMenuOpen = false"
          >
            <UIcon :name="item.icon" class="mr-3" />
            {{ item.label }}
          </NuxtLink>
        </nav>
        
        <div class="mt-8 space-y-4">
          <UButton
            to="/login"
            block
            variant="outline"
            color="white"
            class="justify-start"
            icon="i-heroicons-user-circle"
          >
            Login
          </UButton>
          
          <UButton
            to="/registro"
            block
            color="accent"
            class="justify-start"
          >
            Cadastrar
          </UButton>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

const menuItems = [
  { 
    label: 'Experiências',
    to: '/experiencias',
    icon: 'i-heroicons-fire'
  },
  { 
    label: 'Sorteios Premium',
    to: '/sorteios',
    icon: 'i-heroicons-ticket'
  },
  { 
    label: 'Como Funciona',
    to: '/como-funciona',
    icon: 'i-heroicons-question-mark-circle'
  }
]
</script> 