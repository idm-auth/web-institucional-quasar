<template>
  <q-page class="why-use-page">
    <AppHeader />
    <section class="hero-section bg-primary text-accent">
      <div class="container">
        <h1 class="text-h2 text-weight-bold text-center">{{ $t('whyUse.title') }}</h1>
        <p class="text-h6 text-center q-mt-md" style="opacity: 0.9">{{ $t('whyUse.subtitle') }}</p>
      </div>
    </section>

    <section class="reasons-section q-py-xl">
      <div class="container">
        <q-card v-for="(reason, index) in reasons" :key="index" class="reason-card q-mb-xl" flat>
          <q-card-section>
            <div class="row items-center" :class="{ 'reverse': index % 2 !== 0 }">
              <div class="col-12 col-md-6 q-pa-lg">
                <q-icon :name="reason.icon" size="48px" :color="reason.color" class="q-mb-md" />
                <h2 class="text-h4 text-weight-bold q-mb-md">{{ $t(reason.titleKey) }}</h2>
                <p class="text-body1 text-grey-8">{{ $t(reason.descKey) }}</p>
                <ul class="q-mt-md">
                  <li v-for="(point, i) in reason.points" :key="i" class="text-body2 q-mb-sm">
                    {{ $t(point) }}
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 q-pa-lg text-center">
                <q-icon :name="reason.illustrationIcon" size="200px" :color="reason.color" style="opacity: 0.2" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <section class="comparison-section bg-grey-2 q-py-xl">
      <div class="container">
        <h2 class="text-h3 text-weight-bold text-center q-mb-xl">{{ $t('whyUse.comparison.title') }}</h2>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card class="full-height danger-card">
              <q-card-section>
                <div class="text-h5 text-weight-bold text-negative q-mb-md">
                  <q-icon name="close" /> {{ $t('whyUse.comparison.without.title') }}
                </div>
                <q-list>
                  <q-item v-for="(item, i) in 6" :key="i">
                    <q-item-section avatar>
                      <q-icon name="warning" color="negative" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ $t(`whyUse.comparison.without.point${i + 1}`) }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card class="full-height success-card">
              <q-card-section>
                <div class="text-h5 text-weight-bold text-positive q-mb-md">
                  <q-icon name="check_circle" /> {{ $t('whyUse.comparison.with.title') }}
                </div>
                <q-list>
                  <q-item v-for="(item, i) in 6" :key="i">
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="positive" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ $t(`whyUse.comparison.with.point${i + 1}`) }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section bg-primary text-accent q-py-xl text-center">
      <div class="container">
        <h2 class="text-h3 text-weight-bold q-mb-md">{{ $t('whyUse.cta.title') }}</h2>
        <p class="text-h6 q-mb-lg" style="opacity: 0.9">{{ $t('whyUse.cta.subtitle') }}</p>
        <div class="row q-gutter-md justify-center">
          <q-btn
            :label="$t('whyUse.cta.primary')"
            size="lg"
            unelevated
            color="accent"
            text-color="secondary"
            href="https://github.com/idm-auth"
            target="_blank"
            icon-right="open_in_new"
          />
          <q-btn
            :label="$t('whyUse.cta.secondary')"
            size="lg"
            outline
            color="accent"
            to="/"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import AppHeader from 'components/AppHeader.vue';

const reasons = [
  {
    icon: 'security',
    color: 'primary',
    illustrationIcon: 'shield',
    titleKey: 'whyUse.reasons.security.title',
    descKey: 'whyUse.reasons.security.desc',
    points: ['whyUse.reasons.security.point1', 'whyUse.reasons.security.point2', 'whyUse.reasons.security.point3']
  },
  {
    icon: 'verified_user',
    color: 'deep-purple',
    illustrationIcon: 'policy',
    titleKey: 'whyUse.reasons.authorization.title',
    descKey: 'whyUse.reasons.authorization.desc',
    points: ['whyUse.reasons.authorization.point1', 'whyUse.reasons.authorization.point2', 'whyUse.reasons.authorization.point3']
  },
  {
    icon: 'speed',
    color: 'positive',
    illustrationIcon: 'rocket_launch',
    titleKey: 'whyUse.reasons.time.title',
    descKey: 'whyUse.reasons.time.desc',
    points: ['whyUse.reasons.time.point1', 'whyUse.reasons.time.point2', 'whyUse.reasons.time.point3']
  },
  {
    icon: 'savings',
    color: 'orange',
    illustrationIcon: 'account_balance',
    titleKey: 'whyUse.reasons.cost.title',
    descKey: 'whyUse.reasons.cost.desc',
    points: ['whyUse.reasons.cost.point1', 'whyUse.reasons.cost.point2', 'whyUse.reasons.cost.point3']
  },
  {
    icon: 'code',
    color: 'info',
    illustrationIcon: 'integration_instructions',
    titleKey: 'whyUse.reasons.opensource.title',
    descKey: 'whyUse.reasons.opensource.desc',
    points: ['whyUse.reasons.opensource.point1', 'whyUse.reasons.opensource.point2', 'whyUse.reasons.opensource.point3']
  },
  {
    icon: 'description',
    color: 'amber',
    illustrationIcon: 'rule',
    titleKey: 'whyUse.reasons.policies.title',
    descKey: 'whyUse.reasons.policies.desc',
    points: ['whyUse.reasons.policies.point1', 'whyUse.reasons.policies.point2', 'whyUse.reasons.policies.point3']
  }
];
</script>

<style scoped lang="scss">
.why-use-page {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero-section {
    padding: 6rem 1rem 4rem;
  }

  .reason-card {
    .reverse {
      flex-direction: row-reverse;
    }
  }

  .danger-card {
    border-left: 4px solid $negative;
  }

  .success-card {
    border-left: 4px solid $positive;
  }
}
</style>
