<template>
  <section id="about" class="bg-accent q-py-xl">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <h2 class="text-h2 text-weight-bold text-secondary q-mb-md">{{ $t('about.title') }}</h2>
        <p class="text-h6 text-primary q-my-none">{{ $t('about.subtitle') }}</p>
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card class="full-height">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="flag" size="32px" color="primary" class="q-mr-sm" />
                <div class="text-h6 text-weight-medium text-secondary">{{ $t('about.mission.title') }}</div>
              </div>
              <p class="text-body1 text-primary q-my-none">{{ $t('about.mission.description') }}</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="full-height">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="code" size="32px" color="primary" class="q-mr-sm" />
                <div class="text-h6 text-weight-medium text-secondary">{{ $t('about.why.title') }}</div>
              </div>
              <p class="text-body1 text-primary q-my-none">{{ $t('about.why.description') }}</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="full-height">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="groups" size="32px" color="primary" class="q-mr-sm" />
                <div class="text-h6 text-weight-medium text-secondary">{{ $t('about.community.title') }}</div>
              </div>
              <p class="text-body1 text-primary q-my-none">{{ $t('about.community.description') }}</p>
            </q-card-section>
          </q-card>
        </div>
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
</style>
