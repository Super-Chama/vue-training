<template>
  <label v-for="option in options" :key="option.value" style="margin-right: 10px;">
    <input
      type="radio"
      :value="option.value"
      :checked="modelValue === option.value"
      @change="$emit('update:modelValue', option.value)"
    />
    {{ option.text }}
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Option {
  value: string
  text: string
}

export default defineComponent({
  name: 'RadioGroup',
  props: {
    modelValue: { type: String, required: true },
    options: { type: Array as PropType<Option[]>, required: true }
  },
  emits: ['update:modelValue']
})
</script>
