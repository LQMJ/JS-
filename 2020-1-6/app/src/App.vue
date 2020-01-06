<template>
    <div id="ppa">
		<router-link to="/" tag="button">去首页</router-link>
		<router-link to="/about" tag="button">去关于</router-link>
		<router-link to="/public" tag="button">去公共页</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
/* 
   	单页SPA优点
			不刷新页面，在当前页切换多页的操作方式，能够提高用户体验
			一些后端逻辑(工作)就可以分给前端来做，减少后端同学的压力，提高前端开发的业务能力
			能够共用一些公共静态资源，减少http请求
			实现真正的前后端分离

    /  		-> home.vue
		/about  -> about.vue
		/public -> public.vue
  
  安装路由:
			npm install vue-router
			或者
			yarn add vue-router

*/
export default {

}
</script>

<style>

</style>