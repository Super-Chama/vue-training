<template>
  <form v-bind="$attrs">
    <slot></slot>
  </form>
  {{ formContext.errors }}
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names , vue/no-reserved-component-names
  name: 'Form',
  inheritAttrs: false,

  setup() {
    const formContext = ref({
      fields: [],
      errors: []
    })

    provide('formContext', formContext)

    return {
      formContext
    }
  }
})
</script>
