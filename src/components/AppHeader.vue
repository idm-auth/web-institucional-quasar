<template>
  <q-header class="fixed-top">
    <q-toolbar class="q-px-md bg-black shadow-1">
      <q-toolbar-title class="q-pa-none full-width q-mx-auto">
        <div class="row items-center justify-between">
          <img src="../assets/logo.svg" alt="idm-auth.io" class="logo-img" />

          <div class="row items-center q-gutter-md">
            <q-btn flat :label="$t('header.features')" @click="scrollTo('features')" class="text-grey-3" />
            <q-btn flat :label="$t('header.about')" @click="scrollTo('about')" class="text-grey-3" />
            <q-btn flat :label="$t('header.whyUse')" to="/why-use" class="text-grey-3" />
            <q-btn flat :label="$t('header.contact')" @click="scrollTo('contact')" class="text-grey-3" />
            <LanguageSelector />
            <q-btn
              :label="$t('header.console')"
              unelevated
              class="btn-login"
              href="https://console.idm-auth.io"
              target="_blank"
            />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import LanguageSelector from 'components/LanguageSelector.vue';
import { scroll } from 'quasar';
import { useRouter, useRoute } from 'vue-router';

const { getScrollTarget, setVerticalScrollPosition } = scroll;
const router = useRouter();
const route = useRoute();

const scrollTo = (id: string) => {
  if (route.path !== '/') {
    void router.push({ path: '/', hash: `#${id}` });
    return;
  }
  
  const element = document.getElementById(id);
  if (element) {
    const target = getScrollTarget(element);
    const offset = element.offsetTop - 80;
    const duration = 500;
    setVerticalScrollPosition(target, offset, duration);
  }
};
</script>

<style scoped lang="scss">
.logo-img {
  max-height: 35px;
  filter: brightness(0) saturate(100%) invert(97%) sepia(13%) saturate(1015%) hue-rotate(330deg)
    brightness(103%) contrast(96%);
}

.btn-login {
  background: $accent;
  color: $secondary;
}
</style>
