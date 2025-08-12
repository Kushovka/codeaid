<script setup lang="ts">
import navItems from "~/composables/NavItems";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const isScrolled = ref(false);
const isOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 shadow-md transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-white/50 backdrop-blur-md py-1 mt-1 rounded-[12px]'
        : 'bg-white'
    "
  >
    <div
      class="container mx-auto flex items-center justify-between py-[18px] sm:px-[30px] px-[14px]"
    >
      <NuxtLink to="/" class="cursor-pointer">
        <img src="/public/images/codeaid.svg" alt="" />
      </NuxtLink>
      <div
        class="lg:flex hidden items-center justify-center lg:gap-[40px] md:gap-[10px]"
      >
        <div v-for="(item, index) in navItems" :key="index">
          <NuxtLink
            :to="item.href"
            class="text-[16px] font-medium text-black03 cursor-pointer"
            :class="route.path === item.href ? 'text-blue01' : 'text-black03'"
            >{{ item.title }}</NuxtLink
          >
        </div>
      </div>
      <div class="flex items-center gap-[16px]">
        <button
          class="flex items-center sm:gap-[8px] gap-[3px] bg-blue01/90 hover:bg-blue01 transition-colors duration-300 rounded-[8px] sm:py-[12px] py-[10px] sm:px-[24px] px-[10px]"
        >
          <img src="/public/images/navItems/mobile.svg" alt="" />
          <span
            class="sm:text-[16px] font-semibold text-white whitespace-nowrap"
            >Заказать звонок</span
          >
        </button>
        <!-- mobile -->
        <div class="lg:hidden flex">
          <button @click="toggleMenu">
            <img
              v-if="!isOpen"
              src="/images/navItems/burger.svg"
              class="h-[16px]"
              alt=""
            />
            <img
              v-else
              src="/images/navItems/close.svg"
              class="h-[24px]"
              alt=""
            />
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="isOpen"
        class="lg:hidden fixed top-[70px] left-0 w-full bg-white/80 rounded-[12px] shadow-md z-40"
      >
        <div class="flex flex-col items-center gap-[20px] py-[20px]">
          <div v-for="(item, index) in navItems" :key="index">
            <NuxtLink
              :to="item.href"
              :class="route.path === item.href ? 'text-blue01' : 'text-black03'"
              class="text-[16px] font-medium text-black03 cursor-pointer"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
