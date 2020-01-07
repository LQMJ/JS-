<template>
  <div>
      <p>请登录</p>
      用户名:<input v-model="uname" type="text">
      密码: <input v-model="pass" type="password">
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            uname:'',
            pass:''
        }
    },
    methods:{
        login(){
            const {uname,pass} = this;
            setTimeout(()=>{
                if(uname === '洛奇' && pass === '123'){
                //跳转
                //   this.$router.push('/')
                // this.$router.push({
                //     path:'/',
                //     // ?name=洛奇
                //     query:{
                //         name:'洛奇'
                //     }
                // })
                //替换
                // this.$router.replace({
                //     path:'/',
                //     // name:'home',
                //    query:{
                //         name:'洛奇'
                //     }
                // })
                this.$router.go(2)
                }
            },2000)
        }
    }
}
</script>

<style>

</style>