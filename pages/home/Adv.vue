<script setup lang="ts">
  import advItems from '~/composables/home/AdvItems'
</script>

<template>
  <section class="bg-white01 h-full">
    <div class="max-w-[1050px] mx-auto px-[20px]">
      <div class="flex flex-col sm:py-[84px] py-[60px] gap-[60px]">
        <!-- title -->
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <h1 class="sm:text-[40px] text-[30px] text-black01 font-bold">Наши преимущества</h1>
          <div class="w-[100px] h-[4px] bg-purple02" />
          <p class="text-[16px] font-normal text-black03 text-center">Почему стоит выбрать именно нас ?</p>
        </div>

        <!-- items -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-[46px] h-full">
          <div v-for="(advItem, index) in advItems" :key="index">
            <div class="bg-white p-[24px] rounded-[12px] h-full flex flex-col items-center gap-[20px] shadow-md hover:scale-105  transition-all duration-300 cursor-pointer hover:shadow-lg">
              <div class="bg-gray02 p-[20px] rounded-full">
                <img :src="advItem.imgPath" alt="" />
              </div>
              <div class="flex flex-col items-center gsp-[10px]">
                <span class="text-[20px] text-black01 font-semibold">{{ advItem.title }}</span>
                <p class="text-[16px] text-black03 font-normal text-center">{{ advItem.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
