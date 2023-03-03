<script setup>
import { onMounted, ref, onUpdated } from "vue";
import { createClient } from "microcms-js-sdk"; //ES6
import { useRoute } from "vue-router";
const route = useRoute();

const articles = ref([]);
const filterId = ref("");

const upd = (id) => {
  console.log(id);

  let q = { limit: 999 };
  if (id !== "" && id !== undefined) {
    q = { limit: 999, filters: "section[contains]" + id };
  }

  console.log(q);

  // Initialize Client SDK.
  const client = createClient({
    serviceDomain: "official-hotta-tatsuya", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
    apiKey: "3c5dvMoOuQjZ8ob2jxrfgcy2BEPC04tFUsDE",
  });
  client
    .get({
      endpoint: "article",
      queries: q,
    })
    .then((res) => {
      console.log(res);
      for (const content of res.contents) {
        if (!content.publish) continue;
        const title = content.content.split("\n")[0].replace("# ", "");

        articles.value.push({
          id: content.id,
          title,
          content: content.content,
          publishedAt: content.publishedAt,
          section: content.section,
        });
      }
    })
    .catch((err) => console.error(err));
};

onUpdated(() => {
  if (filterId.value !== route.params.id) {
    filterId.value = route.params.id;
    articles.value.splice(0);
    upd(filterId.value);
  }
});

onMounted(() => {
  if (route.params.id === undefined) {
    filterId.value = "";
    upd(filterId.value);
  } else {
    filterId.value = route.params.id;
    upd(filterId.value);
  }
});

const atClick = (id) => {
  console.log(id);
  location.replace(`/#/article/${id}`);
};
</script>
<template>
  <article
    v-for="article of articles"
    class="card w-80 h-64 m-3 flex flex-col justify-center items-center bg-base-100 shadow-xl"
  >
    <div class="card-body flex flex-col justify-center items-stretch">
      <h2 class="card-title link link-hover" @click="atClick(article.id)">
        <span class="text-accent" style="text-shadow: 2px 2px rgb(0 0 0 / 0.1)"
          >&diamondsuit;</span
        >
        {{ article.title }}
        <small>
          {{ new Date(article.publishedAt).toLocaleDateString() }}
        </small>
      </h2>
      <div>
        {{ article.content.substr(0, 70) }}
        <a class="link continued" :href="'/#/article/' + article.id"
          >全文表示</a
        >
      </div>
      <footer class="text-right">
        <a :href="'/#/filter/' + sec" v-for="sec of article.section">{{
          sec
        }}</a>
      </footer>
    </div>
  </article>
</template>
