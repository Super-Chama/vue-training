<template>
  <label>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    {{ inlineLabel }}
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Checkbox',
  props: {
    inlineLabel: { type: String, required: true },
    modelValue: { type: Boolean, required: true }
  },
  emits: ['update:modelValue']
})
</script>
