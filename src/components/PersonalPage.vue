<script lang="ts">
import {defineComponent} from "vue"
import footerWithLinks from "@/components/footerWithLinks.vue"
import PersonalInformation from "@/components/PersonalInformation.vue"

export default defineComponent({
  name: "PersonalPage",
  components:
      {
        footerWithLinks,
        PersonalInformation,
      },
})
</script>


<template>
  <PersonalInformation/>
  <footerWithLinks/>
</template>

<style scoped>

</style>