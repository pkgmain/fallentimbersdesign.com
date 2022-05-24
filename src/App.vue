<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="h-screen bg-white">
    <TheHeader />

    <main class="p-4 md:p-8">
      <RouterView />
    </main>
  </div>
</template>
