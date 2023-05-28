<template>
  <footer class="sitefooter text-center pb-2 mt-12">
    <!-- You should put on the file in `~/public/` if path start with '/' -->
    <div class="my-3">
      &copy;
      {{ new Date().getFullYear() }}
      {{ $config.TEAM_NAME }}
    </div>
  </footer>
</template>

<style scoped lang="scss">
.sitefooter {
  background-color: var(--surface-800);
  color: var(--surface-50);
}
</style>
