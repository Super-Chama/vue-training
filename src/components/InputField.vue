<template>
  <div class="ohrm-input-field">
    <label :for="$attrs.id">{{ label }}</label>
    <component :is="component" :modelValue="modelValue" v-bind="$attrs"></component>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import TextInput from '@/components/TextInput.vue'
import TextArea from '@/components/TextArea.vue'
import Dropdown from '@/components/Dropdown.vue'
import Checkbox from '@/components/Checkbox.vue'
import RadioGroup from '@/components/RadioGroup.vue'
import DateInput from '@/components/DateInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'

const TYPE_MAP: Record<string, string> = {
  text: 'text-input',
  textarea: 'text-area',
  dropdown: 'dropdown',
  checkbox: 'checkbox',
  radio: 'radio-group',
  date: 'date-input',
  password: 'password-input'
}

export default defineComponent({
  name: 'InputField',
  props: {
    type: { type: String, required: true },
    label: { type: String, required: true },
    rules: { type: Array, default: () => [] },
    modelValue: {}
  },
  components: {
    TextInput,
    TextArea,
    Dropdown,
    Checkbox,
    RadioGroup,
    DateInput,
    PasswordInput
  },
  setup(props) {
    const message = ref('')
    const component = computed(() => TYPE_MAP[props.type] ?? TYPE_MAP.text)

    window.addEventListener('submit', ($e: SubmitEvent) => {
      const isValid = props.rules.reduce<string>((acc, curr: unknown) => {
        const validationResponse = (curr as (value: string) => boolean | string)(
          props.modelValue as string
        )
        return typeof validationResponse === 'string' ? validationResponse : ''
      }, '')

      if (isValid) {
        message.value = isValid
        $e.stopImmediatePropagation()
      }
    })

    return {
      component,
      message
    }
  }
})
</script>

<style scoped>
.ohrm-input-field {
  width: 100%;
  display: block;
  margin-bottom: 1rem;
}

.ohrm-input-field label {
  display: block;
}
</style>
