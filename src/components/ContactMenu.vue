<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import instagramLogo from "@/assets/img/instagram_logo.svg";
import facebookLogo from "@/assets/img/facebook_logo.svg";
import IconChevronDown from "@/components/icons/IconChevronDown.vue";
import IconChevronUp from "@/components/icons/IconChevronUp.vue";
import IconMail from "@/components/icons/IconMail.vue";
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="inline-flex justify-center">
      Contact
      <IconChevronDown class="hidden md:block" />
      <IconChevronUp class="md:hidden" />
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="menu-items">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="https://www.instagram.com/fallentimbersdesign"
              target="_blank"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block flex px-4 py-2 align-middle text-sm',
              ]"
            >
              <img
                :src="instagramLogo"
                class="mr-2 w-5"
                alt="instagram logo"
                aria-hidden="true"
              />

              <div>Instagram</div>
            </a>
          </MenuItem>

          <MenuItem v-slot="{ active }">
            <a
              href="https://www.facebook.com/fallentimbersdesign"
              target="_blank"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'flex px-4 py-2 text-sm',
              ]"
            >
              <img
                :src="facebookLogo"
                class="mr-2 w-5"
                alt="facebook logo"
                aria-hidden="true"
              />

              <div>Facebook</div>
            </a>
          </MenuItem>

          <MenuItem v-slot="{ active }">
            <a
              href="mailto:fallentimbersdesign@gmail.com"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'flex px-4 py-2 text-sm',
              ]"
            >
              <IconMail class="mr-2 block" />
              <div>fallentimbersdesign@gmail.com</div>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.menu-items {
  @apply absolute right-0 -mt-36 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:mt-2;
}
</style>
