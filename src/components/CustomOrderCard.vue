<script setup></script>

<script>
export default {
  name: "CustomOrderCard",
};
</script>

<template>
  <h1
    class="text-center text-5xl mb-4"
    style="font-family: 'MissConfidential', serif"
  >
    Custom Order
  </h1>

  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden border">
    <div class="p-6 text-center">
      <div>
        <p class="text-xl font-semibold text-gray-900">
          Interested in a custom sign?
        </p>
      </div>

      <div class="my-5">Send us an email with your idea!</div>

      <div>
        <p class="text-sm font-medium text-cyan-600">
          <a href="mailto:fallentimbersdesign@gmail.com" class="hover:underline"
            >fallentimbersdesign@gmail.com</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
