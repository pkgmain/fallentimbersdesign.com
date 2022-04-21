<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="bg-white h-screen">
    <TheHeader />

    <main class="p-4 md:p-8">
      <RouterView />
    </main>
  </div>
</template>
