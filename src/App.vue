<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" v-on:changeMsg="changeMsg" />
  <div>
    this.$store.state.counterModule.counter:
    {{ this.$store.state.counterModule.counter }}
  </div>
  <div>counter: {{ counter }}</div>
</template>

<script>
import { onMounted, provide, ref } from 'vue';
import { useStore } from 'vuex';
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
    const msg = ref('Hello Vue 3.0');
    let counter = ref(0);
    // setup中不能直接用this.$store/this.$router访问
    const store = useStore();
    counter = store.state.counterModule.counter;
    provide('msg', msg); //provide/inject 添加响应式
    onMounted(() => {});
    return {
      msg,
      counter,
    };
  },
  methods: {
    changeMsg(data) {
      console.log(data);
      this.msg = this.msg === 'Hello Vue 3.0' ? 'Hello Vue' : 'Hello Vue 3.0';
    },
  },
};
</script>
