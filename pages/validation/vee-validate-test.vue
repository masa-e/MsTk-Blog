<template>
  <h1>Vee-Validateでフォームバリデーション</h1>
  <input type="text" v-model="value" />
  <p>{{ errorMessage }}</p>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { required } from '@vee-validate/rules';

// パターン1
// const { value, errorMessage } = useField('name', (value) => {
//   if (!value) {
//     return 'this field is required';
//   }
//   return true;
// });

// パターン2
// const isRequired = (value) => (value ? true : 'This field is required'); 
// const { value, errorMessage } = useField('name', isRequired);

// パターン3
// const { value, errorMessage } = useField('name', required);

// パターン4
const { value, errorMessage } = useField('name', 'required');

definePageMeta({
  layout: 'index',
})
</script>
