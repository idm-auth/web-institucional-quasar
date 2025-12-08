<template>
  <q-page class="terms-page q-pa-md">
    <div class="container q-mx-auto" style="max-width: 900px">
      <h1 class="text-h3 q-mb-md">{{ $t('terms.title') }}</h1>
      <p class="text-caption q-mb-xl">{{ $t('terms.lastUpdate') }}</p>

      <section v-for="section in sections" :key="section.key" class="q-mb-xl">
        <h2 class="text-h5 q-mb-md">{{ $t(`terms.${section.key}.title`) }}</h2>
        <p class="q-mb-md" v-html="$t(`terms.${section.key}.content`)"></p>
        <ul v-if="section.items" class="q-pl-md">
          <li v-for="(item, idx) in section.items" :key="idx" class="q-mb-sm">
            {{ $t(`terms.${section.key}.items.${item}`) }}
          </li>
        </ul>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const sections = [
  { key: 'acceptance' },
  { key: 'description' },
  { key: 'license', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'prohibited', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'intellectual' },
  { key: 'disclaimer' },
  { key: 'limitation' },
  { key: 'modifications' },
  { key: 'termination' },
  { key: 'law' },
  { key: 'contact' },
];
</script>

<style scoped lang="scss">
.terms-page {
  line-height: 1.6;
}
</style>
