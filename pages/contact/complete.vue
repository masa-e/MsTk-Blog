<template>
  <div class="container" id="app">
    <main class="main">
      <section class="block">
        <h1 class="block-title">お問い合わせ</h1>
        <div class="block-body">
          <p>送信完了しました！</p>
          <form v-on:submit.prevent="submit">
            <button type="submit" class="button">ホームに戻る</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  created() {
    const getContactData = this.$store.getters['getContact']
    if (!getContactData.flag) {
      this.$router.push('/contact/')
    }
  },
  methods: {
    submit() {
      // 送信後、storeに保存していたデータを破棄
      this.$store.dispatch('removeAction')
      // ホーム画面に遷移
      this.$router.push('/')
    },
  },
}
definePageMeta({
  layout: 'index',
})
</script>
