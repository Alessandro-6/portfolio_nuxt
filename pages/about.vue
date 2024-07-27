<template>
  <div class="prose dark:prose-invert prose-h1:text-2xl max-w-none">
    <div>This page is about me.</div>
    <ContentDoc path="/about" />
    <!-- <button @click="enableAnotherLayout">Update layout</button> -->
  </div>
</template>

<script setup>
// function enableAnotherLayout() {
//   setPageLayout("another");
// }
// definePageMeta({
//   layout: false,
// });
// useSeoMeta({
//   title: "About Page",
//   description: "This is the About Page",
//   ogTitle: "About Page",
//   ogDescription: "This is the About Page",
//   ogImage: "[og:image]",
//   ogUrl: "[og:url]",
//   twitterTitle: "About Page",
//   twitterDescription: "This is the About Page",
//   twitterImage: "[twitter:image]",
//   twitterCard: "summary",
// });

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
