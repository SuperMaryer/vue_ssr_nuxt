<template>
    <div class="teacher">
        <h3>这个teacher列表页</h3>
        <ul>
            <li v-for="item in teacherList" :key="item.id">
                <nuxt-link :to="`/school/teacher/${item.id}`">{{item.name}}</nuxt-link>
            </li>
        </ul>
        <nuxt-child />
    </div>
</template>
<script>
export default {
    layout: 'headerlayout',
    data(){
        return {
            teacherList: [
                {id:1,name:'aaa'},
                {id:2,name:'bbb'},
                {id:3,name:'ccc'},
            ]
        }
    }
}
</script>