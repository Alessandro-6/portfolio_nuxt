<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white prose-pre:text-gray-700 dark:prose-pre:text-gray-300 dark:prose-pre:bg-gray-800 max-w-none"
  >
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div
            :class="{
              'md:col-span-4 col-span-6': doc.body.toc,
              'col-span-6': !doc.body.toc,
            }"
          >
            <ContentRenderer :value="doc" />
          </div>
          <div
            class="md:col-span-2 hidden md:block not-prose"
            v-if="doc.body.toc"
          >
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of contents</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
      <template #not-found>
        <h1>Document not found(404)</h1>
        <h3>This blog post could not be found :(</h3>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null);

onMounted(() => {
  let elements = [];
  const callback = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? (activeId.value = entry.target.id) : null;
    });
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  setTimeout(() => {
    elements = document.querySelectorAll("h2, h3");

    elements.forEach((element) => observer.observe(element));
  }, 150);
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
    elements.forEach((element) => observer.unobserve(element));
  });
});
</script>
