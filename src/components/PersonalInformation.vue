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
      <div class="text">
        <p class="p-text">Hello, everyone! I`m programmer with such stack:</p>
        <ul id="langs">
          <li>Python</li>
          <li>C++</li>
          <li>Java</li>
        </ul>
      </div>
      <div class="description text">
        <p class="p-text">This Website also shows my skills on front-end development. </p>
        <p class="p-text">You can navigate the site using the menu at the top - two buttons are available there.
          The first button leads to this page, and the second button leads to the page where the API is used.</p>
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

.flexboxMain > #information > .text {
  position: relative;
  margin-right: 5%;
  margin-bottom: 5%;
  border-radius: 8px;
  background: #a0a6e3;
  text-decoration: none;
  display: block;
  max-height: 300px;
}

.flexboxMain > #information > .description.text {
  background: rgba(160, 166, 227, 0.6);
  margin-left: auto;
  margin-bottom: auto;
  max-width: 700px;
  overflow: auto;
}

* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* for Chrome/Edge/Safari */
*::-webkit-scrollbar {
  margin-right: 5px;
  height: 12px;
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #a0a6e3;
  border-radius: 8px;
}

*::-webkit-scrollbar-thumb {
  background-color: #dbd4f8;
  border-radius: 5px;
  border: 3px solid #c5c6ee;
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

.p-text {
  margin: 20px;
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
  margin-top: 8rem;
  margin-bottom: 5%;
  margin-right: auto;
  margin-left: auto;

}
</style>
