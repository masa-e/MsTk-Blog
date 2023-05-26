<template>
  <div class="p-contact">
    <h1>お問い合わせ</h1>
    <form v-on:submit.prevent="submit">
      <div class="c-form-group">
        <div class="c-form-group__key">名前</div>
        <div class="c-form-group__val">
          <input
            type="text"
            name="name"
            class="c-input-text"
            v-model="contact.name"
          />
        </div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">性別</div>
        <div class="c-form-group__val">
          <label for="man">
            <input
              type="radio"
              name="gender"
              value="男性"
              id="man"
              class="c-input-radio"
              v-model="contact.gender"
            />
            男性
          </label>
          <label for="woman">
            <input
              type="radio"
              name="gender"
              value="女性"
              id="woman"
              class="c-input-radio"
              v-model="contact.gender"
            />
            女性
          </label>
        </div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">メールアドレス</div>
        <div class="c-form-group__val">
          <input
            type="email"
            name="mail"
            class="c-input-text"
            v-model="contact.mail"
          />
        </div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">お問い合わせ種別</div>
        <div class="c-form-group__val">
          <select class="c-select" name="type" v-model="contact.type">
            <option value="">選択してください</option>
            <option value="商品について">商品について</option>
            <option value="求人について">求人について</option>
            <option value="その他">その他</option>
          </select>
        </div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">お問い合わせ内容</div>
        <div class="c-form-group__val">
          <textarea
            name="body"
            class="c-textarea"
            v-model="contact.body"
          ></textarea>
        </div>
      </div>
      <div class="c-form-group">
        <div class="c-form-group__key">サイトを訪問した経緯</div>
        <div class="c-form-group__val">
          <label for="search">
            <input
              type="checkbox"
              name="route"
              value="検索"
              id="search"
              class="c-input-check"
              v-model="contact.route"
            />
            検索
          </label>
          <label for="sns">
            <input
              type="checkbox"
              name="route"
              value="SNS"
              id="sns"
              class="c-input-check"
              v-model="contact.route"
            />
            SNS
          </label>
          <label for="other">
            <input
              type="checkbox"
              name="route"
              value="紹介"
              id="other"
              class="c-input-check"
              v-model="contact.route"
            />
            紹介
          </label>
        </div>
      </div>
      <button type="submit" class="c-btn">確認</button>
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
        route: [],
      },
    }
  },
  created() {
    const getContactData = this.$store.getters['getContact'];
    this.contact.name = getContactData.name;
    this.contact.gender = getContactData.gender;
    this.contact.mail = getContactData.mail;
    this.contact.type = getContactData.type;
    this.contact.body = getContactData.body;
    this.contact.route = getContactData.route;
  },
  methods: {
    submit() {
      // storeに保存
      this.$store.dispatch(`addAction`, this.contact)
      // 確認画面に遷移
      this.$router.push('/contact/confirm/')
    },
  },
}
definePageMeta({
  layout: 'with-sidebar',
})
</script>
