<template>
  <div>about</div>
  <Heading :level="1">this is H1</Heading>
  <demoForm :form-data="formData"></demoForm>
</template>
<script setup>
import {ref} from 'vue'
let formData = ref({name: 'haha', age: 12})
import Heading from "../components/Heading";
import demoForm from "../components/demoForm";
</script>