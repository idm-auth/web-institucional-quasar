import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<string>('pt-BR');

  const setLocale = (newLocale: string) => {
    locale.value = newLocale;
  };

  const currentLang = computed<string>(() => {
    return locale.value.split('-')[0] || 'pt';
  });

  return {
    locale,
    setLocale,
    currentLang,
  };
});
