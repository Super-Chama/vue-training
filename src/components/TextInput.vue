<template>
  <input
    :id="id"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextInput',
  props: {
    id: { type: String, required: true },
    modelValue: { type: String, required: true },
  },
  emits: ['update:modelValue']
})
</script>
