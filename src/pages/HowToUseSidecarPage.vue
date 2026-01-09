<template>
  <q-page>
    <AppHeader />
    <HowToUseHeroSection
      :title="$t('howToUse.sidecar.title')"
      :subtitle="$t('howToUse.sidecar.subtitle')"
      :back-label="$t('howToUse.sidecar.back')"
    />

    <section class="q-py-xl">
      <div class="q-mx-auto q-px-md" style="max-width: 1200px">
        <HowToUseOverviewSection
          :title="$t('howToUse.sidecar.overview.title')"
          :description="$t('howToUse.sidecar.overview.description')"
        />

        <HowToUseDiagramSection
          image-src="/images/howToUse/reverse-proxy.png"
          image-alt="Sidecar Architecture"
        />

        <HowToUseStepsSection :title="$t('howToUse.sidecar.howItWorks.title')" :steps="steps" />
      </div>
    </section>

    <section class="q-py-xl bg-accent">
      <div class="q-mx-auto q-px-md" style="max-width: 1200px">
        <HowToUseBenefitsSection
          :title="$t('howToUse.sidecar.benefits.title')"
          :benefits="benefits"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from 'components/AppHeader.vue';
import HowToUseHeroSection from 'components/HowToUseHeroSection.vue';
import HowToUseOverviewSection from 'components/HowToUseOverviewSection.vue';
import HowToUseDiagramSection from 'components/HowToUseDiagramSection.vue';
import HowToUseStepsSection from 'components/HowToUseStepsSection.vue';
import HowToUseBenefitsSection from 'components/HowToUseBenefitsSection.vue';

const { t } = useI18n();

const steps = computed(() => [
  {
    title: t('howToUse.sidecar.howItWorks.step1.title'),
    desc: t('howToUse.sidecar.howItWorks.step1.desc'),
  },
  {
    title: t('howToUse.sidecar.howItWorks.step2.title'),
    desc: t('howToUse.sidecar.howItWorks.step2.desc'),
  },
  {
    title: t('howToUse.sidecar.howItWorks.step3.title'),
    desc: t('howToUse.sidecar.howItWorks.step3.desc'),
  },
  {
    title: t('howToUse.sidecar.howItWorks.step4.title'),
    desc: t('howToUse.sidecar.howItWorks.step4.desc'),
  },
]);

const benefits = computed(() => [
  {
    title: t('howToUse.sidecar.benefits.colocated.title'),
    desc: t('howToUse.sidecar.benefits.colocated.desc'),
  },
  {
    title: t('howToUse.sidecar.benefits.isolation.title'),
    desc: t('howToUse.sidecar.benefits.isolation.desc'),
  },
  {
    title: t('howToUse.sidecar.benefits.transparent.title'),
    desc: t('howToUse.sidecar.benefits.transparent.desc'),
  },
  {
    title: t('howToUse.sidecar.benefits.independent.title'),
    desc: t('howToUse.sidecar.benefits.independent.desc'),
  },
]);
</script>
