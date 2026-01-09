<template>
  <div class="q-mb-xl">
    <h2 class="text-h4 text-weight-bold text-primary q-mb-md">{{ title }}</h2>
    <p class="text-body1 text-grey-8">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
