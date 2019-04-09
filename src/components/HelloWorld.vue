<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <button @click="add(1)">vuex+</button>
    <button @click="reduce">vuex-</button>
    <button @click="test">普通方法</button>
    <button @click="getArticleById">接口方法</button>
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
      method: "getArticleById",
      id: ""
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
    addParams(){
      let {role} = this.form
      return {role}
    },
    // async auth(){
    //   try{
    //     let res = await auth({...this.})
    //   }catch(err){

    //   }
    // }
  },
  computed: mapState({
    count: state => state.count
  }),
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
</style>
