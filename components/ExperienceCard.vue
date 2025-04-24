<template>
  <UCard
    :ui="{
      background: 'bg-gray-900/60',
      border: 'border border-gray-800',
      ring: '',
      divide: 'divide-gray-800',
      body: { base: 'h-full flex flex-col' }
    }"
    class="transition-all duration-300 hover:border-gray-700 h-full"
  >
    <template #header>
      <div class="relative overflow-hidden rounded-t-lg aspect-[3/2]">
        <UImage
          :src="experience.image"
          :alt="experience.title"
          class="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          width="400"
          height="300"
        />
        <div class="absolute top-0 right-0 p-2">
          <UBadge color="accent" variant="solid" class="font-medium">
            R$ {{ experience.price }}
          </UBadge>
        </div>
      </div>
    </template>
    
    <UButton
      :to="`/experiencia/${experience.id}`"
      color="white"
      variant="link"
      class="text-lg font-semibold hover:text-accent-400 mt-4 mb-2 text-left"
    >
      {{ experience.title }}
    </UButton>
    
    <p class="text-gray-400 text-sm mb-4">{{ experience.description }}</p>
    
    <div class="mt-auto">
      <div class="flex items-center justify-between pt-4 border-t border-gray-800">
        <div class="flex items-center gap-3">
          <UAvatar 
            :src="experience.model.avatar" 
            :alt="experience.model.name"
            size="sm"
          />
          <span class="text-sm text-gray-300">{{ experience.model.name }}</span>
        </div>
        
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-star" class="text-yellow-500 w-4 h-4" />
          <span class="text-sm text-gray-300">{{ experience.rating }} ({{ experience.reviewCount }})</span>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script> 