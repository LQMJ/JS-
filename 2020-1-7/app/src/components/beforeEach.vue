<template>
 <div>
   beforEach 
   <router-link to="/foo" tag="button">FOO</router-link>    
   <router-link to="/foo/2" tag="button">FOO2</router-link>    
   <router-link to="/foo/3" tag="button">FOO3</router-link> 
   <router-link to="/foo/4" tag="button">FOO4</router-link>
    <router-link to="/login" tag="button">login</router-link>
   <router-link to="/b1">去b1</router-link>
   <router-link to="/b2">去b2</router-link>
   <router-view/>
</div>  

</template>

<script>
export default {

}
</script>

<style>

</style>