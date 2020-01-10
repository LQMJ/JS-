<template>
    <div>
       <p>请登录</p>     
        用户名：<input v-model="uname" type="text">
        密码: <input v-model="pass" type="password">
        <button @click="login">登录</button>
    </div> 
</template>

<script>
export default {
     crated(){
         console.log(this.$route);
         this.path = this.$route.query.topath;
     },
     data(){
         return {
             uname:'',
             pass:'',
             path:''
         }
     },
     methods:{
         login(){
             let ary = [
                 {
                      un:'洛奇',
                      pass:'123'
                 },
                 {
                     un:'路飞',
                     pass:'123'
                 }
                
             ];
             const {uname,pass} = this;
             fetch('http://localhost:80/login?uname'+uname+'&pass='+pass).then(e=>e.json()).then(data=>{
                 if(data.code === 0){
                     this.$router.push('/');
                 }else{
                     alert('没有登录成功')
                 }
             })
         }
     }
}
</script>

<style>

</style>