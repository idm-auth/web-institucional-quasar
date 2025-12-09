<template>
  <q-page>
    <AppHeader />
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <SecuritySection />
    <WhyUseSection />
    <ContactSection />
    <CtaSection />
    <AppFooter />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { scroll } from 'quasar';
import AppHeader from 'components/AppHeader.vue';
import HeroSection from 'components/HeroSection.vue';
import FeaturesSection from 'components/FeaturesSection.vue';
import AboutSection from 'components/AboutSection.vue';
import SecuritySection from 'components/SecuritySection.vue';
import WhyUseSection from 'components/WhyUseSection.vue';
import ContactSection from 'components/ContactSection.vue';
import CtaSection from 'components/CtaSection.vue';
import AppFooter from 'components/AppFooter.vue';

const route = useRoute();
const { getScrollTarget, setVerticalScrollPosition } = scroll;

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      const id = route.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const target = getScrollTarget(element);
        const offset = element.offsetTop - 40;
        setVerticalScrollPosition(target, offset, 500);
      }
    }, 300);
  }
});
</script>
