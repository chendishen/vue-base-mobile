<template>
  <div class="hello">
    <div class="hhead">
      <h1>{{ msg }}</h1>
      <h1>{{tst}}</h1>
      <h2>{{count}}</h2>
<<<<<<< HEAD
      <img src="/static/helloWorld/test.png" alt="">
      <button @click="showToastTimeAdd" class="btn-test">vuex+</button>
      <button @click="showToastTimeReduce" class="btn-test">vuex-</button>
      <button @click="test" class="btn-test">普通方法</button>
      <cube-button @click="oauthAccessToken" :light="true" class="btn-test cubeic-like ignore">接口方法</cube-button>
      <button @click="petData" class="btn-test">原生方法</button>
    </div>
    <div class="article">
=======
      <button @click="showToastTimeAdd" class="btn-test">vuex+</button>
      <button @click="showToastTimeReduce" class="btn-test">vuex-</button>
      <button @click="test" class="btn-test">普通方法</button>
      <!-- <cube-button @click="showToastTime"></cube-button> -->
      <cube-button @click="getArticleById" :light="true" class="btn-test cubeic-like ignore">接口方法</cube-button>
      <button @click="petData" class="btn-test">原生方法</button>
    </div>
    <div class="article">
      <!-- <div class="change">test</div>
      <div>null</div>-->
      <!-- <button @click="subscanQRCallBack" class="btn-test">普通方法</button> -->
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
    </div>
  </div>
</template>

<script>
import axios from "axios";
<<<<<<< HEAD
import { android } from "@/api/android";
import { oauthAccessToken } from "@/api/api.js";

import store from "@/vuex/store";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
=======
// import {getTest} from '@/service/testApi.js'
import { android } from "@/api/android";
import { getArticleById, auth } from "@/api/helloWorld.js";

import store from "@/vuex/store";
import { mapState, mapMutations } from "vuex";
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd

// UI框架对应组件引入
// import {
//   /* eslint-disable no-unused-vars */
//   Style,
//   Button
// } from 'cube-ui'

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "前端框架搭建测试",
      tst: "",
      reponseData: "",
<<<<<<< HEAD
=======
      loading: false,
      // method: "getArticleById",
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
      id: "",
      num: "",
      da: ""
    };
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
<<<<<<< HEAD
    ...mapActions(["judgeIsLogin"]),
    oauthAccessToken() {
=======
    async getArticleById() {
      //开始加载
      this.loading = true;
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
      // 传值
      let form = {
        id: this.id
      };
<<<<<<< HEAD
      //接口示范
      oauthAccessToken(form)
        .then(res => {
          this.$createDialog({
            type: "alert",
            title: "提示",
            content: res.msg
          }).show();
        })
        .catch(error => {
          this.$createDialog({
            type: "alert",
            title: "提示",
            content: error.msg
          }).show();
        });
=======
      //GET用例
      let res = await getArticleById(form);
      console.log(res);
      //加载完毕关闭加载
      this.loading = false;
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
    },
    showToastTimeAdd() {
      this.num = String(this.count);
      const toast = this.$createToast({
        time: 1000,
        txt: this.num
      });

      this.add(1);
      toast.show();
    },
    showToastTimeReduce() {
      this.num = String(this.count);
      const toast = this.$createToast({
        time: 0,
        txt: this.num
      });
      this.reduce();
      toast.show();
      setTimeout(() => {
        toast.hide();
      }, 2000);
    },
    test(data) {
<<<<<<< HEAD
      // 安卓第三种接口,原生调用vue的方法，测试
=======
      // 安卓第三种接口,调用vue的方法
      alert("test调用成功");
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
      this.tst = data;
      console.log(this.id);
      console.log(this.getArticleById);
    },
    petData(data) {
      try {
        alert("window.$App.test()");
        this.msg = android.test();
      } catch (e) {
        console.log("出现错误, 如果在非android环境下访问, 出现该警告是正常的.");
      }
    }
<<<<<<< HEAD
  },
  computed:{
    ...mapGetters(["loginInfo", "isLogin"]),
    ...mapState({
      count: state => state.count
    })
  },
  mounted: function() {
    //跟原生互动的方法赋值
=======
    //   getData() {
    //   $App.showToast("哈哈，我是js调用的")
    // },
  },
  computed: mapState({
    count: state => state.count
  }),
  mounted: function() {
    //
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
    window.test = this.test;
  },
  store
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
// sass测试

// 1vw = 7.5px
<<<<<<< HEAD
// 用vw写法 全屏100vw，用px写法 全屏750px
=======
// 用vw写法 全屏100vw，用px写法 全屏375px
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd

.hhead {
  overflow: auto;
  button {
<<<<<<< HEAD
    background: #fff;
    width: 750px;
    height: 100px;
    color: #000000;
    font-size: 12px;
  }
  .btn-test {
    width: 750px;
    text-align: center;
    float: left;
    border: 1px solid #ccc;
=======
    background: #cccccc;
    width: 375px;
    height: 40px;
    color: blue;
    font-size: 12px;
  }
  .btn-test {
    width: 375px;
    text-align: center;
    float: left;
    border: 1px solid gold;
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
  }
}

.article div {
<<<<<<< HEAD
  color: #000000;
=======
  color: blue;
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
  width: 50%;
  height: 50px;
  line-height: 50px;
  float: left;
  background: #ccc;
<<<<<<< HEAD
=======
  &:hover {
    color: red;
  }
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
}
</style>
