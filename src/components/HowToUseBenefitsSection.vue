<template>
  <div>
    <h2 class="text-h4 text-weight-bold text-primary q-mb-lg">{{ title }}</h2>
    
    <div class="row q-col-gutter-md">
      <div v-for="(benefit, index) in benefits" :key="index" class="col-12 col-md-6">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="text-h6 text-weight-bold q-mb-sm">{{ benefit.title }}</div>
            <p class="text-body2 text-grey-7">{{ benefit.desc }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Benefit {
  title: string;
  desc: string;
}

defineProps<{
  title: string;
  benefits: Benefit[];
}>();
</script>
