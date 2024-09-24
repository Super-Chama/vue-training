<template>
  <h2>Form V1</h2>
  <hr />
  <br />
  <main>
    <Form @submit.prevent="onSubmitted">
      <InputField
        v-if="agreeToTerms"
        id="username"
        type="text"
        label="Username"
        v-model="username"
        :rules="rules.username"
      />
      <InputField
        id="password"
        type="password"
        label="Password"
        v-model="password"
        :rules="rules.password"
      />
      <InputField id="description" type="textarea" label="Description" v-model="description" />
      <InputField
        id="country"
        type="dropdown"
        label="Country"
        v-model="selectedCountry"
        :options="countryOptions"
      />
      <InputField
        type="checkbox"
        label="Consent"
        inline-label="I agree to the terms and conditions"
        v-model="agreeToTerms"
      />
      <InputField
        type="radio"
        label="Preferred contact method"
        v-model="contactMethod"
        :options="contactOptions"
      />
      <InputField id="birthdate" type="date" label="Birthdate" v-model="birthdate" />
      <Button type="submit" label="Submit"></Button>
    </Form>
    <div>
      <h3>Form Values:</h3>
      <pre>{{ formValues }}</pre>
    </div>
  </main>
</template>

<script lang="ts">
import { alwaysInvalid, maxLength, required } from '@/utils/rules'
import { defineComponent, ref, computed } from 'vue'
import Form from '@/components/Form.vue'
import Button from '@/components/Button.vue'
import InputField from '@/components/InputField.vue'

export default defineComponent({
  name: 'FormV1',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    // eslint-disable-next-line vue/no-reserved-component-names
    Button,
    InputField
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const description = ref('')
    const selectedCountry = ref('')
    const agreeToTerms = ref(true)
    const contactMethod = ref('')
    const birthdate = ref('')

    const rules = {
      username: [alwaysInvalid, maxLength(8)],
      password: [maxLength(8)]
    }

    const countryOptions = [
      { value: '', text: 'Select a country' },
      { value: 'usa', text: 'USA' },
      { value: 'canada', text: 'Canada' },
      { value: 'uk', text: 'UK' }
    ]

    const contactOptions = [
      { value: 'email', text: 'Email' },
      { value: 'phone', text: 'Phone' }
    ]

    const formValues = computed(() => ({
      username: username.value,
      password: password.value,
      description: description.value,
      selectedCountry: selectedCountry.value,
      agreeToTerms: agreeToTerms.value,
      contactMethod: contactMethod.value,
      birthdate: birthdate.value
    }))

    const onSubmitted = () => {
      console.table(formValues.value)
    }

    return {
      rules,
      username,
      password,
      description,
      selectedCountry,
      agreeToTerms,
      contactMethod,
      birthdate,
      countryOptions,
      contactOptions,
      formValues,
      onSubmitted
    }
  }
})
</script>

<style scoped>
main {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
}
</style>
