<script setup lang="ts">
  import projectItems from '~/composables/home/projectItems'
</script>

<template>
  <section class="container mx-auto h-full relative">
    <div class="flex flex-col items-center sm:py-[84px] py-[60px] gap-[60px] relative">
      <div class="absolute bottom-0 -right-40 xl:block hidden">
        <img src="/public/images/homeProjects/chel.png" class="overflow-hidden" alt="" />
      </div>
      <!-- title -->
      <div class="flex flex-col items-center justify-center gap-[20px]">
        <h1 class="sm:text-[40px] text-[32px] text-black01 font-bold">Наши проекты</h1>
        <div class="w-[100px] h-[4px] bg-purple02" />
        <p class="text-[16px] font-normal text-black03 text-center">Посмотрите на некоторые из наших недавних работ</p>
      </div>

      <!-- projects -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-[40px] h-full">
        <div v-for="(projectItem, index) in projectItems" :key="index">
          <div class="shadow-md rounded-[12px] h-full max-w-[360px] transition-all duration-300 hover:shadow-lg cursor-pointer">
            <img :src="projectItem.imgPath" class="w-full rounded-t-[12px]" alt="" />
            <div class="flex flex-col p-[24px] gap-[20px]">
              <div class="flex flex-col gap-[12px]">
                <span class="text-[20px] text-black01 font-semibold">{{ projectItem.title }}</span>
                <p class="text-[16px] text-black03 font-normal">{{ projectItem.text }}</p>
              </div>
              <div class="flex gap-[8px]">
                <div v-for="(container, cIndex) in projectItem.containers" :key="cIndex" class="flex">
                  <div class="bg-gray02 py-[4px] px-[12px] rounded-full">
                    <p class="text-[12px] text-purple03 font-normal">{{ container.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
