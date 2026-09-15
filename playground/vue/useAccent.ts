// @ts-nocheck — visual sample only
import { computed, ref, type Ref } from 'vue';

/** Composable sample for Vue + TS highlighting. */
export function useAccent(initial = '#FFCC66') {
  const accent: Ref<string> = ref(initial);

  const soft = computed(() => `${accent.value}ae`);

  function setAccent(next: string) {
    accent.value = next;
  }

  return { accent, soft, setAccent };
}
