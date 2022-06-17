<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "PersonalInformation"
})
</script>

<template>
  <div class="flexboxMain">
    <div id="information">
      <h1>Yan Lapa</h1>
      <div id="text">
        <span id="span-text">Hello, everyone! I`m programmer with such stack:</span>
        <ul id="langs">
          <li>Python</li>
          <li>C++</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
    <img id="image" src="./IMG/photo_2022-06-02_00-30-29.png">
  </div>
</template>

<style scoped>

.flexboxMain {
  background-position: bottom;
  background-image: url("./IMG/background_gragiend.png");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-left: 30px;
  margin-right: 30px;
}

#information {
  display: flex;
  flex-direction: column;
  flex-grow: 4;
}

.flexboxMain > #information > #text {
  position: relative;
  margin-right: 5%;
  margin-top: 10%;
  margin-bottom: auto;
  border-radius: 8px;
  background: #a0a6e3;
  text-decoration: none;
  display: block;
  max-height: 300px;
}

.flexboxMain > #image {
  max-height: 800px;
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: none;
}

#langs {
  font-size: 1.4rem;
}

#span-text {
  font-size: 1.4rem;
}

ul #langs {
  position: relative;
  top: 30%;
}

h1 {
  border-radius: 8px;
  padding: 5px;
  padding-left: 5%;
  padding-right: 5%;
  background: #a0a6e3;
  margin-top: 20%;
  margin-bottom: 5%;
  margin-right: auto;
  margin-left: auto;

}
</style>