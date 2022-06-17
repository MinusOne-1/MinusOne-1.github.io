<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "PersonalInformation"
})
</script>

<template>
  <div class="flexboxMain">
    <div id="text">
      <p>test github Hello, everyone! I`m programmer with such stack:</p>
      <ul id="langs">
        <li>Python</li>
        <li>C++</li>
        <li>Java</li>
      </ul>
    </div>
    <img id="image" src="./IMG/photo_2022-06-02_00-30-29.png">
  </div>
</template>

<style scoped>

.flexboxMain {
  background-position: bottom;
  background-image: url("./IMG/photo_2022-06-02_00-30-29.png");
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-left: 30px;
  margin-right: 30px;
}

.flexboxMain > #text {
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
  max-height: 300px;
  border-radius: 8px;
  background: skyblue;
  text-decoration: none;
  display: block;
  padding: 1em;
  flex-grow: 4;

}

.flexboxMain > #image {
  max-height: 800px;
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: none;
}


ul #langs {
  position: relative;
  top: 30%;
}
</style>