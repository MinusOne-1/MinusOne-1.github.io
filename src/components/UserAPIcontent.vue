<template>
  <div id="form">
    <select id="year">
      <option v-for="n of 22" v-bind:value="n" v-bind:key="n">{{ 1999 + n }}</option>
    </select>
    <select id="countries-id">
      <option>AT</option>
      <option>RU</option>
    </select>
    <button id="get-holidays" v-on:click="takeFromForm">View holiday dates+</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
/*import fetch from "node-fetch";

var data1 = async () => {
  const api = 'https://date.nager.at/api/v3/publicholidays/2017/AT'
  const response = await fetch(api)
  return await response.json()
}

console.log(data1);*/


export default defineComponent({
  name: "UserAPIcontent",
  methods: {
    takeFromForm(): void {
      var year = (document.getElementById('year') as HTMLSelectElement)
      var chosen_year: string = year?.options[year.selectedIndex]?.text
      var countriesID = document.getElementById('countries-id') as HTMLSelectElement
      var chosen_country = countriesID?.options[countriesID.selectedIndex]?.text


      console.log(chosen_year)
      console.log(chosen_country)
    }
  }
});
</script>

<style scoped>

</style>