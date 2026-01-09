<template>
  <q-page class="how-to-use-page">
    <AppHeader />
    <section class="hero-section bg-primary text-accent">
      <div class="container">
        <h1 class="text-h2 text-weight-bold text-center">{{ $t('howToUse.title') }}</h1>
        <p class="text-h6 text-center q-mt-md" style="opacity: 0.9">{{ $t('howToUse.subtitle') }}</p>
      </div>
    </section>

    <section class="content-section q-py-xl">
      <div class="container">
        <p class="text-h5 text-center text-grey-8 q-mb-xl">{{ $t('howToUse.banner') }}</p>
        
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card class="usage-card cursor-pointer" @click="$router.push('/how-to-use/sidecar')">
              <q-card-section>
                <q-icon name="view_in_ar" size="48px" color="primary" class="q-mb-md" />
                <h3 class="text-h5 text-weight-bold q-mb-sm">{{ $t('howToUse.sidecar.title') }}</h3>
                <p class="text-body2 text-grey-7">{{ $t('howToUse.sidecar.desc') }}</p>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-12 col-md-6">
            <q-card class="usage-card cursor-pointer" @click="$router.push('/how-to-use/ingress')">
              <q-card-section>
                <q-icon name="alt_route" size="48px" color="primary" class="q-mb-md" />
                <h3 class="text-h5 text-weight-bold q-mb-sm">{{ $t('howToUse.ingress.title') }}</h3>
                <p class="text-body2 text-grey-7">{{ $t('howToUse.ingress.desc') }}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import AppHeader from 'components/AppHeader.vue';
</script>

<style scoped lang="scss">
.how-to-use-page {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero-section {
    padding: 6rem 1rem 4rem;
  }

  .usage-card {
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
