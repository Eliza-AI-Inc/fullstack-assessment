<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
// import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = computed(() => 
  [
  { name: 'Main', href: '/', current: true},
  ]
)
</script>
<template>
  <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
  <Popover
    v-slot="{ open }"
    as="template"
  >
    <header :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/">
                <img
                  class="block h-12 w-auto"
                  src="@/assets/logo-circle.png"
                  alt="Eliza"
                >
              </NuxtLink>
            </div>
          </div>
        </div>
        <nav
          class="hidden lg:flex lg:space-x-8 lg:py-2"
          aria-label="Global"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium']"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>

      <PopoverPanel
        as="nav"
        class="lg:hidden"
        aria-label="Global"
      >
        <div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :aria-current="item.current ? 'page' : undefined"
            :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md py-2 px-3 text-base font-medium']"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </PopoverPanel>
    </header>
  </Popover>
</template>