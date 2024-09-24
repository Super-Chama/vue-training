<template>
  <select :id="id" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Option {
  value: string
  text: string
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dropdown',
  props: {
    id: { type: String, required: true },
    modelValue: { type: String, required: true },
    options: { type: Array as PropType<Option[]>, required: true }
  },
  emits: ['update:modelValue']
})
</script>
