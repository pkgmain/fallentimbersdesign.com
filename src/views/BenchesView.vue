<script setup>
import { ref } from "vue";
import ImageGrid from "../components/ImageGrid.vue";

const modules = import.meta.glob("../assets/img/benches/*.jpg");
const images = ref([]);

const alt = "";

for (const m in modules) {
  modules[m]().then(() => {
    const src = new URL(m, import.meta.url);
    images.value.push({ src, alt });
  });
}
</script>

<template>
  <h1
    class="mx-auto text-7xl text-center"
    style="font-family: 'MissConfidential', serif"
  >
    Benches
  </h1>

  <hr class="my-10" />

  <ImageGrid :images="images" />
</template>
