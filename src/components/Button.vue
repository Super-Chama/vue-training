<template>
  <button :type="type">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names , vue/no-reserved-component-names
  name: 'Button',
  props: {
    label: { type: String, required: true },
    type: { type: String, required: false }
  }
})
</script>
