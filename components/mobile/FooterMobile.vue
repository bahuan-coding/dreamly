<template>
  <div class="lg:hidden">
    <UFooter class="bg-gray-900 border-t border-gray-800">
      <template #left>
        <div class="w-full flex flex-col items-center gap-6 mb-8">
          <NuxtLink to="/" class="font-bold text-xl text-white">
            Dreamly
          </NuxtLink>
          <p class="text-gray-400 text-center max-w-sm">
            A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte.
          </p>
          <div class="flex gap-4">
            <UButton
              variant="ghost"
              color="white"
              icon="i-simple-icons-instagram"
              class="rounded-full h-10 w-10 p-0"
              aria-label="Instagram"
            />
            <UButton
              variant="ghost"
              color="white"
              icon="i-simple-icons-twitter"
              class="rounded-full h-10 w-10 p-0"
              aria-label="Twitter"
            />
            <UButton
              variant="ghost"
              color="white"
              icon="i-simple-icons-tiktok"
              class="rounded-full h-10 w-10 p-0"
              aria-label="TikTok"
            />
          </div>
        </div>
      </template>

      <template #right>
        <div class="grid grid-cols-2 gap-6 w-full">
          <div class="space-y-4">
            <h3 class="font-medium text-white">Plataforma</h3>
            <ul class="space-y-2">
              <li v-for="link in platformLinks" :key="link.to">
                <NuxtLink :to="link.to" class="text-gray-400 hover:text-white transition">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <h3 class="font-medium text-white">Legal</h3>
            <ul class="space-y-2">
              <li v-for="link in legalLinks" :key="link.to">
                <NuxtLink :to="link.to" class="text-gray-400 hover:text-white transition">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="space-y-4 col-span-2 mt-4">
            <h3 class="font-medium text-white">Contato</h3>
            <ul class="space-y-2 grid grid-cols-2">
              <li v-for="link in contactLinks" :key="link.to">
                <NuxtLink :to="link.to" class="text-gray-400 hover:text-white transition">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </template>
      
      <template #bottom>
        <div class="border-t border-gray-800 pt-6 mt-12 w-full flex flex-col items-center gap-4">
          <p class="text-sm text-gray-400 text-center">
            &copy; {{ new Date().getFullYear() }} Dreamly. Todos os direitos reservados.
          </p>
          <div class="flex gap-6">
            <NuxtLink to="/termos" class="text-sm text-gray-400 hover:text-white transition">
              Termos de Uso
            </NuxtLink>
            <NuxtLink to="/privacidade" class="text-sm text-gray-400 hover:text-white transition">
              Política de Privacidade
            </NuxtLink>
          </div>
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script setup>
const platformLinks = [
  { label: 'Experiências', to: '/experiencias' },
  { label: 'Sorteios Premium', to: '/sorteios' },
  { label: 'Como Funciona', to: '/como-funciona' },
  { label: 'Blog', to: '/blog' }
]

const legalLinks = [
  { label: 'Termos de Uso', to: '/termos' },
  { label: 'Política de Privacidade', to: '/privacidade' },
  { label: 'Cookies', to: '/cookies' }
]

const contactLinks = [
  { label: 'Suporte', to: '/suporte' },
  { label: 'Contato', to: '/contato' },
  { label: 'FAQ', to: '/faq' }
]
</script> 