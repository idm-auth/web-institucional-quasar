<template>
  <div class="flex flex-center q-my-xl">
    <img :src="imageSrc" :alt="imageAlt" style="max-width: 100%; height: auto" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageAlt: string;
}>();
</script>
