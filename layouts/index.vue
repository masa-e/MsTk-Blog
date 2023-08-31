<template>
  <div>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mx-auto max-w-3xl py-10 md:py-16">
        <Header></Header>
      </div>
    </div>
    <div class="styles_divider">
      <div class="styles_article">
        <NuxtPage />
      </div>
      <aside class="styles_aside">
        <Aside></Aside>
      </aside>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '~/components/layouts/Header';
import Footer from '~/components/layouts/Footer';
import Aside from '~/components/layouts/Aside';
import { defineRule, configure } from 'vee-validate'
import {required} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'

export default defineComponent({
  components: {
    Header,
    Footer,
    Aside
  }
});

configure({
  generateMessage: localize({
    ja
  })
});

localize('ja');

defineRule('required', required); 

</script>
