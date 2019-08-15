<template>
    <div class="header-layout">
        <mynav />
        <!-- nuxt组件就是一个坑，以后凡是用到这个布局组件得页面，他们得组件都会呗放进这个坑 -->
        <nuxt/>
    </div>
</template>
<script>
import Mynav from '~/components/mynav'
export default {
    components: {
        Mynav
    }
}
</script>
