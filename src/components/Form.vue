<template>
  <form>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names , vue/no-reserved-component-names
  name: 'Form'
})
</script>
