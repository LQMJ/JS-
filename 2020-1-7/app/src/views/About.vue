<template>
  <div class="about">
     <router-link tag="button" to="/">Home</router-link>
     <router-link tag="button" to="/about/1">About1</router-link>
     <router-link tag="button" to="/about/2">About2</router-link>
     <router-link tag="button" to="/public">  Public</router-link>
     <router-link tag="button" to="/login">Login</router-link>
    <h1>This is an about page</h1>
    <div v-if="$route.params.id == 1">这个是111页面</div>
    <div v-if="$route.params.id == 2">这个是222页面</div>
    <hr>
    <button @click="fn1">前进</button>
     <button @click="fn2">后退</button>
  </div>
</template>
<script>
export default {
  methods:{
    fn1(){
      this.$router.go(1)
    },
    fn2(){
      this.$router.go(-1)
    }
  }
}
/* 
   $route
      获取路由的信息（属性）

      this.$route.parmas

   $router
      跳转路由的方法（方法）

*/
// export default {
//   data(){
//     return {
//       num:0
//     }
//   },
//   created(){
//     this.num = 1;
//     console.log('created')
//     if(this.$route.params.id === '1'){
//       setTimeout(()=>{
//         console.log('请求接口1')
//       },1000)
//     }else if(this.$route.params.id === '2'){
//       setTimeout(()=>{
//         console.log('请求接口2')
//       },1000)
//     }
//   }
// }
</script>
