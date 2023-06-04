<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk'
import { Blog } from '~~/types/blog'

definePageMeta({
  layout: 'index',
})

const route = useRoute()
const query = String(route.query.q)
const queries: MicroCMSQueries = {
  q: query,
  orders: '-publishedAt',
}
console.log(queries)

const { data: postList_data } = await useFetch('/api/postList', {
  params: queries,
})

// const { posts } = await useMicroCMSGetList<Blog>({
//   endpoint: 'blogs',
// })

// queryが変化した場合にページをリロード
watch(
  () => route.query,
  () => location.reload()
)
</script>

<template>
  <div class="wrapper">
    <layoutsAsideSearchArea :keyword="query" />
    <div class="results">
      <div v-if="postList_data.contents">
        <Article :data="postList_data" />
      </div>
      <div v-if="postList_data.contents.length == 0">
        <h1 class="no-result">お探しの記事は見つかりませんでした。</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding-top: 112px;
  position: relative;
  width: 960px;
  margin: 0 auto 0;
}

.results {
  margin-top: 3rem;
}

.no-result {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 30px;
}

@media (max-width: 1024px) {
  .wrapper {
    max-width: 600px;
    position: relative;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
