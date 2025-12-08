<template>
  <section id="contact" class="bg-primary text-accent q-py-xl">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl">
        <h2 class="text-h2 text-weight-bold q-mb-md">{{ $t('contact.title') }}</h2>
        <p class="text-h6 q-my-none contact-subtitle">{{ $t('contact.subtitle') }}</p>
      </div>
      <div class="row q-col-gutter-lg justify-center">
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="contact-card full-height text-center">
            <q-card-section>
              <q-icon name="code" size="48px" color="primary" class="q-mb-md" />
              <div class="text-h6 text-weight-medium text-secondary q-mb-sm">{{ $t('contact.github') }}</div>
              <q-btn
                label="github.com/idm-auth"
                flat
                color="primary"
                href="https://github.com/idm-auth"
                target="_blank"
                icon-right="open_in_new"
                size="sm"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="contact-card full-height text-center">
            <q-card-section>
              <q-icon name="email" size="48px" color="primary" class="q-mb-md" />
              <div class="text-h6 text-weight-medium text-secondary q-mb-sm">{{ $t('contact.email') }}</div>
              <q-btn
                label="contact@idm-auth.io"
                flat
                color="primary"
                href="mailto:contact@idm-auth.io"
                icon-right="open_in_new"
                size="sm"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="contact-card full-height text-center">
            <q-card-section>
              <q-icon name="support_agent" size="48px" color="primary" class="q-mb-md" />
              <div class="text-h6 text-weight-medium text-secondary q-mb-sm">{{ $t('contact.support') }}</div>
              <q-btn
                label="support@idm-auth.io"
                flat
                color="primary"
                href="mailto:support@idm-auth.io"
                icon-right="open_in_new"
                size="sm"
              />
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

.contact-subtitle {
  opacity: 0.9;
}

.contact-card {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
}
</style>
