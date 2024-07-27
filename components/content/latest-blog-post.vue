<template>
  <BlogPosts v-slot="{ posts }" :limit="numLimit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup>
const { limit } = defineProps({ limit: { type: Number, default: null } });
const numLimit = computed(() => Number(limit));
console.log(limit);
</script>
