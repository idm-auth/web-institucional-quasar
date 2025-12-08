<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <CookieConsent />
  </q-layout>
</template>

<script setup lang="ts">
import CookieConsent from 'components/CookieConsent.vue';
</script>
