<script setup>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <div class="w-full overflow-x-auto overflow-y-scroll">
    <MyHeader />
    <main
      class="container mx-auto p-2 flex flex-wrap justify-around item-center"
      style="min-height: 55vh"
    >
      <transition>
        <keep-alive>
          <RouterView />
        </keep-alive>
      </transition>
    </main>
    <MyFooter />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

a.link.continued {
  color: hsl(var(--s));
}
</style>
