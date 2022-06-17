<script lang="ts">
import {defineComponent} from "vue"
import footerWithLinks from "@/components/footerWithLinks.vue"
import HeadMenu from "@/components/HeadMenu.vue"
import PersonalInformation from "@/components/PersonalInformation.vue"

export default defineComponent({
  name: "PersonalPage",
  components:
      {
        footerWithLinks,
        PersonalInformation,
        HeadMenu,
      },
})
</script>


<template>

  <HeadMenu/>
  <PersonalInformation/>
  <footerWithLinks/>
</template>

<style scoped>

</style>