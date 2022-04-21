<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import instagramLogo from "@/assets/img/instagram_logo.svg";
import facebookLogo from "@/assets/img/facebook_logo.svg";
import IconChevronDown from "@/components/icons/IconChevronDown.vue";
import IconMail from "@/components/icons/IconMail.vue";
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex justify-center">
        Contact
        <IconChevronDown />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="https://www.instagram.com/fallentimbersdesign"
              target="_blank"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm flex align-middle',
              ]"
            >
              <img
                :src="instagramLogo"
                class="w-5 mr-2"
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
                class="w-5 mr-2"
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
              <IconMail class="block mr-2" />
              <div>fallentimbersdesign@gmail.com</div>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
