<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useConsentStore } from 'stores/consent-store';

const consentStore = useConsentStore();

onMounted(async () => {
  await nextTick();
  consentStore.loadConsent();
});
</script>
