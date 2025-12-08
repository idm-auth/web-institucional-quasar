<template>
  <section class="why-use-section bg-grey-2 q-py-xl text-center">
    <div class="container">
      <q-icon name="help_outline" size="64px" color="primary" class="q-mb-md" />
      <h2 class="text-h4 text-weight-bold q-mb-md">{{ $t('whyUseSection.title') }}</h2>
      <p class="text-body1 text-grey-8 q-mb-lg">{{ $t('whyUseSection.subtitle') }}</p>
      <q-btn
        :label="$t('whyUseSection.button')"
        size="lg"
        unelevated
        color="primary"
        to="/why-use"
        icon-right="arrow_forward"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.why-use-section {
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }
}
</style>
