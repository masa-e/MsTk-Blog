<template>
  <div class="container" id="app">
    <main class="main">
      <section class="block">
        <h1 class="block-title">お問い合わせ</h1>
        <div class="block-body">
          <p>送信完了しました！</p>
          <NuxtLink to="/">ホームに戻る</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
export default {}
definePageMeta({
  layout: 'index',
})
</script>
