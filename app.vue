<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Importa o CSS global
import '~/assets/css/main.css'
</script>

<style>
/* Reset adicional e estilos globais */
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
}

#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style> 