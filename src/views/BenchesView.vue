<script setup>
import { ref } from "vue";
import ImageGrid from "../components/ImageGrid.vue";

const modules = import.meta.globEager("../assets/img/benches/*.jpg");
const images = ref([]);

const alt = "";

for (const m in modules) {
  const src = modules[m].default;
  images.value.push({ src, alt });
}
</script>

<template>
  <h1
    class="mx-auto text-center text-7xl"
    style="font-family: 'MissConfidential', serif"
  >
    Benches
  </h1>

  <hr class="my-10" />

  <ImageGrid :images="images" />
</template>
