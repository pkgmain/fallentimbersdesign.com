<script setup>
import { defineProps } from "vue";

defineProps({ images: { type: Array, default: () => [] } });
</script>

<template>
  <div
    class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <div
      v-for="(image, i) in images"
      :key="i"
      class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
  </div>
</template>
