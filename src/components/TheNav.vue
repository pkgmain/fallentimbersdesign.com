<script setup>
import ContactMenu from "@/components/ContactMenu.vue";

const tabs = [
  { name: "Home", to: { name: "home" } },
  { name: "Benches", to: { name: "benches" } },
  { name: "Signs", to: { name: "signs" } },
];
</script>

<template>
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
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
      ]"
      :aria-current="tab.current ? 'page' : undefined"
    >
      {{ tab.name }}
    </router-link>

    <ContactMenu class="contact-menu" />
  </nav>
</template>

<style scoped>
.contact-menu {
  @apply whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700;
}
</style>
