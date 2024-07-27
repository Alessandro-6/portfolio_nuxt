<template>
  <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModeLabel">
      Change to {{ nextMode }}
    </div>
    <button
      @click="toggleColorMode"
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
      class="hover:bg-gray-100 dark:hover:bg-gray-400 text-4xl md:text-base px-2 py-1 text-gray-500"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>
<script setup>
const showNextModeLabel = ref(false);
const colorMode = useColorMode();
const modes = ["system", "light", "dark"];
const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  const nextModeIndex = currentModeIndex + 1;
  return nextModeIndex === modes.length ? modes.at(0) : modes.at(nextModeIndex);
});

const nextModeIcons = { system: "🌓", dark: "🌑", light: "🌕" };
const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);
function toggleColorMode() {
  colorMode.preference = nextMode.value;
}
</script>
