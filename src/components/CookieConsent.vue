<template>
  <q-dialog v-model="showBanner" persistent position="bottom">
    <q-card class="cookie-banner">
      <q-card-section>
        <div class="text-h6">{{ $t('cookies.title') }}</div>
        <p class="q-mt-sm">{{ $t('cookies.description') }}</p>
        <p class="text-caption">
          {{ $t('cookies.learnMore') }}
          <router-link to="/privacy" class="text-primary">{{ $t('cookies.privacyPolicy') }}</router-link>
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat :label="$t('cookies.reject')" @click="handleReject" />
        <q-btn unelevated color="primary" :label="$t('cookies.accept')" @click="handleAccept" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useConsentStore } from 'stores/consent-store';

const consentStore = useConsentStore();
const showBanner = ref(false);

onMounted(() => {
  if (!consentStore.consentGiven) {
    showBanner.value = true;
  }
});

function handleAccept() {
  consentStore.acceptAll();
  showBanner.value = false;
}

function handleReject() {
  consentStore.rejectAll();
  showBanner.value = false;
}
</script>

<style scoped lang="scss">
.cookie-banner {
  max-width: 600px;
  margin: 0 auto 16px;
}
</style>
