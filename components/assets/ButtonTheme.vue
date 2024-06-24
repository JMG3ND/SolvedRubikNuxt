<template>
  <div>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="changeTheme"
    />
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = ref(true);
const changeTheme = () => {
  isDark.value = !isDark.value;
  colorMode.value = isDark.value ? "dark" : "light";
};

onMounted(() => {
  isDark.value = colorMode.value == "dark" 
})
</script>
