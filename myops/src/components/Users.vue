<template>
    <div class="users">
        <!-- <h1> User Management </h1> -->
        <ul>
            <li @click='acct.show = !acct.show' v-for='(acct, index) in accounts' :key='index'>
                <!-- {{ acct }} -->
                <h2>{{acct.name}}</h2>
                <h3 v-show='acct.show'>{{acct.wechat}}</h3>
            </li>
        </ul>
        <!-- 传引用 -->
        <button @click='deleteAcct'>Delete</button>
    </div>
</template>


<script>
export default {
//   组件传数值
//   props: ['accounts'],
  props: {
    accounts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    //   accounts: [
    //     { name: 'john1', wechat: '1234566', show: false },
    //     { name: 'john2', wechat: '1234566', show: true },
    //     { name: 'john3', wechat: '1234566', show: false },
    //     { name: 'john4', wechat: '1234566', show: false },
    //     { name: 'john5', wechat: '1234566', show: false },
    //     { name: 'john6', wechat: '1234566', show: false },
    //     { name: 'john7', wechat: '1234566', show: true },
    //     { name: 'john8', wechat: '1234566', show: false },
    //     { name: 'john9', wechat: '1234566', show: false },
    //     { name: 'john10', wechat: '1234566', show: false },
    //   ],
    };
  },
  methods: {
    deleteAcct() {
      this.accounts.pop();
    },
    // test() {
    //   console.log(this.accounts);
    // },
  },
};
</script>


<style scoped>
.users {
    /* width: 100%； */
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    border: 1px solid #222222;
    margin: 10px;
}
h1 {
    color: red;
}
</style>
