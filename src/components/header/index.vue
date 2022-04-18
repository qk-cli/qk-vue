<template>
    <div class="header">
        <ul>
            <li class="active">
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/todo">待办事项</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.header{
    margin-top: 10px;
    ul{
        display: flex;
        justify-content: center;
        column-gap: 10px;
        a{
            display: block;
            padding: 10px 15px;
            width: auto;
            border-radius: 5px;
            border: 1px solid skyblue;
            transition: all 0.2s ease-in;
            &.router-link-active{
                color: #fff;
                background-color: skyblue;
            }
        }
    }
}
</style>