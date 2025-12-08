<template>
  <footer class="bg-primary text-accent q-py-xl">
    <div class="container q-px-md">
      <div class="row justify-between items-center q-gutter-md">
        <div>
          <div class="text-h6 text-weight-bold q-mb-sm">{{ $t('footer.brand') }}</div>
          <p class="q-my-none" style="opacity: 0.8">{{ $t('footer.description') }}</p>
        </div>
        <div>
          <p class="q-my-none" style="opacity: 0.7">&copy; {{ currentYear }} {{ $t('footer.brand') }}. {{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
