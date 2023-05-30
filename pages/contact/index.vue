<template>
  <div class="container" id="app">
    <main class="main">
      <section class="block">
        <h1 class="block-title">お問い合わせ</h1>
        <div class="block-body">
          <form v-on:submit.prevent="validate">
            <fieldset>
              <div class="form-group">
                <label for="name">お名前<span class="badge">必須</span></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="contact.name"
                />
                <div class="errors">
                  {{ errors.name[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="gender">性別<span class="badge">必須</span></label>
                <label for="man">
                  <input
                    type="radio"
                    name="gender"
                    value="男性"
                    id="man"
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
                    v-model="contact.gender"
                  />
                  女性
                </label>
                <div class="errors">
                  {{ errors.gender[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="mail"
                  >メールアドレス<span class="badge">必須</span></label
                >
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  v-model="contact.mail"
                />
                <div class="errors">
                  {{ errors.mail[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="type"
                  >お問い合わせ種別<span class="badge">必須</span></label
                >
                <select name="type" id="type" v-model="contact.type">
                  <option value="">選択してください</option>
                  <option value="商品について">商品について</option>
                  <option value="求人について">求人について</option>
                  <option value="その他">その他</option>
                </select>
                <div class="errors">
                  {{ errors.type[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="body"
                  >お問い合わせ内容<span class="badge">必須</span></label
                >
                <textarea
                  name="body"
                  id="body"
                  v-model="contact.body"
                ></textarea>
                <div class="errors">
                  {{ errors.body[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="body">サイトを訪問した経緯</label>
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
              <p>
                <input class="button" type="submit" value="確認" />
              </p>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
form {
  width: 50%;
  margin: 0 auto;
}
.form-row {
  display: flex;
  margin-top: 2px;
}
.form-row button {
  flex: auto;
  margin-left: 10px;
}
.badge {
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  background: #f36565;
  color: #fdfdfd;
  padding: 4px 8px;
  border-radius: 2px;
  margin-left: 0.5em;
  position: relative;
  top: -1px;
}
.errors {
  color: red;
  margin: 10px 0 0;
  font-size: 12px;
}
</style>

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
      errors: {
        name: [],
        gender: [],
        mail: [],
        type: [],
        body: [],
      },
    }
  },
  created() {
    const getContactData = this.$store.getters['getContact']
    this.contact.name = getContactData.name
    this.contact.gender = getContactData.gender
    this.contact.mail = getContactData.mail
    this.contact.type = getContactData.type
    this.contact.body = getContactData.body
    this.contact.route = getContactData.route
  },
  methods: {
    submit() {
      // storeに保存
      this.$store.dispatch(`addAction`, this.contact)
      // 確認画面に遷移
      this.$router.push('/contact/confirm/')
    },
    validate: function () {
      var errors = {
        name: [],
        gender: [],
        mail: [],
        type: [],
        body: [],
        route: [],
      }
      if (!this.contact.name) {
        errors.name.push('必須項目が入力されていません')
      } else if (this.contact.name.length > 20) {
        errors.name.push('20文字以内で入力してください。')
      }
      if (!this.contact.gender) {
        errors.gender.push('必須項目が入力されていません')
      }
      if (!this.contact.mail) {
        errors.mail.push('必須項目が入力されていません')
      } else if (!this.checkString(this.contact.mail)) {
        errors.mail.push('メールアドレス形式で入力してください')
      }
      if (!this.contact.type) {
        errors.type.push('必須項目が入力されていません')
      }
      if (!this.contact.body) {
        errors.body.push('必須項目が入力されていません')
      } else if (this.contact.body.length > 100) {
        errors.body.push('100文字以内で入力してください。')
      }
      if (
        errors.name.length == 0 &&
        errors.gender.length == 0 &&
        errors.mail.length == 0 &&
        errors.type.length == 0 &&
        errors.body.length == 0
      ) {
        this.submit()
      }
      this.errors = errors
    },
    checkString(mail) {
      var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      return regex.test(mail)
    },
  },
}
definePageMeta({
  layout: 'index',
})
</script>
