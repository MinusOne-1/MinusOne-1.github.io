<template>
  <div class="menu">
    Menu
    <button class="menu">Personal Page</button>
    <button class="menu">Using Api</button>
  </div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "HeadMenu",
})
</script>

<style scoped>
div.menu {
  display: flex;
  flex-direction: row;
  background: #a0a6e3;
  height: 200%;
}

button.menu {
  background: #a0a6e3;
  border: none;

}

button.menu:hover {
  background: #dbd4f8;
  border: none;
}
</style>