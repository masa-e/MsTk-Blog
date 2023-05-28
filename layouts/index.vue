<template>
  <div>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mx-auto max-w-3xl py-10 md:py-16">
        <Header></Header>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 boxContainer">
      <div class="col-12 lg:col-9">
        <NuxtPage />
      </div>
      <aside class="col-12 lg:col-3">
        <Aside></Aside>
      </aside>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'
import Aside from '~/components/layouts/Aside'
export default {
  components: {
    Header,
    Footer,
    Aside,
  },
}
</script>
