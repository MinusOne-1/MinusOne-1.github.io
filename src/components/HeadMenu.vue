<template>
  <header class="panel">
    <div class="menu">
      <button class="menu" onclick="window.location.href = '/index';">Personal Page</button>
      <button class="menu" onclick="window.location.href = '/apiUser';">Using Api</button>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "HeadMenu",
})
</script>

<style scoped>

header.panel {
  background: #c5c6ee;
  border-radius: 8px;

}

div.menu {
  position: relative;
  margin-left: auto;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  background: #c5c6ee;
  max-width: 500px;
}

button.menu {
  position: relative;
  font-size: 1.7rem;
  background: #a0a6e3;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

button.menu:hover {
  background: #dbd4f8;
  border: none;
}
</style>
