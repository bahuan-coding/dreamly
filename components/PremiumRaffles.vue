<template>
  <section class="py-20 bg-gray-950">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Sorteios Premium</h2>
          <p class="text-gray-400 max-w-xl">
            Participe dos nossos sorteios exclusivos e tenha a chance de ganhar experiências premium com os modelos mais desejados.
          </p>
        </div>
        <UButton
          to="/sorteios"
          variant="outline"
          color="white"
          class="hidden md:flex"
          trailing-icon="i-heroicons-arrow-right"
        >
          Ver Todos
        </UButton>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="raffle in raffles" :key="raffle.id">
          <UCard
            :ui="{
              background: 'bg-gray-900/60',
              border: 'border border-gray-800',
              ring: '',
              body: { padding: 'p-6' }
            }"
            class="transition-all duration-300 hover:border-accent-400"
          >
            <div class="flex flex-col md:flex-row gap-6">
              <div class="w-full md:w-1/3">
                <div class="relative aspect-square rounded-lg overflow-hidden">
                  <UImage
                    :src="raffle.image"
                    :alt="raffle.title"
                    class="object-cover w-full h-full"
                    width="300"
                    height="300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-3">
                    <UBadge 
                      color="accent" 
                      variant="solid"
                      class="font-medium"
                      size="lg"
                    >
                      R$ {{ raffle.ticketPrice }}
                    </UBadge>
                  </div>
                </div>
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-3">{{ raffle.title }}</h3>
                <p class="text-gray-400 mb-4">{{ raffle.description }}</p>
                
                <div class="space-y-4">
                  <div class="flex justify-between">
                    <span class="text-gray-400">Modelo:</span>
                    <span class="font-medium">{{ raffle.model }}</span>
                  </div>
                  
                  <div class="flex justify-between">
                    <span class="text-gray-400">Data do Sorteio:</span>
                    <span class="font-medium">{{ raffle.drawDate }}</span>
                  </div>
                  
                  <div class="flex justify-between">
                    <span class="text-gray-400">Tickets Disponíveis:</span>
                    <span class="font-medium">{{ raffle.ticketsLeft }}/{{ raffle.totalTickets }}</span>
                  </div>
                  
                  <UProgress 
                    :model-value="(raffle.totalTickets - raffle.ticketsLeft) / raffle.totalTickets * 100" 
                    color="accent"
                    :ui="{ track: { background: 'bg-gray-700' } }"
                  />
                  
                  <UButton
                    :to="`/sorteio/${raffle.id}`"
                    block
                    color="accent"
                    class="mt-4"
                  >
                    Comprar Ticket
                  </UButton>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
      
      <div class="mt-12 text-center md:hidden">
        <UButton
          to="/sorteios"
          variant="outline"
          color="white"
          trailing-icon="i-heroicons-arrow-right"
        >
          Ver Todos
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const raffles = [
  {
    id: 1,
    title: "Encontro Exclusivo com Juliana Mendes",
    description: "Ganhe um encontro virtual privado de 2 horas com a modelo mais requisitada da plataforma.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    model: "Juliana Mendes",
    drawDate: "30/05/2025",
    ticketPrice: "49,90",
    ticketsLeft: 32,
    totalTickets: 100
  },
  {
    id: 2,
    title: "Pacote Premium de Fotos da Luiza Costa",
    description: "O vencedor receberá um pacote com 50 fotos exclusivas da Luiza, um dos rostos mais populares do Dreamly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    model: "Luiza Costa",
    drawDate: "15/06/2025",
    ticketPrice: "29,90",
    ticketsLeft: 78,
    totalTickets: 200
  }
]
</script> 