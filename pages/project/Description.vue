<script setup lang="ts">
import devItems from "~/composables/project/Dev";
import metricItems from "~/composables/project/Metrics";
import stepItems from "~/composables/project/Steps";
import techItems from "~/composables/project/Tech";
</script>

<template>
  <section class="max-w-[960px] mx-auto px-[15px] pb-[80px]">
    <div class="flex flex-col gap-[50px]">
      <!-- block 1 -->
      <div class="flex flex-col gap-[12px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Задача</h1>
        <p class="text-[16px] text-black01 font-normal">
          Заказчик нуждался в решении, которое сможет обрабатывать до 1 млн
          пользователей в день, быть полностью кастомизируемым и легко
          интегрироваться с существующими CRM и складскими системами.
        </p>
      </div>
      <!-- block 2 -->
      <div class="flex flex-col gap-[12px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Решение</h1>
        <p class="text-[16px] text-black01 font-normal">
          Мы создали платформу на базе React + Node.js с использованием
          микросервисной архитектуры, PostgreSQL и Kubernetes. Внедрили гибкую
          систему управления товарами и автоматизированный расчет цен.
        </p>
      </div>
      <!-- block 3 -->
      <div class="flex flex-col gap-[16px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Этапы реализации</h1>
        <div class="flex flex-col gap-[24px]">
          <div v-for="(step, idx) in stepItems" :key="idx" class="">
            <div class="border-l-[5px] border-blue01 px-[20px]">
              <h1 class="text-[16px] text-black01 font-bold">
                {{ step.title }}
              </h1>
              <p class="text-[16px] text-black03 font-normal">
                {{ step.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- block 4 -->
      <div class="flex flex-col gap-[24px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Ключевые метрики</h1>
        <div class="flex flex-col gap-[24px]">
          <div v-for="(item, idx) in metricItems" :key="idx">
            <div class="flex flex-col gap-[8px]">
              <div class="flex items-center justify-between">
                <span class="text-[16px] text-black01 font-normal">{{
                  item.text
                }}</span>
                <span class="text-[16px] text-purple02 font-semibold">{{
                  item.cent
                }}</span>
              </div>
              <div class="relative w-full h-[10px] rounded-full bg-white02">
                <div
                  :class="[
                    'absolute',
                    'top-0',
                    'left-0',
                    'h-full',
                    'bg-gradient-to-r',
                    'to-purple04',
                    'from-blue01',
                    'rounded-full',
                    idx === 0 ? 'w-[60%]' : '',
                    idx === 1 ? 'w-[75%]' : '',
                    idx === 2 ? 'w-[90%]' : '',
                    idx === 3 ? 'w-[45%]' : '',
                  ]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- block 5 -->
      <div class="flex flex-col gap-[16px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Технологии</h1>
        <div class="flex gap-[20px]">
          <div v-for="(item, idx) in techItems" :key="idx">
            <span class="text-[14px] text-black03 font-normal">{{
              item.text
            }}</span>
          </div>
        </div>
      </div>
      <!-- block 6 -->
      <div class="flex flex-col gap-[16px]">
        <h1 class="text-[24px] text-blue01 font-semibold">
          Кто работал над проектом
        </h1>
        <div class="flex items-center justify-between">
          <div v-for="(item, idx) in devItems" :key="idx">
            <div class="flex flex-col gap-[4px]">
              <span class="text-[16px] text-black01 font-semibold">{{
                item.name
              }}</span>
              <span class="text-[14px] text-black03 font-normal">{{
                item.prof
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- block 7 -->
      <div class="flex flex-col gap-[16px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Результат</h1>
        <div
          class="p-[24px] bg-white01 rounded-[12px] border-l-[3px] border-blue01"
        >
          <p class="text-[16px] text-black02 font-normal">
            Платформа запущена и уже обрабатывает более 800 тысяч запросов в
            день. Скорость загрузки страниц улучшена на 60%, отказ от морально
            устаревшей системы завершен.
          </p>
        </div>
      </div>
      <!-- block 8 -->
      <div class="flex flex-col gap-[16px]">
        <h1 class="text-[24px] text-blue01 font-semibold">Как это работает?</h1>
        <div class="relative p-[32px] bg-white shadow-md rounded-[16px]">
          <img
            src="/images/projectDecs/img1.png"
            class="rounded-[16px] shadow-xl"
            alt=""
          />
          <!-- <div
            class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-[36px] bg-white/70 rounded-full"
          >
            <div
              class="w-12 h-12 rounded-[8px] bg-blue01"
              style="clip-path: polygon(0% 0%, 100% 50%, 0% 100%)"
            ></div>
          </div> -->
        </div>
      </div>
      <!-- block 9 -->
      <div class="flex flex-col gap-[24px] items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-[16px]">
          <h1 class="text-[24px] text-black01 font-bold">
            Хочешь такой же продукт?
          </h1>
          <p class="text-[16px] text-black03 font-normal">
            Мы можем создать аналогичное решение под ваши цели.
          </p>
        </div>
        <button
          class="px-[20px] py-[10px] rounded-[8px] bg-blue01 text-[16px] text-white font-semibold"
        >
          Заказать проект
        </button>
      </div>
    </div>
  </section>
</template>
