<template>
  <q-page class="privacy-page q-pa-md">
    <div class="container q-mx-auto" style="max-width: 900px">
      <h1 class="text-h3 q-mb-md">{{ $t('privacy.title') }}</h1>
      <p class="text-caption q-mb-xl">{{ $t('privacy.lastUpdate') }}</p>

      <section v-for="section in sections" :key="section.key" class="q-mb-xl">
        <h2 class="text-h5 q-mb-md">{{ $t(`privacy.${section.key}.title`) }}</h2>
        <p class="q-mb-md" v-html="$t(`privacy.${section.key}.content`)"></p>
        <ul v-if="section.items" class="q-pl-md">
          <li v-for="(item, idx) in section.items" :key="idx" class="q-mb-sm">
            {{ $t(`privacy.${section.key}.items.${item}`) }}
          </li>
        </ul>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const sections = [
  { key: 'intro' },
  { key: 'dataCollected', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'howWeUse', items: ['item1', 'item2', 'item3'] },
  { key: 'cookies', items: ['item1', 'item2'] },
  { key: 'analytics' },
  { key: 'dataSharing' },
  { key: 'yourRights', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'security' },
  { key: 'changes' },
  { key: 'contact' },
];
</script>

<style scoped lang="scss">
.privacy-page {
  line-height: 1.6;
}
</style>
