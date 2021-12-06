<template>
  <h1 v-on:click="changeMsg">{{ msg }}</h1>
  <template v-for="item in list">-{{ item }}-</template>
  <GrandSon />
  <h3>counterjian1: {{ counterjian1 }}</h3>
</template>

<script>
import { onMounted, ref, watch, toRefs, computed } from 'vue';
import { useStore, mapActions } from 'vuex';
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
  computed: {
    counterjian1() {
      return this.$store.getters['counterModule/jian1'];
    },
  },
  methods: {
    changeMsg() {
      this.addAction(); // 等同于this.$store.dispatch('counterModule/addAction');
      this.$emit('changeMsg', { msg: '哈哈哈' });
    },
    ...mapActions({
      addAction: 'counterModule/addAction',
      reduceAction: 'counterModule/reduceAction',
    }),
  },
};
</script>
