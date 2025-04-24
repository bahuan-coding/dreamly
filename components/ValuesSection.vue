<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Por Que Escolher a Dreamly</h2>
        <p class="text-gray-400">
          Na Dreamly, transformamos fantasias em experiências reais. Nossa plataforma foi construída com base em valores que priorizam segurança, qualidade e discrição.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard
          v-for="(value, index) in values"
          :key="index"
          :ui="{
            base: 'transition-all duration-300',
            background: 'bg-gray-800/50',
            border: 'border border-gray-700',
            ring: '',
            body: { padding: 'p-6' }
          }"
          class="hover:border-accent-400 hover:translate-y-[-5px]"
        >
          <div class="flex gap-4">
            <div class="rounded-full p-3 bg-accent-500/10 text-accent-400">
              <UIcon :name="value.icon" class="w-6 h-6" />
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
              <p class="text-gray-400">{{ value.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: 'Segurança',
    icon: 'i-heroicons-shield-check',
    description: 'Verificação rigorosa de perfis, pagamentos seguros e proteção de dados confidenciais.'
  },
  {
    title: 'Discrição',
    icon: 'i-heroicons-lock-closed',
    description: 'Política de privacidade rígida, interações discretas e ambiente seguro para todos os usuários.'
  },
  {
    title: 'Qualidade',
    icon: 'i-heroicons-star',
    description: 'Curadoria de conteúdo, modelos verificados e experiências premium cuidadosamente selecionadas.'
  },
  {
    title: 'Controle',
    icon: 'i-heroicons-adjustments-horizontal',
    description: 'Os modelos têm controle total sobre seus serviços, preços e disponibilidade.'
  },
  {
    title: 'Personalização',
    icon: 'i-heroicons-sparkles',
    description: 'Experiências personalizadas para atender às suas fantasias e desejos específicos.'
  },
  {
    title: 'Suporte',
    icon: 'i-heroicons-chat-bubble-left-right',
    description: 'Atendimento ao cliente 24/7 para resolver quaisquer problemas ou dúvidas rapidamente.'
  }
]
</script> 