<script setup>
import ContactMenu from "@/components/ContactMenu.vue";

const tabs = [
  { name: "Home", to: { name: "home" } },
  { name: "Benches", to: { name: "benches" } },
  { name: "Signs", to: { name: "signs" } },
];
</script>

<template>
  <header class="relative z-10 bg-white px-8">
    <nav
      class="-mb-px flex justify-center space-x-4 md:space-x-8"
      aria-label="Tabs"
    >
      <router-link
        v-for="tab in tabs"
        :key="tab.name"
        :to="tab.to"
        class="focus-visible:outline-black"
        :class="[
          $route.name === tab.to.name
            ? 'border-black text-black'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
        ]"
        :aria-current="tab.current ? 'page' : undefined"
      >
        {{ tab.name }}
      </router-link>

      <ContactMenu
        class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      />
    </nav>
  </header>
</template>
