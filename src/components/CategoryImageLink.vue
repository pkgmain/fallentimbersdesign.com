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
    class="relative flex h-96 w-80 flex-col overflow-hidden rounded-lg p-6 shadow-lg hover:opacity-75"
  >
    <span aria-hidden="true" class="absolute inset-0">
      <img
        :src="src"
        :alt="name"
        class="h-full w-full object-cover object-center"
      />
    </span>

    <span
      class="relative mt-auto text-center text-6xl text-black"
      style="font-family: 'MissConfidential', serif"
      >{{ name }}</span
    >
  </a>
</template>
