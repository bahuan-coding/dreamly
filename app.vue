<template>
  <div class="dreamly-app">
    <AgeVerification />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Import global CSS
import './assets/css/main.css'
import AgeVerification from '~/components/AgeVerification.vue'
</script>

<style>
.dreamly-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

html {
  scroll-behavior: smooth;
}
</style> 