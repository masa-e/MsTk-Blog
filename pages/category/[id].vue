<template>
  <Article :data="data" />
  <div v-if="data.totalCount === 0">ブログコンテンツがありません</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index',
})

// const { params } = useRoute()
// const data = await client
//     .getList<Blog>({
//       endpoint: 'blogs',
//       queries: { filters: `category[equals]${params}` },
//     })
//     .catch((err) => console.error(err))

const { params } = useRoute()
const { data: data } = await useFetch('/api/categoryFilter', {
  params: params,
})
</script>
