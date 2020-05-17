<template>
    <div class="header">
        <h1 @click='changeTittle' >{{tittle}} {{newtittle }}</h1>
    </div>
</template>


<script>
export default {
  props: ['newtittle'],
  data() {
    return {
      tittle: 'Devops System',
    };
  },
  methods: {
    changeTittle() {
      // 注册事件: 子组件通过事件方式修改父组件传参数据，否则会有js warning
      this.$emit('tittlechange', 'change tittle from emit');
    },
  },
};
</script>


<style scoped>
.header {
    background: green;
    padding: 3px;
}
h1 {
    text-align: center;
}
</style>
