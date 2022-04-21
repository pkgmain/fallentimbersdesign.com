<script setup>
defineProps({ imgUrl: { type: String, required: true } });
</script>

<script>
export default {
  name: "EventCard",
};
</script>

<template>
  <h1
    class="text-center text-5xl mb-4"
    style="font-family: 'MissConfidential', serif"
  >
    Events
  </h1>

  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden border">
    <img class="w-full p-2" :src="imgUrl" alt="" />

    <div class="p-6">
      <p class="text-sm font-medium text-cyan-600">
        <a
          href="https://www.charmatthefarm.com/"
          target="_blank"
          class="hover:underline"
        >
          Website
        </a>
      </p>

      <div>
        <p class="text-xl font-semibold text-gray-900">
          Charm at the Farm - Vintage Market
        </p>

        <ul class="list-disc">
          <li class="text-base text-gray-500">June 10 4pm - 8pm</li>
          <li class="text-base text-gray-500">June 11 9am - 4pm</li>
          <li class="text-base text-gray-500">June 12 10am - 3pm</li>
        </ul>
      </div>
    </div>
  </div>
</template>
