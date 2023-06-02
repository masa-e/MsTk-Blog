<template>
  <form @submit.prevent="submit">
    <input class="styles_input" type="text" v-model="query" ref="searchForm" />
    <input class="styles_input" type="submit" value="検索" />
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      query: '',
    }
  },
  computed: {
    // 検索キーワードが有効な場合にtrueを返す
    canSubmit() {
      return (
        !!this.query && // キーワードがない場合
        !/^\s+$/.test(this.query)
      ) // 空白のみの場合
    },
  },
  methods: {
    submit() {
      if (this.canSubmit) {
        //検索が有効な場合に検索結果ページに遷移させる
        this.$router.push({
          path: '/search',
          query: {
            q: this.query,
          },
        })
        this.query = ''
        this.$refs.searchForm.blur()
      }
    },
  },
}
</script>
