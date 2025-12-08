<template>
  <section class="bg-secondary text-accent text-center q-py-xl">
    <div class="container q-px-md">
      <h2 class="text-h2 text-weight-bold q-mb-md">{{ $t('cta.title') }}</h2>
      <p class="cta-subtitle text-h6 q-mb-xl">{{ $t('cta.subtitle') }}</p>
      <div class="row q-gutter-md justify-center">
        <q-btn
          :label="$t('cta.button')"
          size="lg"
          unelevated
          color="accent"
          text-color="secondary"
          href="https://github.com/idm-auth"
          target="_blank"
          icon-right="open_in_new"
        />
        <q-btn
          label="Experimentar SaaS"
          size="lg"
          outline
          color="accent"
          href="https://console.idm-auth.io"
          target="_blank"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-subtitle {
  opacity: 0.9;
}
</style>
