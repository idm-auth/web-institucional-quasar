<template>
  <section class="bg-primary text-accent q-pa-xl">
    <div class="q-mx-auto" style="max-width: 1200px">
      <q-btn
        flat
        icon="arrow_back"
        :label="backLabel"
        to="/how-to-use"
        class="q-mb-md"
      />
      <h1 class="text-h2 text-weight-bold">{{ title }}</h1>
      <p class="text-h6 q-mt-md" style="opacity: 0.9">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  backLabel: string;
}>();
</script>
