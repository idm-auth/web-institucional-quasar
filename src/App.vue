<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useConsentStore } from 'stores/consent-store';

const consentStore = useConsentStore();

onMounted(() => {
  consentStore.loadConsent();
});
</script>
