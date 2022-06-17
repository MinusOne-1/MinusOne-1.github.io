<template>
  <footer>
    ggggggggggggggggggggggg
    <p id="textINeedToBeCenter">You can contact me there: LAnnaIg03@yandex.ru or</p>
    <a id="textINeedToBeCenter" href="https://github.com/MinusOne-1"><img id="textINeedToBeCenter"
                                                                          src="./IMG/GitHub32logo.png"></a>
    <a id="textINeedToBeCenter" href="https://t.me/MinusOneLAI"><img id="textINeedToBeCenter"
                                                                     src="./IMG/Telegramlogo.png"></a>
  </footer>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "footerWithLinks",
})
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #a0a6e3;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

p#textINeedToBeCenter {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.25rem;
}

img#textINeedToBeCenter {
  height: 32px;
  width: 32px;
  padding: 5px;
}
</style>