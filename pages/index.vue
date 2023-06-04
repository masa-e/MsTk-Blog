<template>
  <Article :data="data" />
</template>

<script setup lang="ts">
import { Blog } from '~~/types/blog'

definePageMeta({
  layout: 'index',
})

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: 'blogs',
})
</script>
