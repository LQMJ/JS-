<template>
  <div>
   <router-link tag="button" to="about/1">About1</router-link>
   <router-link tag="button" to="about/2">About2</router-link>
   <router-link tag="button" to="public">Public</router-link>
   <router-link tag="button" :to="{name:'p5',params:{nn:'洛奇'}}">p5</router-link>
    <router-link tag="button" :to="{name:'p4',params:{n:'洛奇'}}">p4</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      n:'洛奇'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
