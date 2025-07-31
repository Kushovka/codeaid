<script setup lang="ts">
  import heroDopItems from '~/composables/home/HeroDopItems'
  import { ref } from 'vue'

  const isHover1 = ref(false)
  const isHover2 = ref(false)
</script>

<template>
  <section class="relative flex items-center w-full sm:min-h-[1050px] min-h-[900px]  bg-home-hero bg-cover bg-center z-0">
    <div class="absolute inset-0 bg-gradient-to-t from-[#EFF6FF]/80 via-[#E0E7FF]/80 to-[#EFF6FF]/70 z-0" />
    <div class="relative z-10 container mx-auto flex lg:flex-row flex-col items-center justify-between px-[10px] mt-[90px]">
      <!-- left -->
      <div class="lg:w-1/2 w-full flex flex-col gap-[30px] mb-[40px]">
        <h1 class="text-black01 lg:text-[60px] text-[44px] font-bold sm:leading-[65px] leading-[50px]">
          Разрабатываем
          <span class="text-blue01">современные</span>
          цифровые продукты
        </h1>
        <p class="text-[20px] text-black02 font-normal leading-[28px]">
          Мы создаем надежные и масштабируемые веб-сайты, приложения и цифровые решения, которые помогают вашему бизнесу
          расти.
        </p>
        <div class="flex items-center gap-[20px]">
          <button
            @mouseenter="isHover1 = true"
            @mouseleave="isHover1 = false"
            class="border-[3px] bg-blue01/90 hover:bg-blue01 transition-colors duration-300 rounded-[8px] py-[12px] sm:px-[24px] px-[12px] text-white font-semibold sm:text-[18px] whitespace-nowrap">
            <Transition name="fade" mode="out-in">
              <span v-if="isHover1" key="hovered1">{ Заказать проект }</span>
              <span v-else key="default1">Заказать проект</span>
            </Transition>
          </button>

          <button
            @mouseenter="isHover2 = true"
            @mouseleave="isHover2 = false"
            class="border-[3px] border-blue01 transition-colors duration-300 rounded-[8px] py-[12px] sm:px-[24px] px-[12px] text-blue01 font-semibold sm:text-[18px] whitespace-nowrap">
            <Transition name="fade" mode="out-in">
              <span v-if="isHover2" key="hovered2">{ Наши работы }</span>
              <span v-else key="default2">Наши работы</span>
            </Transition>
          </button>
        </div>
      </div>
      <!-- rigth -->
      <div
        class="lg:w-1/2 md:w-[70%] sm:w-[80%] md:space-y-16 flex justify-end relative hover:-rotate-[3.8deg] transform transition-transform duration-300 cursor-pointer">
        <!-- ligth -->
        <div class="absolute bottom-0 left-0 w-[256px] h-[256px] rounded-full bg-purple01 opacity-60 blur-[150px]" />
        <div class="absolute top-0 right-0 w-[256px] h-[256px] rounded-full bg-blue03 opacity-60 blur-[150px]" />
        <img class="relative" src="/public/images/homeHero/img.png" alt="" />
      </div>
      <div />
    </div>
    <!-- bottom dop -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2 lg:flex hidden gap-[25px]">
      <div v-for="(heroDopItem, index) in heroDopItems" :key="index">
        <span class="text-[12px] font-normal text-gray01 font-sans">{{ heroDopItem.title }}</span>
      </div>
    </div>
  </section>
</template>
