<template>
  <div class="container" id="app">
    <main class="main">
      <section class="block">
        <h1 class="block-title">お問い合わせ</h1>
        <div class="block-body">
          <form v-on:submit.prevent="submit">
            <fieldset>
              <div class="form-group">
                <label for="name">お名前</label>
                <div>{{ contact.name }}</div>
              </div>
              <div class="form-group">
                <label for="gender">性別</label>
                <div>{{ contact.gender }}</div>
              </div>
              <div class="form-group">
                <label for="mail">メールアドレス</label>
                <div>{{ contact.mail }}</div>
              </div>
              <div class="form-group">
                <label for="type">お問い合わせ種別</label>
                <div>{{ contact.type }}</div>
              </div>
              <div class="form-group">
                <label for="body">お問い合わせ内容</label>
                <div>{{ contact.body }}</div>
              </div>
              <div class="form-group">
                <label for="route">サイトを訪問した経緯</label>
                <div>
                  <span v-for="item in contact.route">{{ item }}</span>
                </div>
              </div>
              <button type="submit" class="button">送信</button>
              <NuxtLink to="/contact/">修正</NuxtLink>
            </fieldset>
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
      contact: {
        name: '',
        gender: null,
        mail: '',
        type: '',
        body: '',
        route: [],
      },
    }
  },
  created() {
    const getContactData = this.$store.getters['getContact']
    if (!getContactData.flag) {
      this.$router.push('/contact/')
    }
    this.contact.name = getContactData.name
    this.contact.gender = getContactData.gender
    this.contact.mail = getContactData.mail
    this.contact.type = getContactData.type
    this.contact.body = getContactData.body
    this.contact.route = getContactData.route
  },
  methods: {
    submit() {
      const msgBody = {
        name: this.contact.name,
        gender: this.contact.gender,
        mail: this.contact.mail,
        types: this.contact.type,
        body: this.contact.body,
      }

      useFetch('/api/v1/contacts/', {
        method: 'POST',
        body: JSON.stringify(msgBody),
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
      })

      // 確認画面に遷移
      this.$router.push('/contact/complete/')
    },
  },
}
definePageMeta({
  layout: 'index',
})
</script>
