<script setup>
import logoUrl from "@/assets/img/ft_logo.svg";
import charmUrl from "@/assets/img/charm_logo.png";
import img1Url from "@/assets/img/benches/bench_charcoal_floral.jpg";
import img3Url from "@/assets/img/signs/sign_botanical.jpg";
import EventCard from "@/components/EventCard.vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import CategoryImageLink from "@/components/CategoryImageLink.vue";
import CustomOrderCard from "@/components/CustomOrderCard.vue";

// BREAKPOINTS
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smaller("sm");
</script>

<template>
  <div class="flex flex-row flex-wrap-reverse gap-8">
    <div class="basis-full lg:basis-1/6">
      <div class="max-w-xs mx-auto mb-16">
        <EventCard :img-url="charmUrl" />
      </div>

      <div class="max-w-xs mx-auto">
        <CustomOrderCard />
      </div>
    </div>

    <div class="basis-full lg:basis-2/3">
      <div class="max-w-xl mx-auto my-12">
        <img :src="logoUrl" alt="" />
      </div>

      <div class="mt-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 sm:gap-x-8 md:gap-x-16"
        >
          <CategoryImageLink
            name="Benches"
            href="/benches"
            :src="img1Url"
            :class="sm ? 'justify-self-center' : 'justify-self-end'"
          />
          <CategoryImageLink
            name="Signs"
            href="/signs"
            :src="img3Url"
            :class="sm ? 'justify-self-center' : 'justify-self-start'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
