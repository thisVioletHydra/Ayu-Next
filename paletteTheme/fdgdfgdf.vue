<template>
  <div class="box">
    <div class="item">
      Fdgdfgdf
    </div>
  </div>
</template>

<script setup lang="ts">
  import Codemirror from 'codemirror-editor-vue3';
  import 'codemirror/addon/display/placeholder.js';
  import 'codemirror/mode/htmlembedded/htmlembedded.js';
  import 'codemirror/mode/javascript/javascript.js';
  import 'codemirror/mode/ruby/ruby.js';
  import 'codemirror/theme/mdn-like.css';
  import { ref } from 'vue';

  const props = defineProps<{
    html?: boolean;
  }>();

  const code = defineModel<string>('code');
  const cmOptions = {
    // mode: 'text/javascript',
    // mode: 'htmlembedded',
    // mode: props.html ? 'ruby' : 'text/javascript',
    mode: 'text/javascript',
  };

  const change = (event: string) => console.log('event', event);
</script>

<style lang="postcss" module>
  .box {
    display: grid;
  }
</style>