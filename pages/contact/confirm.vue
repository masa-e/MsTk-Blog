<template>
  <div class="p-contact">
    <h1>お問い合わせ</h1>
    <form v-on:submit.prevent="submit">
      <div class="c-form-group">
        <div class="c-form-group__key">名前</div>
        <div class="c-form-group__val">{{contact.name}}</div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">性別</div>
        <div class="c-form-group__val">{{contact.gender}}</div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">メールアドレス</div>
        <div class="c-form-group__val">{{contact.mail}}</div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">お問い合わせ種別</div>
        <div class="c-form-group__val">{{contact.type}}</div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">お問い合わせ内容</div>
        <div class="c-form-group__val">{{contact.body}}</div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">サイトを訪問した経緯</div>
        <div class="c-form-group__val">
          <span v-for="item in contact.route">{{item}}</span>
        </div>
      </div>
      <button type="submit" class="c-btn">送信</button>
      <NuxtLink to="/contact/">修正</NuxtLink>
    </form>
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
        route: []
      }
    }
  },
  created() {
    const getContactData = this.$store.getters['getContact'];
    if(!getContactData.flag) {
      this.$router.push('/contact/')
    }
    this.contact.name = getContactData.name;
    this.contact.gender = getContactData.gender;
    this.contact.mail = getContactData.mail;
    this.contact.type = getContactData.type;
    this.contact.body = getContactData.body;
    this.contact.route = getContactData.route;
  },
  methods: {
    submit() {
      // 送信後、storeに保存していたデータを破棄
      this.$store.dispatch('removeAction');
      // 確認画面に遷移
      this.$router.push('/contact/complete/');
    }
  }
}
definePageMeta({
  layout: 'with-sidebar',
})
</script>