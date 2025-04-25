<template>
  <section class="py-20 bg-gray-950">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Experiências em Destaque</h2>
          <p class="text-gray-400 max-w-xl">
            Explore experiências exclusivas criadas pelos modelos mais requisitados da plataforma.
          </p>
        </div>
        <UButton
          to="/experiencias"
          variant="outline"
          color="white"
          class="hidden md:flex"
          trailing-icon="i-heroicons-arrow-right"
        >
          Ver Todas
        </UButton>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExperienceCard 
          v-for="experience in featuredExperiences" 
          :key="experience.id"
          :experience="experience" 
        />
      </div>
      
      <div class="mt-12 text-center md:hidden">
        <UButton
          to="/experiencias"
          variant="outline"
          color="white"
          trailing-icon="i-heroicons-arrow-right"
        >
          Ver Todas
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
// Mock data for featured experiences
const featuredExperiences = [
  {
    id: 1,
    title: 'Encontro Virtual Íntimo',
    description: 'Uma conversa exclusiva e personalizada para suas fantasias.',
    image: '/images/models/model1.jpg',
    price: '199,90',
    model: {
      name: 'Julia Silva',
      avatar: '/images/models/model1.jpg'
    },
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: 2,
    title: 'Ensaio Fotográfico Premium',
    description: 'Fotos exclusivas com temas e fantasias personalizadas.',
    image: '/images/models/model2.jpg',
    price: '349,90',
    model: {
      name: 'Amanda Costa',
      avatar: '/images/models/model2.jpg'
    },
    rating: 4.8,
    reviewCount: 95
  },
  {
    id: 3,
    title: 'Chat de Áudio Sensual',
    description: 'Conversa de áudio imersiva com sua modelo favorita.',
    image: '/images/models/model3.jpg',
    price: '149,90',
    model: {
      name: 'Renata Lima',
      avatar: '/images/models/model3.jpg'
    },
    rating: 4.7,
    reviewCount: 83
  }
]
</script> 