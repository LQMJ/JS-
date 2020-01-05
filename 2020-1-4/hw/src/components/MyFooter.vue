<template>
    <footer class="footer">
        <span class="todo-count">
            <strong>{{pv.filter(item=>!item.checked).length}}</strong>
            <span>条未选中</span>
        </span>
        <ul 
            class="filters"
        >
            <li>
                <a 
                    href="#/all" 
                    :class="{selected:hash === '#/all'}"
                >全部</a>
            </li>
            <li>
                <a 
                    href="#/unchecked" 
                    :class="{selected:hash === '#/unchecked'}"
                >未选中</a>
            </li>
            <li>
                <a 
                    href="#/checked"
                    :class="{selected:hash === '#/checked'}"
                >已选中</a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
     props:['pv','hash']
}
</script>>

<style scoped>

</style>