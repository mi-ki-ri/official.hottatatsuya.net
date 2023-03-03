<script setup>
const atClick = (id) => {
  console.log(id);
  location.replace(`/#/article/${id}`);
};
</script>

<template>
  <footer
    class="footer footer-center p-10 text-primary bg-primary-content rounded"
    style="min-height: 25vh"
  >
    <div class="flex flex-wrap justify-around items-baseline">
      <RouterLink class="link link-hover" to="/">Top</RouterLink>
      <RouterLink class="link link-hover" to="/filter/news">News</RouterLink>
      <RouterLink class="link link-hover" to="/filter/release"
        >Releases</RouterLink
      >
      <RouterLink class="link link-hover" to="/filter/blog">Blog</RouterLink>
      <RouterLink class="link link-hover" to="/article/7c7zhp0mn8"
        >Contact</RouterLink
      >
      <RouterLink class="link link-hover" to="/article/ldezq8jcm7"
        >Biography</RouterLink
      >
    </div>
    <div class="w-1/2 container">
      <hr class="w-full border-secondary border border-solid" />
    </div>
    <div>
      <p>Copyright © 2023 - All right reserved by HOTTA Tatsuya</p>
    </div>
  </footer>
</template>

<style scoped></style>
