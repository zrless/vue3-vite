<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" v-on:changeMsg="changeMsg" />
</template>

<script>
import { provide, ref } from "vue"
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  // data() {
  //   return {
  //     msg: 'Hello Vue 3.0',
  //   };
  // },
  // provide() {
  //   return {
  //     msg: this.msg
  //   };
  // },
  components: {
    HelloWorld,
  },
  setup() {
    const msg = ref("Hello Vue 3.0");
    provide("msg", msg);  //provide/inject 添加响应式
    return {
      msg
    }
  },
  methods: {
    changeMsg(data) {
      console.log(data);
      this.msg = this.msg === 'Hello Vue 3.0' ? 'Hello Vue' : 'Hello Vue 3.0';
    },
  },
};
</script>
