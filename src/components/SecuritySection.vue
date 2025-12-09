<template>
  <section id="security" class="bg-primary q-py-xl">
    <div class="container q-px-md">
      <div class="text-center q-mb-lg">
        <h2 class="text-h3 text-weight-bold text-accent q-mb-md">{{ $t('security.title') }}</h2>
      </div>
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="warning" size="32px" color="negative" class="q-mr-sm" />
                <div class="text-h6 text-weight-medium text-secondary">
                  {{ $t('security.challenge.title') }}
                </div>
              </div>
              <p class="text-body1 text-primary q-my-none">
                {{ $t('security.challenge.description') }}
              </p>
            </q-card-section>
          </q-card>
          <q-card>
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="verified_user" size="32px" color="positive" class="q-mr-sm" />
                <div class="text-h6 text-weight-medium text-secondary">
                  {{ $t('security.solution.title') }}
                </div>
              </div>
              <p class="text-body1 text-primary q-my-none">
                {{ $t('security.solution.description') }}
              </p>
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
