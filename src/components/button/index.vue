<template>
    <div class="button">
        <button :class="type">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name:'QkButton',
    props:{
        type:{
            type:String,
            default:() => 'default'
        }
    },
    // computed:{
    //     buttonCLass(){
    //         return `is-${type}`
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.button{
    button{
        background-color: skyblue;
        border: none;
        color: #fff;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 15px;
    }
}
</style>