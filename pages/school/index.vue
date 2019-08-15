<template>
    <div>
        我是school index
        <nuxt-link to="/school/teacher">跳到teacher</nuxt-link>
        <nuxt-link to="/school/student">跳到student</nuxt-link>
        <el-button>测试el-button</el-button>
        <div class="movies">
            <ul>
                <li v-for="item in moveList" :key="item.id">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            moveList: [
                {title:'方糖',id:1},
                {title:'大圣归来',id:2},
                {title:'盗梦空间',id:3},
                {title:'哪吒',id:4},
            ]
        }
    },
    // 在nuxt中，生命周期钩子只有created和beforeCreate这两个钩子可以在服务端正常使用
    // 在nuxt中发以不请求不能再created钩子中去发，会在前端执行


    // created () {
    //     setTimeout(() => {
    //         this.moveList = [
    //             {title:'方糖1',id:1},
    //             {title:'大圣归来1',id:2},
    //             {title:'盗梦空间1',id:3},
    //             {title:'哪吒1',id:4},
    //         ]
    //     }, 1000);
    // },
    // 


    // 发送异步请求在asyncData方法中执行，asyncData会在每次加载之前调用
    // 它可以在服务端或路由更新之前被调用，所以不能使用this
    // 两个参数： 
        // context: {isDev, route, store, env, params, query, req, res, redirect, error}
        // callback
    // asyncData(context,callback) {
    //     console.log(context);
    //     setTimeout(() => {
    //         callback(null,{
    //             moveList: [
    //                 {title:'方糖2',id:1},
    //                 {title:'大圣归来2',id:2},
    //                 {title:'盗梦空间2',id:3},
    //                 {title:'哪吒2',id:4},
    //             ]
    //         })
    //     }, 1000); 
    // },
    asyncData(context,callback) {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({
                    moveList: [
                        {title:'方糖3',id:1},
                        {title:'大圣归来3',id:2},
                        {title:'盗梦空间3',id:3},
                        {title:'哪吒3',id:4},
                    ]
                })
            }, 1000);
        }).then(res=>{
            console.log(res);
            callback(null,{
                moveList: res.moveList
            })
        }).catch(err=>{
            // callback(err)//两种方法都可以
            context.error(err)//两种方法都可以
        })
    },
    methods:{

    }
}
</script>