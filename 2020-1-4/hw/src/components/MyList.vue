<template>
    <li
         :class="{editing:onoff}" 
    >
        <div class="view">
            <input 
                   type="checkbox"
                   class="toggle"
                   :checked="pv.checked"
                   @change="checkedChange"
            >
            <label
                   @dblclick="repalce"
            >{{pv.txt}}</label>
            <button 
                   class="destroy"
                   @click="rm"
            ></button>
        </div>
        <input class="edit"
               ref='edit' 
               :value="pv.txt"  
               @blur="off"
               @keyup.esc="close"

        >
    </li>
</template>>

<script>
export default {
    props:{
        pv:{
            type:Object,   // 数据类型必须要是一个对象
            required:true  // 必须要传
        }
    },
    data(){
        return {
            val:Object.assign({},this.pv),
            onoff:false  
        }
    },
    methods:{
        checkedChange(ev){
            const {checked} = ev.target;
            const {id} = this.val;
            this.val.checked = checked;
            this.$emit('cc',id,checked)
        },
        rm(){
            const {id} = this.val;
            this.$emit('del',id)
        },
        repalce(){
            this.onoff=true;
            
            setTimeout(()=>{
                this.$refs.edit.select()
            })
        },
        off(ev){
            const {id} = this.val;
            this.$emit('off',id,ev.target.value)
            this.onoff = false; 
        },
        close(){
            const {id} = this.val;
             this.onoff = false;
              this.$emit('close',id,this.onoff)
        }
    }
}
</script>

<style scoped>

</style>