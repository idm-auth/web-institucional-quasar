<template>
  <section class="hero-section bg-primary text-accent flex flex-center text-center">
    <div class="hero-container full-width q-px-md">
      <div class="row q-gutter-sm justify-center q-mb-lg">
        <q-badge class="hero-badge" outline color="accent" :label="$t('hero.badge1')" />
        <q-badge class="hero-badge" outline color="accent" :label="$t('hero.badge2')" />
        <q-badge class="hero-badge" outline color="accent" :label="$t('hero.badge3')" />
      </div>
      <img src="../assets/logo-accent.svg" alt="idm-auth.io" class="hero-logo" />
      <p class="hero-subtitle text-h5 q-mt-lg q-mb-none">{{ $t('hero.subtitle') }}</p>
      <div class="row q-mt-xl q-gutter-md justify-center">
        <q-btn
          :label="$t('hero.ctaPrimary')"
          size="lg"
          unelevated
          color="accent"
          text-color="secondary"
          href="https://github.com/idm-auth"
          target="_blank"
          icon-right="open_in_new"
        />
        <q-btn
          :label="$t('hero.ctaSecondary')"
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
.hero-section {
  min-height: 100vh;
  padding-top: 110px;
}

.hero-container {
  max-width: 1200px;
}

.hero-badge {
  background: rgba($accent, 0.15);
}

.hero-logo {
  max-width: 500px;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.hero-subtitle {
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
