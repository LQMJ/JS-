<template>
    <header class="header">
        <h1>todos</h1>
        <input 
               class="new-todo"
               v-model="val"
               placeholder="请输入内容"
               @keyup.13="enterFn"
        >
    </header>
</template>

<script>
   export default {
       data(){
           return {
               val:''
           }
       },
       methods:{
           enterFn(){
               this.$emit('cv',this.val.trim())
               this.val = '';
           }
       }
   }
</script>