<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <button @click="showToastTimeAdd" class="btn-test">vuex+</button>
    <button @click="showToastTimeReduce" class="btn-test">vuex-</button>
    <button @click="test" class="btn-test">普通方法</button>
    <!-- <cube-button @click="showToastTime"></cube-button> -->
    <cube-button
    @click="getArticleById"
    :light="true"
    class="btn-test cubeic-like">接口方法</cube-button>
  </div>
</template>

<script>
import axios from "axios";
// import {getTest} from '@/service/testApi.js'
import { getArticleById, auth } from "@/api/helloWorld.js";

import store from "@/vuex/store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "前端框架搭建测试",
      reponseData: "",
      loading: false,
      // method: "getArticleById",
      id: "",
      num: "",
    };
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    test() {
      // 普通方法
      console.log(this.id);
      console.log(this.getArticleById);
    },
    async getArticleById() {
      //开始加载
      this.loading = true;
      // 传值
      let form = {
        id:this.id
      }
      //GET用例
      let res = await getArticleById(form);
      console.log(res);
      //加载完毕关闭加载
      this.loading = false;
    },
    showToastTimeAdd(){
      this.num = String(this.count)
      const toast = this.$createToast({
        time: 1000,
        txt: this.num
      })

      this.add(1)
      toast.show()

    },
    showToastTimeReduce() {
      this.num = String(this.count)
      const toast = this.$createToast({
        time: 0,
        txt: this.num,
      })
      this.reduce()
      toast.show()
      setTimeout(() => {
        toast.hide()
      }, 2000)
    }
  },
  computed: mapState({
    count: state => state.count
  }),
  mounted:function(){

  },
  store
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: #ccc;
  width: 2rem;
  height: 1rem;
  color: blue;
}

.btn-test{
  width: 50%;
  text-align: center;
  float: left;
  border: 1px solid gold;
}
</style>
