<template>
  <div class="not-prose">
    <section v-if="isLoading">Loading...</section>
    <section v-else-if="error">Something went wrong... try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repository in repos"
          :key="repository.id"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 font-mono dark:hover:bg-gray-800 duration-200"
        >
          <a :href="repository.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repository.name }}</div>
              <div>{{ repository.stargazers_count }} ★</div>
            </div>
            <p class="text-sm">
              {{ repository.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// https://api.github.com/users/piotr-jura-udemy/repos
const {
  data,
  error,
  pending: isLoading,
} = await useFetch("https://api.github.com/users/piotr-jura-udemy/repos");

const repos = computed(() => {
  return data.value
    .filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
});
console.log(data.value);
console.log(isLoading);
</script>
