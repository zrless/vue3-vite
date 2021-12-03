<template>
  <h2>{{ msg }}</h2>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'GrandSon',
  // inject: ['msg'],
  setup() {
    const msg = inject('msg');
    console.log(msg);
    return {
      msg,
    };
  },
};
</script>
