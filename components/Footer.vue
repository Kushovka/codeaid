<script setup lang="ts">
  import footerItems from '~/composables/FooterItems'
  import { Icon } from '@iconify/vue'

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<template>
  <footer class="bg-black04 flex flex-col">
    <div class="relative container mx-auto">
      <div @click="scrollToTop" class="absolute top-1/2 -translate-y-1/2 right-0 bg-white01/70 hover:bg-white01 transition-colors group duration-300 p-[14px] rounded-full cursor-pointer">
        <Icon icon="tabler:arrow-narrow-up" class="text-black02 group-hover:text-black01 transition-colors duration-300 animate-bounce" width="24" height="24" />
      </div>
      <div class="grid md:grid-cols-4 sm:grid-cols-2 py-[18px] px-[20px]">
        <div v-for="(footerItem, index) in footerItems" :key="index" class="flex flex-col gap-[8px] py-[48px]">
          <span class="text-[20px] text-white font-normal">{{ footerItem.title }}</span>

          <!-- containers1 -->
          <div v-if="footerItem.containers1">
            <p class="flex flex-col gap-[12px] text-[15px] text-gray01 font-normal w-[60%]">
              {{ footerItem.containers1.text1 }}
            </p>
          </div>

          <!-- containers2 -->
          <div v-if="footerItem.containers2">
            <ul>
              <li
                v-for="(item, idx) in footerItem.containers2"
                :key="idx"
                class="flex flex-col gap-[12px] text-[15px] text-gray01 font-normal">
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text1 }}</p>
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text2 }}</p>
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text3 }}</p>
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text4 }}</p>
              </li>
            </ul>
          </div>

          <!-- containers3 -->
          <div v-if="footerItem.containers3">
            <ul>
              <li
                v-for="(item, idx) in footerItem.containers3"
                :key="idx"
                class="flex flex-col gap-[12px] text-[15px] text-gray01 font-normal">
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text1 }}</p>
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text2 }}</p>
                <p class="hover:text-white transition-colors duration-300 cursor-pointer">{{ item.text3 }}</p>
              </li>
            </ul>
          </div>

          <!-- containers4 -->
          <div v-if="footerItem.containers4">
            <ul>
              <li
                v-for="(item, idx) in footerItem.containers4"
                :key="idx"
                class="flex flex-col gap-[12px] text-[15px] text-gray01 font-normal">
                <div class="flex items-center gap-[6px]">
                  <img :src="item.imgPath1" alt="" class="w-[16px] h-[16px]" />
                  <p>{{ item.text1 }}</p>
                </div>
                <div class="flex items-center gap-[6px]">
                  <img :src="item.imgPath2" alt="" class="w-[16px] h-[16px]" />
                  <p>{{ item.text2 }}</p>
                </div>
                <div class="flex items-center gap-[6px]">
                  <img :src="item.imgPath3" alt="" class="w-[16px] h-[16px]" />
                  <p>{{ item.text3 }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-gray03" />
    </div>
    <div class="flex items-center justify-center pb-[48px] pt-[33px]">
      <span class="text-gray03">© {{ new Date().getFullYear() }} codeaid. Все права защищены.</span>
    </div>
  </footer>
</template>
