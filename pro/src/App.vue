<template>
  <div id="app">
    <div>
      <h1>主页</h1>
      <ul>
        <a>导航栏</a>
        <li><a href="javascript:;" @click="Show(1)">创业团队</a></li>
        <li><a href="javascript:;" @click="Show(2)">比赛团队</a></li>
        <li><a href="javascript:;" @click="Show(3)">招聘信息</a></li>
        <li><a href="javascript:;" @click="Show(4)">课余活动</a></li>
        <input value="Srch" id="searchContent"/>
        <li><a href="javascript:;" @click="Search()">搜索</a></li>
        <li v-if="sign===false"><a href="javascript:;" @click="signIn()">登录</a></li>
        <li v-if="sign===false"><a href="javascript:;" @click="signUp()">注册</a></li>
        <li v-if="sign===true"><a href="javascript:;" @click="GRKJ()">个人空间</a></li>
        <li v-if="sign===true"><a href="javascript:;" @click="signOut()">注销</a></li>
      </ul>

      <div v-if="statNum===0">
        <h1>主页内容.jpg</h1>
      </div>
      
      <div v-if="statNum===1">
        <h1>Component1创业团队</h1>
        <content1></content1>
      </div>

      <div v-if="statNum===2">
        <h1>Component2比赛团队</h1>
      </div>

      <div v-if="statNum===3">
        <h1>Component3招聘信息</h1>
      </div>

      <div v-if="statNum===4">
        <h1>Component4课余活动</h1>
      </div>

    </div>
  </div>
</template>

<script>
import content1 from "./components/content1.vue"

export default {
  name: 'app',
  data () {
    return {
      statNum: 0,
      sign: false,
    }
  },

  components:{
    content1,
  },

  methods:{
    Show(num){
      this.statNum = num;
    },

    Search(){
      alert("搜索了"+searchContent.value);
    },

    signIn(){
      alert("sign in");
      this.sign = true;
    },

    signUp(){
      alert("sign up");
    },

    signOut(){
      alert("sign out");
      this.sign = false;
    },

    GRKJ(){
      alert("个人空间，登录！");
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
