<script setup>
defineProps({
  name: { type: String, required: true },
  src: { type: String, required: true },
  href: { type: String, required: true },
});
</script>

<template>
  <a
    :href="href"
    class="relative w-80 h-96 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 shadow-lg"
  >
    <span aria-hidden="true" class="absolute inset-0">
      <img
        :src="src"
        :alt="name"
        class="w-full h-full object-center object-cover"
      />
    </span>

    <span
      class="relative mt-auto text-center text-7xl text-black"
      style="font-family: 'MissConfidential', serif"
      >{{ name }}</span
    >
  </a>
</template>
