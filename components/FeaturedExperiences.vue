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
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    price: '199,90',
    model: {
      name: 'Julia Silva',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: 2,
    title: 'Ensaio Fotográfico Premium',
    description: 'Fotos exclusivas com temas e fantasias personalizadas.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    price: '349,90',
    model: {
      name: 'Amanda Costa',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    rating: 4.8,
    reviewCount: 95
  },
  {
    id: 3,
    title: 'Chat de Áudio Sensual',
    description: 'Conversa de áudio imersiva com sua modelo favorita.',
    image: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    price: '149,90',
    model: {
      name: 'Renata Lima',
      avatar: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    rating: 4.7,
    reviewCount: 83
  }
]
</script> 