<template>
  <section class="relative min-h-screen flex items-center hidden lg:flex">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-0">
      <UImage
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        class="absolute inset-0 object-cover w-full h-full mix-blend-overlay"
        width="1920"
        height="1080"
        loading="eager"
      />
    </div>
    
    <div class="container mx-auto px-4 relative z-10 mt-20">
      <div class="max-w-2xl">
        <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span class="text-accent-400">Sua Fantasia,</span><br>
          Suas Regras
        </h1>
        
        <p class="text-xl text-gray-300 mb-8 max-w-lg">
          A plataforma onde modelos profissionais criam experiências premium,
          e você pode fazer parte.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <UButton
            color="accent"
            size="xl"
            variant="solid"
            class="font-medium"
            :ui="{ rounded: 'rounded-full' }"
            trailing-icon="i-heroicons-arrow-right"
          >
            Criar Experiência
          </UButton>
          
          <UButton
            color="white"
            size="xl"
            variant="outline"
            class="font-medium"
            :ui="{ rounded: 'rounded-full' }"
            trailing-icon="i-heroicons-arrow-right"
          >
            Explorar
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template> 