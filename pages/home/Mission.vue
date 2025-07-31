<template>
  <section class="container mx-auto h-full">
    <div class="flex flex-col sm:py-[84px] py-[60px] gap-[60px] px-[10px]">
      <!-- title -->
      <div class="flex flex-col items-center justify-center gap-[20px]">
        <h1 class="sm:text-[40px] text-[30px] text-black01 font-bold">Наша миссия</h1>
        <div class="w-[100px] h-[4px] bg-purple02" />
        <p class="text-[16px] font-normal text-black03 text-center lg:w-[35%] sm:w-[70%]">
          Мы стремимся превращать идеи в реальные цифровые продукты, которые меняют рынок и жизнь людей к лучшему.
        </p>
      </div>
      <div class="flex lg:flex-row flex-col gap-[40px] items-center justify-between">
        <!-- left -->
        <div class="flex items-center justify-center">
          <img src="/public/images/homeMission/img.png" alt="" />
        </div>

        <!-- right -->
        <div class="flex flex-col justify-end gap-[30px] lg:w-[60%]">
          <h2 class="sm:text-[28px] text-[18px] font-semibold text-black01">
            Создаем приложения с помощью инноваций и передовых технологий, применяя профессионализм и креативность
          </h2>
          <p class="sm:text-[18px] text-black03 font-normal sm:w-[65%]">
            Мы работаем с компаниями, чтобы найти их уникальную ценность и воплотить её в удобных, мощных и эффективных
            технологиях
          </p>
          <div class="flex flex-col gap-[12px]">
            <span>✔ Индивидуальный подход к каждому клиенту</span>
            <span>✔ Постоянное развитие и внедрение новых технологий</span>
            <span>✔ Фокус на качество и долгосрочные отношения</span>
          </div>
          <button
            class="bg-blue01/90 hover:bg-blue01 transition-colors duration-300 rounded-[8px] py-[12px] px-[24px] text-white font-semibold text-[18px] lg:self-start">
            Готовые проекты
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
