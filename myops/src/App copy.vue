<template>
    <div id="app">
        <Header @tittlechange='updateTittle' :newtittle='tittle' />
        <div id="users">
            <!-- <router-link to="/">Home</router-link> -->
            <!-- 3.调用组件 -->
            <Users :accounts='lists' />
            <hr>
             <Users :accounts='lists' />

        </div>
        <Footer />
    </div>
</template>

<script>
// 1. 局部引用，组件嵌套
import Users from './components/Users.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  data() {
    return {
      lists: [
        { name: 'john1', wechat: '1234566', show: false },
        { name: 'john2', wechat: '1234566', show: true },
        { name: 'john3', wechat: '1234566', show: false },
        { name: 'john4', wechat: '1234566', show: false },
        { name: 'john5', wechat: '1234566', show: false },
        { name: 'john6', wechat: '1234566', show: false },
        { name: 'john7', wechat: '1234566', show: true },
        { name: 'john8', wechat: '1234566', show: false },
        { name: 'john9', wechat: '1234566', show: false },
        { name: 'john10', wechat: '1234566', show: false },
      ],
      tittle: 'New Tittle',
    };
  },
  methods: {
    updateTittle(param) {
      console.log(param);
      this.tittle = param;
    },
  },
  //   2. 注册组件
  components: {
    Header,
    Users,
    Footer,
  },
};
</script>

<style scoped>
h1 {
  color:green;
}
</style>
