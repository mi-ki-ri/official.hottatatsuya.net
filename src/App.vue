<script setup>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <div class="w-full overflow-x-auto overflow-y-scroll">
    <MyHeader />
    <main
      class="container mx-auto flex flex-wrap justify-around item-center"
      style="min-height: 55vh"
    >
      <RouterView />
    </main>
    <MyFooter />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
</style>
