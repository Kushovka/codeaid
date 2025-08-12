<script setup lang="ts">
import { ref } from "vue";
import servicesCard from "~/composables/services/ServicesCard";

const hoverStates = ref<boolean[]>(Array(servicesCard.length).fill(false));
</script>

<template>
  <section
    class="relative flex items-center w-full sm:min-h-[1050px] min-h-[900px] bg-home-hero bg-cover bg-center z-0"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-[#EFF6FF]/80 via-[#E0E7FF]/80 to-[#EFF6FF]/70 z-0"
    />
    <div
      class="relative z-10 container mx-auto flex flex-col md:px-[10px] px-[15px] mt-[140px] lg:gap-[60px] md:gap-[70px] gap-[80px] pb-[80px]"
    >
      <!-- title -->
      <div class="flex flex-col gap-[24px]">
        <h1
          class="lg:text-[60px] md:text-[50px] sm:text-[45px] text-[40px] font-bold text-black01 text-center"
        >
          Наши <span class="text-blue01">услуги</span>
        </h1>
        <div class="flex flex-col items-center justify-center gap-[16px]">
          <p
            class="md:text-[22px] sm:text-[20px] font-semibold text-black02 text-center"
          >
            ИТИС занимается разработкой цифровых сервисов для бизнеса
          </p>
          <p
            class="md:text-[20px] sm:text-[18px] font-normal text-black02 text-center md:w-[70%]"
          >
            Предоставляем выделенные команды разработки с сильными тимлидами,
            которые комплексно закрывают задачи по разработке: frontend,
            backend, DevOps, QA, системная аналитика. <br />
            Также, усиливаем существующие команды своими инженерами в формате
            аутстаффа
          </p>
        </div>
      </div>
      <!-- steps -->
      <div
        class="relative z-30 grid lg:grid-cols-3 md:grid-cols-2 gap-[40px] h-full"
      >
        <img
          src="/images/servicesHome/Character.png"
          class="absolute -top-20 right-0"
          alt=""
        />
        <div v-for="card in servicesCard" :key="card.number">
          <div
            class="bg-white rounded-[12px] flex flex-col items-start h-full gap-[50px] p-[24px] shadow-lg"
          >
            <div class="flex flex-col gap-[16px] items-start h-full">
              <div class="bg-gray02 rounded-full p-[12px]">
                <span class="text-[16px] text-white font-semibold">
                  <img :src="card.imgPath" alt="" />
                </span>
              </div>

              <div class="flex flex-col gap-[12px]">
                <span class="text-[20px] text-black01 font-semibold">{{
                  card.title
                }}</span>
                <p class="text-[16px] text-black03 font-normal">
                  {{ card.text }}
                </p>
              </div>
            </div>
            <button
              @mouseenter="hoverStates[card.number] = true"
              @mouseleave="hoverStates[card.number] = false"
              class="border-[3px] bg-blue01/90 hover:bg-blue01 transition-colors duration-300 rounded-[8px] py-[12px] sm:px-[24px] px-[12px] text-white font-semibold sm:text-[18px] whitespace-nowrap"
            >
              <Transition name="fade" mode="out-in">
                <span v-if="hoverStates[card.number]" key="hovered1"
                  >{ Заказать услугу }</span
                >
                <span v-else key="default1">Заказать услугу</span>
              </Transition>
            </button>
          </div>
        </div>
      </div>
      <div />
    </div>
  </section>
</template>
