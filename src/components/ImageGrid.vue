<script setup>
defineProps({ images: { type: Array, default: () => [] } });
</script>

<template>
  <div
    class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <div
      v-for="(image, i) in images"
      :key="i"
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
  </div>
</template>
