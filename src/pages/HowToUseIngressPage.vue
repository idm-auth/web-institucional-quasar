<template>
  <q-page>
    <AppHeader />
    <HowToUseHeroSection
      :title="$t('howToUse.ingress.title')"
      :subtitle="$t('howToUse.ingress.subtitle')"
      :back-label="$t('howToUse.ingress.back')"
    />

    <section class="q-py-xl">
      <div class="q-mx-auto q-px-md" style="max-width: 1200px">
        <HowToUseOverviewSection
          :title="$t('howToUse.ingress.overview.title')"
          :description="$t('howToUse.ingress.overview.description')"
        />

        <HowToUseDiagramSection
          image-src="/src/assets/howToUse/middleware.png"
          image-alt="Middleware Architecture"
        />

        <HowToUseStepsSection :title="$t('howToUse.ingress.howItWorks.title')" :steps="steps" />
      </div>
    </section>

    <section class="q-py-xl bg-accent">
      <div class="q-mx-auto q-px-md" style="max-width: 1200px">
        <HowToUseBenefitsSection
          :title="$t('howToUse.ingress.benefits.title')"
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
    title: t('howToUse.ingress.howItWorks.step1.title'),
    desc: t('howToUse.ingress.howItWorks.step1.desc'),
  },
  {
    title: t('howToUse.ingress.howItWorks.step2.title'),
    desc: t('howToUse.ingress.howItWorks.step2.desc'),
  },
  {
    title: t('howToUse.ingress.howItWorks.step3.title'),
    desc: t('howToUse.ingress.howItWorks.step3.desc'),
  },
  {
    title: t('howToUse.ingress.howItWorks.step4.title'),
    desc: t('howToUse.ingress.howItWorks.step4.desc'),
  },
]);

const benefits = computed(() => [
  {
    title: t('howToUse.ingress.benefits.centralized.title'),
    desc: t('howToUse.ingress.benefits.centralized.desc'),
  },
  {
    title: t('howToUse.ingress.benefits.separation.title'),
    desc: t('howToUse.ingress.benefits.separation.desc'),
  },
  {
    title: t('howToUse.ingress.benefits.scalability.title'),
    desc: t('howToUse.ingress.benefits.scalability.desc'),
  },
  {
    title: t('howToUse.ingress.benefits.external.title'),
    desc: t('howToUse.ingress.benefits.external.desc'),
  },
]);
</script>
