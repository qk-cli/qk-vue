<template>
    <div class="todo">
        待办事项
        <p>当前时间：{{ COUNT }}</p>
        <button @click="addCount">刷新</button>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    methods:{
        ...mapMutations([
            'INCREMENT'
        ]),
        addCount(){
            this.INCREMENT()
        }
    },
    computed:{
        ...mapState(['COUNT'])
    }
}
</script>

<style scoped lang="scss">
.todo {
    margin-top: 15px;
    text-align: center;
}
</style>