<script lang="ts">
import {defineComponent} from 'vue';
import HeadMenu from "@/components/HeadMenu.vue";
import UserAPIcontent from "@/components/UserAPIcontent.vue";

export default defineComponent({
  name: "UserAPI",
  components: {
    HeadMenu, UserAPIcontent,
  },
})
</script>

<template>
  <HeadMenu/>
  <UserAPIcontent/>
</template>


<style scoped>

</style>