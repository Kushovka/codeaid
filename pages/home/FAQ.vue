<script setup lang="ts">
  import FAQItems from '~/composables/home/FAQItems'
  import { ref } from 'vue'

  const openIndex = ref<number | null>(null)

  function toggle(index: number) {
    openIndex.value = openIndex.value === index ? null : index
  }
</script>

<template>
  <section class="bg-white h-full">
    <div class="max-w-[1200px] mx-auto px-[20px]">
      <div class="flex flex-col sm:py-[84px] py-[60px] gap-[60px]">
        <!-- title -->
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <h1 class="text-[40px] text-black01 font-bold">FAQ</h1>
          <div class="w-[100px] h-[4px] bg-blue01" />
          <p class="text-[16px] font-normal text-black03 text-center">Часто задаваемые вопросы</p>
        </div>

        <!-- questions -->
        <div class="flex flex-col gap-[20px]">
          <div v-for="(FAQitem, index) in FAQItems" :key="index">
            <div
              @click="toggle(index)"
              class="bg-white01 py-[18px] rounded-[8px] px-[24px] flex items-center justify-between cursor-pointer">
              <span class="sm:text-[18px] text-black01 font-semibold w-[80%]">{{ FAQitem.text }}</span>
              <img
                class="w-[14px]"
                :src="openIndex === index ? '/images/homeFAQ/minus.svg' : '/images/homeFAQ/plus.svg'"
                alt="" />
            </div>
            <div
              v-if="openIndex === index"
              class="px-[24px] bg-white py-[18px] my-[12px] text-[16px] border-l-[5px] rounded-r-[12px] shadow-md border-purple02 text-black03">
              {{ FAQitem.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
