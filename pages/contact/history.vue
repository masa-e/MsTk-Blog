<template>
  <div class="container" id="app">
    <main class="main">
      <section class="block">
        <h1 class="block-title">お問い合わせ履歴</h1>
        <div class="block-body" v-if="data">
          <ul v-for="contact in data.data">
            <div class="form-group">
              <label for="name">お名前</label>
              <li>{{ contact.name }}</li>
            </div>
            <div class="form-group">
              <label for="gender">性別</label>
              <li>{{ contact.gender }}</li>
            </div>
            <div class="form-group">
              <label for="mail">メールアドレス</label>
              <li>{{ contact.mail }}</li>
            </div>
            <div class="form-group">
              <label for="type">お問い合わせ種別</label>
              <li>{{ contact.types }}</li>
            </div>
            <div class="form-group">
              <label for="body">お問い合わせ内容</label>
              <li>{{ contact.body }}</li>
            </div>
          </ul>
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
  data() {
    return {
      data: null,
    }
  },
  created() {
    const response = useFetch('/api/v1/contacts/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    })
    this.data = response.data
  },
  methods: {
    submit() {
      // ホーム画面に遷移
      this.$router.push('/')
    },
  },
}
definePageMeta({
  layout: 'index',
})
</script>
