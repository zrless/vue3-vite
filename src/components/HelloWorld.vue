<template>
  <h1 v-on:click="changeMsg">{{ msg }}</h1>
  <template v-for="item in list">-{{ item }}-</template>
  <GrandSon />
</template>

<script>
import { onMounted, ref, watch, toRefs } from 'vue';
import { getList } from '../utils/tool';
import GrandSon from './GrandSon.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    GrandSon,
  },
  emits: ['changeMsg'],
  // vue3不再支持filters
  // filters: {
  //   filterMsg(msg) {
  //     return '大家好,' + msg;
  //   },
  // },
  setup(props) {
    // 使用 `toRefs` 创建对prop的 `msg` property 的响应式引用
    const { msg } = toRefs(props);
    const list = ref([]);
    const fetchList = async () => {
      const res = await getList(props.msg);
      list.value = res;
    };
    onMounted(fetchList);
    watch(msg, fetchList);
    return {
      list,
      fetchList,
    };
  },
  methods: {
    changeMsg() {
      this.$emit('changeMsg', { msg: '哈哈哈' });
    },
  },
};
</script>
