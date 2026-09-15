<script setup lang="ts">
// @ts-nocheck — visual sample only
import { computed, onMounted, ref } from 'vue';

type Tone = 'primary' | 'muted';

const title = ref('Ayu Next');
const tone = ref<Tone>('primary');

const accent = computed(() => (tone.value === 'primary' ? '#FFCC66' : '#707A8C'));

function toggleTone() {
  tone.value = tone.value === 'primary' ? 'muted' : 'primary';
}

onMounted(() => {
  console.log('Vue playground ready', { title: title.value, accent: accent.value });
});
</script>

<template>
  <section class="card" :data-tone="tone">
    <header>
      <h1>{{ title }}</h1>
      <button type="button" @click="toggleTone">
        Toggle tone
      </button>
    </header>

    <p class="hint">
      Mirage surfaces with
      <code>{{ accent }}</code>
      accent.
    </p>

    <ul>
      <li v-for="item in ['editor', 'shell', 'terminal']" :key="item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.card {
  padding: 1.25rem;
  background: #1f2430;
  color: #cbccc6;
  border: 1px solid color-mix(in srgb, v-bind(accent) 45%, transparent);
  border-radius: 8px;
}

.hint code {
  color: v-bind(accent);
}
</style>
