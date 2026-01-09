<template>
  <div class="q-mb-xl">
    <h2 class="text-h4 text-weight-bold text-primary q-mb-lg">{{ title }}</h2>
    
    <div class="row q-col-gutter-md">
      <div v-for="(step, index) in steps" :key="index" class="col-12">
        <q-card
          flat
          bordered
          class="q-hoverable"
          style="border-left: 4px solid var(--q-primary); transition: transform 0.2s"
        >
          <q-card-section>
            <div class="text-h6 text-weight-bold text-primary q-mb-sm">{{ step.title }}</div>
            <p class="text-body2 text-grey-8">{{ step.desc }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Step {
  title: string;
  desc: string;
}

defineProps<{
  title: string;
  steps: Step[];
}>();
</script>

<style scoped lang="scss">
.q-card.q-hoverable:hover {
  transform: translateX(4px);
}
</style>
