<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">ホーム</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog/2dj1q5r0wge2">プロフィール</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">お問い合わせ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact/history">お問い合わせ履歴</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  color: rgb(0, 0, 0);
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      list-style-type: none;
      margin-left: 15px;
      a {
        color: rgb(0, 0, 0);
      }
    }
  }
}
</style>
