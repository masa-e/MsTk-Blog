<template>
  <div>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mx-auto max-w-3xl py-10 md:py-16">
        <SiteHeader />
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 boxContainer">
      <div class="col-12 lg:col-9">
        <NuxtPage />
      </div>
      <aside class="col-12 lg:col-3">
        <SideBar />
      </aside>
    </div>
    <SiteFooter />
  </div>
</template>
