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
      class="relative z-10 max-w-[960px] mx-auto flex flex-col md:px-[10px] px-[15px] mt-[140px] lg:gap-[60px] md:gap-[70px] gap-[80px]"
    >
      <div class="p-[32px] shadow-lg rounded-[16px] flex flex-col gap-[32px]">
        <!-- title -->
        <div class="flex flex-col items-start justify-center gap-[24px]">
          <div class="bg-gray02 py-[4px] px-[14px] rounded-full">
            <span class="text-[12px] text-blue02 font-normal"
              >Веб-разработка</span
            >
          </div>
          <h1
            class="lg:text-[50px] md:text-[40px] sm:text-[35px] text-[30px] font-semibold text-black01"
          >
            E-commerce платформа для крупного ритейлера
          </h1>
          <div class="flex flex-col items-start justify-center gap-[16px]">
            <p
              class="md:text-[20px] sm:text-[18px] font-normal text-black03 w-[80%]"
            >
              Платформа для масштабируемого интернет-магазина с поддержкой
              высокой нагрузки и интеграцией с ERP системами.
            </p>
            <div class="flex items-center justify-center gap-[12px]">
              <span class="text-[14px] text-gray03 font-semibold"
                >15 марта 2025</span
              >
              <div class="w-[7px] h-[7px] rounded-full bg-gray03"></div>
              <span class="text-[14px] text-gray03 font-normal"
                >Сделано за 56 дней</span
              >
            </div>
          </div>
        </div>
        <!-- img -->
        <div class="flex flex-col gap-[24px]">
          <div class="flex items-center justify-center gap-[32px] w-full">
            <div>
              <img
                src="/images/projectHero/img1.png"
                class="rounded-[16px]"
                alt=""
              />
            </div>
            <div>
              <img
                src="/images/projectHero/img2.png"
                class="rounded-[16px]"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center justify-center gap-[32px] w-full">
            <div>
              <img
                src="/images/projectHero/img3.png"
                class="rounded-[16px]"
                alt=""
              />
            </div>
            <div>
              <img
                src="/images/projectHero/img4.png"
                class="rounded-[16px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  </section>
</template>
