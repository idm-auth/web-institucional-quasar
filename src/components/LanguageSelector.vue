<template>
  <q-btn-dropdown flat dense class="lang-selector">
    <template v-slot:label>
      <div class="row items-center no-wrap">
        <span class="flag">{{ currentFlag }}</span>
        <span class="q-ml-xs">{{ localeStore.currentLang.toUpperCase() }}</span>
      </div>
    </template>
    <q-list>
      <q-item clickable v-close-popup @click="localeStore.setLocale('pt-BR')">
        <q-item-section avatar>
          <span class="flag">🇧🇷</span>
        </q-item-section>
        <q-item-section>
          <q-item-label>Português</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="localeStore.setLocale('en-US')">
        <q-item-section avatar>
          <span class="flag">🇺🇸</span>
        </q-item-section>
        <q-item-section>
          <q-item-label>English</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocaleStore } from 'stores/locale-store';

const { locale } = useI18n();
const localeStore = useLocaleStore();

const currentFlag = computed(() => {
  return localeStore.locale === 'pt-BR' ? '🇧🇷' : '🇺🇸';
});

// Sincroniza store com i18n
watch(() => localeStore.locale, (newLocale) => {
  locale.value = newLocale;
});
</script>

<style scoped lang="scss">
.lang-selector {
  color: #faf4d3;
  font-weight: 500;
}

.flag {
  font-size: 1.2rem;
}
</style>
