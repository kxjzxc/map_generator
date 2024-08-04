
<template>
  <wired-card id="side-left-box">
    <h1>地图类型</h1>
  </wired-card>
  <div id="generator">
    <wired-card id="show-map">
      <canvas ref="canvas"></canvas>
    </wired-card>
    <wired-card class="bottom-box">
      <div class="btn-box">
        <!--按钮区域-->
        <wired-button id="generateMap" @click="drawMapOnCanvas"> Generate Map</wired-button>
      </div>
    </wired-card>
  </div>
</template>


<script setup>
import 'wired-elements'
import { map_types } from '@scripts/map_types.js' //导入外部js变量
import { generateMap } from '@scripts/generate_map.js'
import { ref } from 'vue'

//ref会绑定同名的dom
let canvas = ref(null)

const drawMapOnCanvas = () => {
  if (canvas.value) {
    // generateMap(canvas.value) // 调用外部函数
  } else {
    console.error('Canvas element is not available.')
  }
}
</script>



<style scoped>
#side-left-box {
  display: flex;
  flex: 0 1 15%;
  justify-content: center;
}
#generator {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}
#show-map {
  flex: 1 1 200px;
}
</style>