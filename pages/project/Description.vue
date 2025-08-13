<script setup lang="ts">
import stepItems from "~/composables/project/Steps";
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
    </div>
  </section>
</template>
