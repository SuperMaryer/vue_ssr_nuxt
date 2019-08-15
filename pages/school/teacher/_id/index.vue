<template>
    <div class="stu-detail">
        <!-- 这是一个添加了下划线的文件夹名 -->
        这是{{$route.params.id}}号老师详情
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    // nuxt 中使用validate 方法对路由参数进行校验
    // 必须返回一个布尔值，true:校验通过，false:校验失败
    // validate不能写在methods中
    validate(obj){
        console.log(obj);
        return true
        return /^\d+$/.text(obj.params.id)
    }
}
</script>