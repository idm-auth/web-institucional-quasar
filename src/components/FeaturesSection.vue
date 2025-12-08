<template>
  <section id="features" class="bg-accent q-py-xl">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <h2 class="text-h2 text-weight-bold text-secondary q-mb-md">{{ $t('features.title') }}</h2>
        <p class="text-h6 text-primary q-my-none">
          {{ $t('features.subtitle') }}
        </p>
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-sm-6 col-md-4" v-for="feature in features" :key="feature.title">
          <q-card class="feature-card full-height">
            <q-card-section class="text-center">
              <q-icon :name="feature.icon" size="56px" color="primary" class="q-mb-md" />
              <div class="text-h6 text-weight-medium text-secondary q-mb-sm">{{ feature.title }}</div>
              <p class="text-body1 text-primary q-my-none">{{ feature.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const features = computed(() => [
  {
    icon: 'code',
    title: t('features.security.title'),
    description: t('features.security.description'),
  },
  {
    icon: 'speed',
    title: t('features.performance.title'),
    description: t('features.performance.description'),
  },
  {
    icon: 'integration_instructions',
    title: t('features.integration.title'),
    description: t('features.integration.description'),
  },
  {
    icon: 'cloud_queue',
    title: t('features.monitoring.title'),
    description: t('features.monitoring.description'),
  },
  {
    icon: 'admin_panel_settings',
    title: t('features.ready.title'),
    description: t('features.ready.description'),
  },
  {
    icon: 'support_agent',
    title: t('features.expertise.title'),
    description: t('features.expertise.description'),
  },
]);
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
}
</style>
