<template>
    <div class="student">
        <h3>这个student列表页</h3>
        <ul>
            <li v-for="item in studentList" :key="item.id">
                <nuxt-link :to="`/school/student/${item.id}`">{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    layout: 'headerlayout',
    data(){
        return {
            studentList: [
                {id:1,name:'aaa'},
                {id:2,name:'bbb'},
                {id:3,name:'ccc'},
            ]
        }
    }
}
</script>