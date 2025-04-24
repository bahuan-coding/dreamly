<template>
  <section class="py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-accent-900 to-accent-600 opacity-90">
      <UImage
        src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        class="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        width="1920"
        height="1080"
      />
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para Criar sua Própria Experiência?
          </h2>
          <p class="text-white/80 text-lg mb-8">
            Seja você um modelo profissional ou um cliente em busca de experiências premium, a Dreamly oferece a plataforma ideal para conectar desejos e realidade.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <UButton
              to="/cadastro-modelo"
              color="white"
              size="lg"
              variant="solid"
              trailing-icon="i-heroicons-arrow-right"
              :ui="{ rounded: 'rounded-full' }"
            >
              Cadastrar como Modelo
            </UButton>
            
            <UButton
              to="/explorar"
              color="white"
              size="lg"
              variant="outline"
              trailing-icon="i-heroicons-arrow-right"
              :ui="{ rounded: 'rounded-full' }"
            >
              Explorar Experiências
            </UButton>
          </div>
        </div>
        
        <div class="w-full md:w-auto">
          <UCard
            :ui="{
              background: 'bg-white/10 backdrop-blur-sm',
              border: 'border border-white/20',
              ring: '',
              body: { padding: 'p-8' }
            }"
            class="w-full md:w-80"
          >
            <h3 class="text-xl font-bold mb-4 text-white">Destaques Dreamly</h3>
            <ul class="space-y-4">
              <li v-for="(highlight, index) in highlights" :key="index" class="flex gap-3 items-start">
                <UIcon :name="highlight.icon" class="text-white mt-0.5 flex-shrink-0" />
                <span class="text-white/80">{{ highlight.text }}</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    icon: 'i-heroicons-banknotes',
    text: 'Ganhos de até R$10.000 mensais para modelos'
  },
  {
    icon: 'i-heroicons-lock-closed',
    text: 'Ambiente 100% seguro e discreto'
  },
  {
    icon: 'i-heroicons-sparkles',
    text: 'Experiências personalizadas e exclusivas'
  },
  {
    icon: 'i-heroicons-user-group',
    text: 'Mais de 5.000 usuários satisfeitos'
  }
]
</script> 