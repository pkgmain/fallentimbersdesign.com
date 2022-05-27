<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
</script>

<template>
  <div class="h-screen bg-white">
    <TheHeader class="hidden md:block" data-test="desktop-nav" />

    <main class="p-4 md:p-8">
      <RouterView />
    </main>

    <TheNav
      class="fixed bottom-0 left-0 w-full bg-white pb-2 md:hidden"
      data-test="mobile-nav"
    />
  </div>
</template>
