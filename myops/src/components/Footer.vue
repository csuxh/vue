<template>
    <footer><p>{{copy_right}}</p></footer>
</template>


<script>
export default {
  data() {
    return {
      copy_right: 'Copyright 2020 by Jack.Xia',
    };
  },
};
</script>


<style scoped>
footer {
    background: grey;
    padding: 3px;
}
p {
    text-align: center;
}
</style>
