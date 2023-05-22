<template>
  <header class="siteheader pl-6 align-items-center">
    <div class="siteheader__sitetitle font-light text-4xl">
      <a href="/">{{ $config.SITE_TITLE }}</a>
    </div>
    <HeaderNav />
  </header>
</template>

<script>
	import HeaderNav from "@/components/HeaderNav.vue";
	export default {
		components: {
			HeaderNav
		}
	};
</script>

<style scoped lang="scss">
.siteheader {
  height: 120px;
  background-color: var(--surface-0);

  .siteheader__sitetitle {
    color: var(--text-color);

    a {
      color: var(--text-color);
    }
  }
}
</style>
