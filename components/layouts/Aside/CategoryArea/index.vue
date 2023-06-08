<script setup lang="ts">

definePageMeta({
  layout: 'index',
})

const { data: categories } = await useFetch('/api/category')
</script>

<template>
  <div>
    <h1 class="pageTitle">カテゴリー</h1>
    <ul v-if="categories?.contents">
      <li class="list" v-for="category in categories?.contents" :key="category.id">
        <NuxtLink
          :to="`/category/${category.id}`"
          class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6"
        >
          <div>
            {{ category.name }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>