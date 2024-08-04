<script setup>
import MainUI from './components/MainUI.vue'
import 'wired-elements'
</script>

<template>
  <header></header>
  <main id="wrapper">
    <MainUI />
  </main>
</template>

<style>
#wrapper {
  display: flex;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: Beige;
}
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
