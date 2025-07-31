<script setup>
  import { ref } from 'vue'

  const hoveredIndex = ref(false)
</script>

<template>
  <section class="bg-white01 h-full">
    <div class="max-w-[900px] mx-auto">
      <div class="flex flex-col sm:py-[84px] py-[60px] gap-[60px] relative px-[10px]">
        <!-- title -->
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <h1 class="sm:text-[40px] text-[30px] text-black01 font-bold">Связаться с нами</h1>
          <div class="w-[100px] h-[4px] bg-blue01" />
          <p class="text-[16px] font-normal text-black03 text-center">
            Готовы начать новый проект? Мы здесь, чтобы помочь вам воплотить ваши идеи в жизнь.
          </p>
        </div>
        <!-- contact form -->
        <div class="bg-white p-[40px] rounded-[12px] flex flex-col gap-[22px] relative">
          <div class="flex sm:flex-row flex-col justify-between gap-[20px]">
            <div class="flex flex-col w-full gap-[10px]">
              <span class="text-[16px] text-black02 font-semibold">Имя</span>
              <input
                type="text"
                placeholder="Ваше имя"
                class="border p-[17px] rounded-[8px] placeholder:text-[14px] placeholder:text-gray01 placeholder:font-normal" />
            </div>
            <div class="flex flex-col w-full gap-[10px]">
              <span class="text-[16px] text-black02 font-semibold">Телефон</span>
              <input
                type="tel"
                placeholder="Ваш телефон"
                class="border p-[17px] rounded-[8px] placeholder:text-[14px] placeholder:text-gray01 placeholder:font-normal" />
            </div>
          </div>
          <div class="flex flex-col w-full gap-[10px]">
            <span class="text-[16px] text-black02 font-semibold">Сообщение</span>
            <textarea
              placeholder="Напишите ваше сообщение..."
              class="border p-[17px] rounded-[8px] placeholder:text-[14px] placeholder:text-gray01 placeholder:font-normal h-[150px]"></textarea>
          </div>

          <button
            @mouseenter="hoveredIndex = true"
            @mouseleave="hoveredIndex = false"
            class="bg-blue01/90 hover:bg-blue01 transition-all duration-300 ease-in-out rounded-[8px] py-[12px] px-[24px] text-white font-semibold text-[18px]">
            <Transition name="fade" mode="out-in">
              <span v-if="hoveredIndex" key="hovered">< Отправить сообщение ></span>
              <span v-else key="default">Отправить сообщение</span>
            </Transition>
          </button>
        </div>
        <div class="absolute bottom-0 -left-[20%] lg:block hidden">
          <img src="/images/homeContact/chel1.png" class="" alt="" />
        </div>
        <div class="absolute bottom-0 -right-[22%] xl:block hidden">
          <img src="/images/homeContact/chel2.png" class="" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
