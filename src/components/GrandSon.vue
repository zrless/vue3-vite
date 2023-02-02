<template>
  <h2>{{ msg }}</h2>
</template>

<script setup>
import { inject, onMounted } from "vue";

const useMsg = () => {
  return inject("msg").value + " 2222";
};
onMounted(() => {
  console.log(msg);
});
const msg = useMsg();
</script>
