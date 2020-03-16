<template>
  <div class="hello">
    <div class="hhead">
      <h1>{{ msg }}</h1>
      <h1>{{tst}}</h1>
      <h2>{{count}}</h2>
      <img src="/static/helloWorld/test.png" alt="">
      <button @click="showToastTimeAdd" class="btn-test">vuex+</button>
      <button @click="showToastTimeReduce" class="btn-test">vuex-</button>
      <button @click="test" class="btn-test">普通方法</button>
      <cube-button @click="oauthAccessToken" :light="true" class="btn-test cubeic-like ignore">接口方法</cube-button>
      <button @click="petData" class="btn-test">原生方法</button>
    </div>
    <div class="article">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { android } from "@/api/android";
import { oauthAccessToken } from "@/api/api.js";

import store from "@/vuex/store";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

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
      id: "",
      num: "",
      da: ""
    };
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["judgeIsLogin"]),
    oauthAccessToken() {
      // 传值
      let form = {
        id: this.id
      };
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
      // 安卓第三种接口,原生调用vue的方法，测试
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
  },
  computed:{
    ...mapGetters(["loginInfo", "isLogin"]),
    ...mapState({
      count: state => state.count
    })
  },
  mounted: function() {
    //跟原生互动的方法赋值
    window.test = this.test;
  },
  store
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
// sass测试

// 1vw = 7.5px
// 用vw写法 全屏100vw，用px写法 全屏750px

.hhead {
  overflow: auto;
  button {
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
  }
}

.article div {
  color: #000000;
  width: 50%;
  height: 50px;
  line-height: 50px;
  float: left;
  background: #ccc;
}
</style>
