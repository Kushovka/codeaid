<script setup lang="ts">
import stepsItems from "~/composables/home/StepsItems";

</script>

<template>
  <section class="bg-white01 h-full">
    <div class="relative max-w-[1200px] mx-auto px-[20px]">
      <div class="flex flex-col sm:py-[84px] py-[60px] gap-[60px]">
        <!-- title -->
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <h1 class="sm:text-[40px] text-[30px] text-black01 font-bold">
            Этапы разработки
          </h1>
          <div class="w-[100px] h-[4px] bg-blue01" />
          <p class="text-[16px] font-normal text-black03 text-center">
            Как мы работаем? Все просто и прозрачно
          </p>
        </div>
        <!-- steps -->
        <div
          class="relative z-30 grid lg:grid-cols-3 md:grid-cols-2 gap-[40px] h-full"
        >
          <div
            v-for="(stepsItem) in stepsItems"
            :key="stepsItem.number"
            :class="stepsItem.number === 10 ? 'lg:col-start-3' : ''"
          >
            <div
              :class="[
                'bg-white',
                'rounded-[12px]',
                'flex',
                'items-start',
                'h-full',
                'gap-[24px]',
                stepsItem.number === 10 ? 'p-[22px]' : 'p-[24px]',
              ]"
            >
              <div
                :class="[
                  'bg-blue01',
                  'rounded-full',
                  stepsItem.number === 10
                    ? ['px-[16px]', 'py-[13px]']
                    : ['px-[20px]', 'py-[13px]'],
                ]"
              >
                <span class="text-[16px] text-white font-semibold">{{
                  stepsItem.number
                }}</span>
              </div>
              <div class="flex flex-col gap-[12px]">
                <span class="text-[20px] text-black01 font-semibold">{{
                  stepsItem.title
                }}</span>
                <p class="text-[16px] text-black03 font-normal">
                  {{ stepsItem.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:absolute z-30 bottom-0 lg:right-[50%] lg:block md:hidden items-center justify-center flex lg:translate-x-[50%]"
        >
          <img src="/images/homeSteps/chely.png" alt="" />
        </div>
      </div>
      <div class="absolute top-1/2 -translate-y-[35%] xl:block hidden">
        <img
          src="/images/homeSteps/vector.svg"
          style="transform: scale(1.35)"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
