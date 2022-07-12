<template>
  <van-loading></van-loading>
  <van-button round class="retry-button">按钮</van-button>
</template>
<script lang="ts">
//import { reactive, toRefs } from 'vue'
// import { fetchRandMusic } from '@/api/service'
// import { HomeHooksModel } from '@/model/HomeModel'

// // 首页hooks模块
// export const HomeHooks = () => {
//   // 响应值定义
//   const indexRec = reactive<HomeHooksModel>({
//     loading: true,
//     noData: false,
//     musicData: {}
//   })

//   // 查询随机音乐信息
//   const fetchMusicInfo = async () => {
//     const { data } = await fetchRandMusic()
//     indexRec.loading = false
//     indexRec.noData = data.code !== 1
//     indexRec.musicData = data.data
//   }
//   return { ...toRefs(indexRec), fetchMusicInfo }
// }
//
</script>
<script setup lang="ts">
import { ref } from 'vue'
// import { refreshStore } from '@/stores/index'
// // 接收状态值
// const refresher = refreshStore()

// const clickRefresh = () => {
//   // 更新状态值
//   refresher.$patch({ refreshNum: refresher.refreshNum + 1 })
// }
</script>
