<script setup>
import { onMounted, ref } from "vue";
import { createClient } from "microcms-js-sdk"; //ES6
import { useRoute } from "vue-router";
import { marked } from "marked";
const route = useRoute();

const articles = ref([]);

onMounted(() => {
  console.log(route.params.id);

  // Initialize Client SDK.
  const client = createClient({
    serviceDomain: "official-hotta-tatsuya", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
    apiKey: "3c5dvMoOuQjZ8ob2jxrfgcy2BEPC04tFUsDE",
  });
  client
    .get({
      endpoint: "article",
      contentId: route.params.id,
    })
    .then((res) => {
      console.log(res);
      if (!res.publish) return;
      const title = res.content.split("\n")[0].replace("# ", "");

      articles.value.push({
        id: res.id,
        title,
        content: res.content,
        publishedAt: res.publishedAt,
        section: res.section,
      });
    })
    .catch((err) => console.error(err));
});

const atClick = (id) => {
  console.log(id);
  location.replace(`/#/article/${id}`);
};
</script>
<template>
  <article
    v-for="article of articles"
    class="card w-full m-3 bg-base-100 shadow-xl"
  >
    <div class="card-body">
      <h2 class="card-title link link-hover" @click="atClick(article.id)">
        {{ article.title }}
        <small>
          {{ new Date(article.publishedAt).toLocaleDateString() }}
        </small>
      </h2>
      <hr class="border-gray-700" />
      <div v-html="marked.parse(article.content)"></div>
      <footer class="text-right">
        <a :href="'/#/filter/' + sec" v-for="sec of article.section">{{
          sec
        }}</a>
      </footer>
    </div>
  </article>
</template>
